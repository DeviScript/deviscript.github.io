# RAG Workflows

## 1. Definition & Theory

**Retrieval-Augmented Generation (RAG)** is an architecture that enhances LLM responses by retrieving relevant external documents at inference time and including them in the prompt context.

**Why RAG?** LLMs have a knowledge cutoff and limited context windows. RAG lets you query a fresh, large knowledge base without fine-tuning or stuffing everything into the prompt.

**Core RAG pipeline:**

```
User Query
    ↓
[Embedding Model] → Query Vector
    ↓
[Vector Database] → Top-K Similar Chunks
    ↓
[Prompt Assembly] → System Prompt + Context Chunks + User Query
    ↓
[LLM] → Grounded Response
```

**Key components:**

- **Chunking**: Split documents into manageable pieces (300–1000 tokens). Chunk at semantic boundaries (paragraphs, sections) not arbitrary character counts.
- **Embedding**: Convert chunks to dense vectors using an embedding model (OpenAI `text-embedding-3-small`, Cohere, or local models via Ollama).
- **Vector store**: Stores and retrieves embeddings by semantic similarity. Options: Pinecone (managed), pgvector (Postgres extension), Weaviate, Qdrant, Chroma (local).
- **Retrieval**: Typically cosine similarity search to find the K most similar chunks to the query.
- **Reranking**: A second-pass model (e.g., Cohere Rerank) that re-scores retrieved chunks for relevance. Improves precision at the cost of latency.

---

## 2. Practical Examples & Code

### Embedding & Storing Documents

```ts
import OpenAI from "openai";
import { db } from "@/lib/db";

const openai = new OpenAI();

async function embedAndStore(chunks: { text: string; source: string }[]) {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: chunks.map((c) => c.text),
  });

  await db.insert(documents).values(
    chunks.map((chunk, i) => ({
      content: chunk.text,
      source: chunk.source,
      embedding: response.data[i].embedding, // stored as vector in pgvector
    }))
  );
}
```

### Semantic Search with pgvector

```sql
-- Cosine similarity search (pgvector extension)
SELECT content, source,
       1 - (embedding <=> $1::vector) AS similarity
FROM documents
ORDER BY embedding <=> $1::vector
LIMIT 5;
```

### Full RAG Query

```ts
async function ragQuery(userQuestion: string): Promise<string> {
  // 1. Embed the question
  const { data } = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: userQuestion,
  });
  const queryVector = data[0].embedding;

  // 2. Retrieve relevant chunks
  const chunks = await vectorSearch(queryVector, { limit: 5 });
  const context = chunks.map((c) => c.content).join("\n\n---\n\n");

  // 3. Generate answer
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `Answer based only on this context:\n\n${context}`,
      },
      { role: "user", content: userQuestion },
    ],
  });

  return response.choices[0].message.content ?? "No answer generated.";
}
```

---

## 3. Advanced Insights

- **Hybrid search**: Combine dense (semantic) search with sparse (BM25/keyword) search. Dense handles paraphrase and synonyms; sparse handles exact terms and IDs. Reciprocal Rank Fusion (RRF) merges the two result sets.
- **HyDE (Hypothetical Document Embeddings)**: Ask the LLM to generate a hypothetical answer to the query, then embed _that_ for retrieval. The hypothetical answer is closer in embedding space to real answers than the raw question is.
- **Chunking strategies**: Fixed-size chunking is simple but breaks context. Sentence-window chunking stores small chunks but retrieves the surrounding sentences. Document summary indexing stores a summary per document for filtering before chunk retrieval.
- **Metadata filtering**: Always attach metadata (source, date, category) to chunks. Pre-filter by metadata before the vector search to reduce noise and cost.
- **Evaluation**: RAG quality is measured by: Faithfulness (is the answer grounded in retrieved docs?), Answer Relevance (does it answer the question?), Context Relevance (are the retrieved chunks relevant?). Use RAGAS framework for automated evaluation.

---

## 4. Common Pitfalls

- **Retrieving irrelevant chunks**: Happens when the query and document use different vocabulary. Fix with hybrid search, HyDE, or query rewriting.
- **Context overflow**: Retrieving too many chunks fills the context window and degrades quality. Use reranking to select the 3–5 most relevant chunks, not 20.
- **Stale embeddings**: If document content changes, re-embed affected chunks. Implement a change detection mechanism (hash comparison, update timestamps).
- **No source attribution**: Production RAG systems must cite sources. Store chunk → source mapping and return it with answers.
- **Chunking at sentence boundaries that are mid-thought**: "The metric improved" at the end of a chunk is meaningless without the preceding context. Use overlapping chunks (e.g., 20% overlap) to preserve continuity.

---

## 5. Interview Tips

- Walk through the pipeline end-to-end: "I'd chunk the documents, embed with `text-embedding-3-small`, store in pgvector, then at query time embed the question, cosine-search the top-5 chunks, and pass them as context to GPT-4o-mini."
- Know the difference between **RAG** (retrieval at inference time) and **fine-tuning** (knowledge baked into weights). Explain when you'd use each.
- Mention **evaluation** — most candidates skip this. Mentioning RAGAS or even "I'd measure faithfulness and answer relevance" stands out.
- For production systems, discuss: caching repeated queries, async re-embedding on content changes, and hybrid search for robustness.
