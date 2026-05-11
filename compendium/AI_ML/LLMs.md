# Large Language Models

## 1. Definition & Theory

Large Language Models (LLMs) are transformer-based neural networks trained on massive text corpora to predict the next token. Key concepts:

**Transformer architecture:**

- **Attention mechanism**: Each token can attend to every other token in the context window. `Attention(Q, K, V) = softmax(QK^T / √d_k) · V`
- **Multi-head attention**: Run attention in parallel across multiple "heads" to capture different relationship types.
- **Positional encoding**: Inject position information since transformers process tokens in parallel (no inherent order).

**Key terms:**

- **Token**: A sub-word unit (roughly 4 characters or 0.75 words). GPT-4 has a ~128k token context window.
- **Embedding**: A dense vector representing a token or chunk of text in semantic space. Similar meanings = close vectors.
- **Temperature**: Controls randomness. 0 = deterministic (always pick the highest-probability token); 1 = sample from distribution; >1 = more creative/random.
- **Top-p (nucleus sampling)**: Only sample from the top tokens whose cumulative probability ≥ p. Reduces incoherent outputs vs pure temperature sampling.
- **RLHF**: Reinforcement Learning from Human Feedback — the alignment technique used to make LLMs helpful, harmless, and honest.

---

## 2. Practical Examples & Code

### OpenAI Chat Completion with Structured Output

```ts
import OpenAI from "openai";
import { z } from "zod";
import { zodResponseFormat } from "openai/helpers/zod";

const client = new OpenAI();

const ExtractedData = z.object({
  name: z.string(),
  skills: z.array(z.string()),
  yearsOfExperience: z.number(),
});

const response = await client.beta.chat.completions.parse({
  model: "gpt-4o-mini",
  messages: [
    { role: "system", content: "Extract structured data from the resume." },
    { role: "user", content: resumeText },
  ],
  response_format: zodResponseFormat(ExtractedData, "extracted_data"),
});

const data = response.choices[0].message.parsed; // typed as ExtractedData
```

### Streaming Response

```ts
const stream = await client.chat.completions.create({
  model: "gpt-4o",
  stream: true,
  messages: [{ role: "user", content: prompt }],
});

for await (const chunk of stream) {
  const text = chunk.choices[0]?.delta?.content ?? "";
  process.stdout.write(text);
}
```

### Prompt Template

```ts
function buildSystemPrompt(context: string): string {
  return `You are a helpful technical assistant.

Context:
${context}

Instructions:
- Answer based only on the provided context.
- If unsure, say "I don't know" rather than guessing.
- Be concise and technical.`;
}
```

---

## 3. Advanced Insights

- **Context window management**: Long contexts increase cost and can cause the model to "lose" information from the middle (the "lost in the middle" problem). Chunk and retrieve only relevant context using RAG.
- **Prompt injection**: Malicious user input that attempts to override system instructions. Defense: separate system prompt from user input structurally, validate and sanitize inputs, use output parsers to enforce schema.
- **Few-shot prompting**: Including 2–5 examples of the desired input/output format in the prompt dramatically improves consistency for structured tasks.
- **Function calling / tool use**: Modern LLMs can decide to call defined functions/tools. This is the foundation of agents — the model reasons about what action to take and returns a structured function call rather than free text.
- **Fine-tuning vs RAG**: Fine-tuning bakes knowledge into weights (expensive, requires training data, hard to update). RAG retrieves fresh knowledge at inference time (cheaper, more flexible). Use RAG for dynamic/recent knowledge; fine-tuning for style/format consistency.

---

## 4. Common Pitfalls

- **Treating LLM output as trusted data**: Always validate and sanitize LLM outputs before using them in code, DB queries, or displaying to users.
- **Ignoring token limits**: Silently truncating context causes confusing, wrong answers. Always track token count before sending.
- **Not caching**: LLM calls are expensive and slow. Cache responses for identical or near-identical prompts using semantic similarity (embedding-based cache) or exact hash matching.
- **Over-prompting**: Extremely long system prompts can confuse the model and increase cost. Be specific, not exhaustive.
- **No retry logic**: LLM APIs are probabilistic and occasionally return errors or malformed JSON. Add exponential backoff and retry.

---

## 5. Interview Tips

- Know the difference between **base model**, **instruction-tuned model**, and **fine-tuned model**. Interviewers test whether you understand what RLHF did to make ChatGPT vs raw GPT-3.
- Be able to explain **temperature** and **top-p** intuitively: "Temperature controls how adventurous the model is when picking the next word."
- Demonstrate awareness of **cost and latency trade-offs**: GPT-4o vs GPT-4o-mini, streaming vs batching.
- For agentic systems, explain the **ReAct pattern**: the model alternates between Reasoning (thinking about what to do) and Acting (calling a tool), then observing the result.
- Always bring up **safety and alignment**: guardrails, content moderation, output validation. Shows you've thought beyond "make it work."
