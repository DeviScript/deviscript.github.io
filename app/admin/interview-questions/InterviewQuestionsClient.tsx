"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Brain,
  ChevronDown,
  ChevronUp,
  Code2,
  Database,
  ExternalLink,
  Layers,
  MessageSquare,
  Sparkles,
  Target,
  User,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type QA = {
  q: string;
  a: string;
  tags?: string[];
};

type Section = {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  border: string;
  data: QA[];
};

// ---------------------------------------------------------------------------
// Q&A Data
// ---------------------------------------------------------------------------
const GENERIC_QA: QA[] = [
  {
    q: "Tell me about yourself.",
    a: "I'm Brian Lockhart, a Full Stack Developer and entrepreneur. I graduated from the UNC Chapel Hill Coding Bootcamp and have built production apps using the MERN stack (MongoDB, Express, React, Node). I also founded OuterWave, a digital venture and logistics platform. I love building tools that solve real problems — and I'm currently looking for a role where I can ship impactful products on a strong team.",
    tags: ["intro", "background"],
  },
  {
    q: "Why do you want to work here?",
    a: "I research every company I apply to. I look for mission alignment, a team that ships, and a problem space I can grow in. I'll customize this answer for each interview — I always lead with something specific about the product, team, or roadmap that genuinely excites me.",
    tags: ["motivation"],
  },
  {
    q: "What is your greatest strength?",
    a: "My greatest strength is moving from ambiguity to execution quickly. I can take a vague idea, break it into tasks, prototype fast, and iterate. That end-to-end ownership — from idea to deployed product — is where I add the most value.",
    tags: ["strengths"],
  },
  {
    q: "What is your greatest weakness?",
    a: "I sometimes over-engineer early solutions when speed matters more. I've gotten better by timebox-ing spikes and asking 'what's the simplest thing that could work?' before adding complexity.",
    tags: ["weaknesses", "growth"],
  },
  {
    q: "Describe a challenging project and how you handled it.",
    a: "Building OuterWave App solo meant wearing every hat — product, design, dev, and ops. The hardest part was scope creep. I solved it by forcing myself to ship an MVP, get real user feedback, and only then prioritize the next feature. That constraint improved the product more than any technical decision did.",
    tags: ["STAR", "experience"],
  },
  {
    q: "How do you handle tight deadlines?",
    a: "I prioritize ruthlessly. I identify the one thing that must ship, cut everything else, and communicate early if a deadline is at risk. Surprises are worse than bad news — so I flag blockers early and often.",
    tags: ["process", "communication"],
  },
  {
    q: "Tell me about a time you failed.",
    a: "I launched a feature no one asked for on OuterWave. I spent two weeks building an advanced filtering system before talking to a single user. They didn't need it. I learned to validate assumptions with the lightest possible prototype before building.",
    tags: ["STAR", "learning"],
  },
  {
    q: "Where do you see yourself in 5 years?",
    a: "Leading product development — either as a senior engineer who shapes technical direction, or as a founder building a funded company. Either path requires strong engineering fundamentals and product intuition, which is what I'm actively building now.",
    tags: ["goals"],
  },
  {
    q: "How do you stay current with technology?",
    a: "I build things with new tools instead of just reading about them. I also follow key voices on X/Twitter and Substack, watch release notes for the frameworks I use (Next.js, React, Node), and contribute to small open-source projects when I can.",
    tags: ["learning", "growth"],
  },
  {
    q: "How do you handle disagreements with teammates?",
    a: "I try to separate the idea from the person. I'll say 'help me understand your reasoning' before pushing back. If we're stuck, I suggest we test both approaches empirically — data usually breaks the tie. I don't need to win the argument; I need the team to ship the best thing.",
    tags: ["collaboration", "conflict"],
  },
  {
    q: "What motivates you?",
    a: "Shipping something real that people use. The moment a user does something with your code that you didn't anticipate — that's the best feeling in software. I'm also motivated by learning: every project makes me meaningfully better.",
    tags: ["motivation"],
  },
  {
    q: "Describe your ideal work environment.",
    a: "High autonomy, high trust, async-first with strong documentation, and a team that gives direct feedback. I work best when I own a problem end-to-end and can move fast without unnecessary meetings.",
    tags: ["culture", "preferences"],
  },
  {
    q: "How do you prioritize tasks when everything feels urgent?",
    a: "I use impact × effort as a quick filter. Then I ask: what breaks if this doesn't get done today? That usually reduces the list to one or two real priorities. Everything else gets scheduled or delegated.",
    tags: ["process", "prioritization"],
  },
  {
    q: "Do you have any questions for us?",
    a: "Always: (1) What does success look like in the first 90 days? (2) What's the biggest technical challenge the team is facing right now? (3) How does engineering and product collaborate here? (4) What do you wish you'd known before joining?",
    tags: ["closing"],
  },
];

const FULLSTACK_QA: QA[] = [
  {
    q: "Explain the difference between REST and GraphQL.",
    a: "REST uses fixed endpoints per resource; you often over-fetch or under-fetch. GraphQL uses a single endpoint and the client specifies exactly the data shape it needs, reducing payload size and round-trips. REST is simpler to cache at the HTTP layer; GraphQL requires more sophisticated caching (DataLoader, persisted queries). I default to REST unless the client data requirements are highly varied.",
    tags: ["API", "architecture"],
  },
  {
    q: "What is server-side rendering (SSR) and when would you use it?",
    a: "SSR generates HTML on the server per request, so the browser gets fully rendered markup — better for SEO and first-contentful-paint. I use it in Next.js for public-facing pages that need to be indexed. Static generation (SSG) is preferable when data doesn't change per-request. Client-side rendering is fine for behind-auth dashboards where SEO doesn't matter.",
    tags: ["Next.js", "performance", "rendering"],
  },
  {
    q: "What is the difference between authentication and authorization?",
    a: "Authentication is proving who you are (login, JWT verification). Authorization is determining what you're allowed to do (RBAC, permission checks). Both must be enforced server-side — client-side checks are UX, not security.",
    tags: ["security", "auth"],
  },
  {
    q: "How does the React reconciliation algorithm work?",
    a: "React diffs the previous and next virtual DOM trees using a heuristic O(n) algorithm. It assumes elements of different types produce different trees (full remount), and uses the `key` prop to match list items across renders. When state changes, React re-renders from the changed component downward, batching updates in concurrent mode for better performance.",
    tags: ["React", "internals"],
  },
  {
    q: "What is a JWT and how does it work?",
    a: "A JSON Web Token has three base64-encoded parts: header (algorithm), payload (claims), and signature. The server signs the payload with a secret; the client stores the token and sends it on every request. The server verifies the signature — if valid, the claims are trusted. JWTs are stateless but can't be revoked without a denylist, so keep expiry short and rotate refresh tokens.",
    tags: ["security", "auth"],
  },
  {
    q: "Explain the event loop in Node.js.",
    a: "Node is single-threaded but non-blocking. The event loop processes the call stack, then checks the microtask queue (Promises, queueMicrotask), then the macro-task queue (setTimeout, I/O callbacks). I/O happens in libuv's thread pool — when complete, the callback is queued. This allows thousands of concurrent connections without threads.",
    tags: ["Node.js", "internals"],
  },
  {
    q: "What is the difference between SQL and NoSQL databases?",
    a: "SQL databases (Postgres, MySQL) enforce a schema, support ACID transactions, and excel at relational queries. NoSQL databases (MongoDB, DynamoDB) are schema-flexible and scale horizontally more easily, but sacrifice joins and strong consistency by default. I use Postgres when data relationships are complex; MongoDB when document structure varies per record or write throughput is paramount.",
    tags: ["databases"],
  },
  {
    q: "What are React hooks and why were they introduced?",
    a: "Hooks let function components use state, side effects, context, and refs without class components. They were introduced in React 16.8 to solve code reuse problems — logic that previously required HOCs or render props can now be extracted into a custom hook. Key hooks: useState, useEffect, useContext, useRef, useMemo, useCallback.",
    tags: ["React"],
  },
  {
    q: "How do you handle errors in async/await code?",
    a: "Wrap in try/catch for local handling. For global unhandled promise rejections in Node, listen to `process.on('unhandledRejection')`. In React, use Error Boundaries for render-phase errors. I also create a typed Result pattern (success/error union) for domain operations so callers are forced to handle both paths.",
    tags: ["JavaScript", "error handling"],
  },
  {
    q: "What is CORS and how do you handle it?",
    a: "Cross-Origin Resource Sharing is a browser mechanism that restricts HTTP requests to different origins. The server sets `Access-Control-Allow-Origin` and related headers. In Express I use the `cors` package with an explicit allowlist — never `*` in production for credentialed requests. Preflight OPTIONS requests must also be handled.",
    tags: ["security", "HTTP"],
  },
  {
    q: "What is the difference between `useMemo` and `useCallback`?",
    a: "`useMemo` memoizes a computed value; `useCallback` memoizes a function reference. Both re-run when dependencies change. Use `useCallback` when passing callbacks to memoized children to prevent unnecessary re-renders. Use `useMemo` for expensive calculations. Don't over-use either — premature memoization adds complexity without measurable gain in most cases.",
    tags: ["React", "performance"],
  },
  {
    q: "Explain how CSS specificity works.",
    a: "Specificity is calculated as a 4-part score: inline styles (1,0,0,0), IDs (0,1,0,0), classes/attributes/pseudo-classes (0,0,1,0), elements/pseudo-elements (0,0,0,1). The highest specificity wins. `!important` overrides all — avoid it. In Tailwind, specificity is mostly flat (utility classes) so I rarely fight cascade issues.",
    tags: ["CSS"],
  },
  {
    q: "What are WebSockets and when would you use them?",
    a: "WebSockets provide a persistent, full-duplex TCP connection between client and server — unlike HTTP which is request-response. Use them for real-time features: chat, live dashboards, collaborative editing, game state. For one-way server pushes, Server-Sent Events are simpler. I'd use Socket.io or native WebSocket API with a reconnect strategy.",
    tags: ["real-time", "networking"],
  },
  {
    q: "What is CI/CD and how have you used it?",
    a: "Continuous Integration runs tests and linting on every push; Continuous Deployment automatically deploys passing builds. I've set up GitHub Actions pipelines that run type-check, lint, and test on every PR, and deploy to Vercel on merge to main. The goal is making deployment boring — every merge should be safe to ship.",
    tags: ["DevOps", "process"],
  },
];

const AI_QA: QA[] = [
  {
    q: "What is the difference between AI, ML, and LLMs?",
    a: "AI is the broad field of machines performing tasks that require intelligence. ML is a subset where models learn patterns from data without explicit programming. LLMs (Large Language Models) are a specific class of ML model trained on vast text corpora using transformer architecture to predict and generate language. GPT-4, Claude, and Gemini are LLMs.",
    tags: ["fundamentals"],
  },
  {
    q: "What is prompt engineering?",
    a: "Prompt engineering is the practice of crafting inputs to LLMs to reliably produce desired outputs. Techniques include: few-shot examples, chain-of-thought (asking the model to reason step-by-step), system prompts for role/persona, output format constraints (JSON mode), and temperature control. Good prompts are clear, specific, and include examples of the expected output.",
    tags: ["LLMs", "prompting"],
  },
  {
    q: "What is RAG (Retrieval Augmented Generation)?",
    a: "RAG grounds LLM responses in external knowledge by retrieving relevant documents at query time and injecting them into the prompt context. The pipeline: (1) embed user query, (2) vector similarity search against a knowledge base, (3) inject top-k results into the prompt, (4) LLM generates answer grounded in retrieved content. Reduces hallucination and keeps knowledge current without retraining.",
    tags: ["RAG", "architecture"],
  },
  {
    q: "What are embeddings?",
    a: "Embeddings are dense numeric vectors that represent semantic meaning. Similar concepts cluster close together in vector space. Text embeddings let us do semantic search (find conceptually related content, not just keyword matches), clustering, and anomaly detection. Models like OpenAI's text-embedding-ada-002 or open-source alternatives (all-MiniLM) produce these vectors.",
    tags: ["embeddings", "vectors"],
  },
  {
    q: "What is a vector database and why is it needed?",
    a: "Vector databases (Pinecone, Weaviate, pgvector, Chroma) are optimized for storing and querying high-dimensional embeddings via Approximate Nearest Neighbor (ANN) search. Traditional databases can't efficiently find 'most similar' vectors at scale. They're the retrieval backbone of RAG systems.",
    tags: ["databases", "RAG"],
  },
  {
    q: "What is fine-tuning and when should you use it instead of prompting?",
    a: "Fine-tuning trains a pre-trained model further on domain-specific data, baking in knowledge or style. Use it when: prompts are too long/expensive for the task, you need consistent formatting the base model can't reliably produce, or you have thousands of high-quality labeled examples. For most use cases, good prompting + RAG is cheaper and more maintainable than fine-tuning.",
    tags: ["fine-tuning", "LLMs"],
  },
  {
    q: "What is an AI agent?",
    a: "An AI agent is an LLM equipped with tools (functions it can call) and a loop: perceive input → reason → act → observe result → repeat. The LLM decides when to call tools (web search, code execution, APIs, databases) and how to interpret results. Frameworks like LangChain, LlamaIndex, and Vercel AI SDK provide the scaffolding.",
    tags: ["agents", "architecture"],
  },
  {
    q: "What are hallucinations in LLMs and how do you mitigate them?",
    a: "Hallucinations are plausible-sounding but factually incorrect outputs. Mitigation strategies: (1) RAG — ground responses in retrieved documents, (2) citations — ask the model to cite sources, (3) temperature 0 for factual tasks, (4) output verification with a second LLM call, (5) structured outputs with validation, (6) human-in-the-loop for high-stakes decisions.",
    tags: ["reliability", "LLMs"],
  },
  {
    q: "What is the difference between zero-shot, one-shot, and few-shot prompting?",
    a: "Zero-shot: task described with no examples — rely on the model's training. One-shot: one example provided. Few-shot: multiple examples showing the pattern. More examples generally improve reliability and format consistency, especially for structured outputs. Few-shot is often the fastest way to improve output quality before reaching for fine-tuning.",
    tags: ["prompting"],
  },
  {
    q: "How do you evaluate an AI system?",
    a: "Evaluation layers: (1) Unit tests on deterministic outputs (format validation, JSON schema), (2) LLM-as-judge for subjective quality (another model scores coherence, accuracy, relevance), (3) Human eval on a golden dataset, (4) Online metrics (user thumbs up/down, task completion rate). Tools: RAGAS for RAG pipelines, LangSmith for tracing, custom evals.",
    tags: ["evaluation", "testing"],
  },
  {
    q: "What is the context window and why does it matter?",
    a: "The context window is the max tokens an LLM can process in one call (input + output). GPT-4 Turbo: 128k, Claude 3: 200k, Gemini 1.5: 1M. Beyond it, content is truncated — models may lose early context (lost-in-the-middle problem). For long documents, chunking + RAG is more reliable than stuffing everything in context.",
    tags: ["LLMs", "architecture"],
  },
  {
    q: "What are function calling / tool use in LLMs?",
    a: "Function calling allows LLMs to output structured JSON specifying a tool name and arguments instead of prose. The application executes the tool and returns results to the model. This enables agents to call APIs, query databases, run code, and take real-world actions deterministically. OpenAI, Anthropic, and Google all support this natively.",
    tags: ["agents", "LLMs"],
  },
  {
    q: "How do you handle rate limits and costs when building on LLM APIs?",
    a: "Strategies: (1) Cache responses for identical/similar queries, (2) Use smaller models for simple subtasks (gpt-4o-mini instead of gpt-4o), (3) Batch requests where possible, (4) Implement exponential backoff for 429s, (5) Set max_tokens to avoid runaway outputs, (6) Monitor token usage per feature with logging. Cost is a product constraint — model selection is an architecture decision.",
    tags: ["production", "cost"],
  },
  {
    q: "What is LangChain and have you used it?",
    a: "LangChain is a framework for building LLM-powered applications with composable chains, agents, and integrations. It abstracts prompt templates, output parsers, memory, and tool use. I've explored it for RAG pipelines. For production, I often prefer lighter abstractions (Vercel AI SDK, direct API calls) unless the chain complexity justifies LangChain's overhead.",
    tags: ["frameworks", "tooling"],
  },
  {
    q: "What is multimodal AI?",
    a: "Multimodal models process and generate multiple data types — text, images, audio, video, code. GPT-4o, Claude 3, and Gemini are all multimodal. This enables: image understanding, document parsing (PDFs with charts), audio transcription + response, and video analysis. Opens up use cases beyond pure text: visual search, accessibility tooling, automated data extraction.",
    tags: ["multimodal", "LLMs"],
  },
];

const DATA_QA: QA[] = [
  {
    q: "What is the difference between structured and unstructured data?",
    a: "Structured data fits neatly into rows and columns with a predefined schema (SQL tables, spreadsheets). Unstructured data has no predefined format — text, images, audio, PDFs, emails. Semi-structured data has some organization but no strict schema (JSON, XML, logs). Most enterprise data is unstructured; AI unlocks value from it.",
    tags: ["fundamentals"],
  },
  {
    q: "What is ETL?",
    a: "Extract, Transform, Load: the pipeline for moving data from source systems to a destination (data warehouse, lake). Extract: pull raw data from APIs, databases, files. Transform: clean, normalize, join, aggregate. Load: write to destination. Modern stacks use ELT (transform in the warehouse with dbt) because cloud warehouses are cheap to compute in.",
    tags: ["data engineering"],
  },
  {
    q: "What is a data warehouse vs a data lake?",
    a: "A data warehouse (Snowflake, BigQuery, Redshift) stores structured, processed data optimized for analytical queries. A data lake stores raw data in any format at low cost (S3, GCS). A data lakehouse (Databricks, Delta Lake) combines both: raw storage with warehouse-quality query performance. Analytics teams typically query the warehouse; ML teams often work from the lake.",
    tags: ["architecture"],
  },
  {
    q: "Explain the difference between OLTP and OLAP.",
    a: "OLTP (Online Transaction Processing) databases are optimized for many small, fast read/write operations — your production Postgres database. OLAP (Online Analytical Processing) systems are optimized for large aggregations across many rows — your data warehouse. Running analytics on OLTP databases kills production performance; that's why you replicate to a warehouse.",
    tags: ["databases", "architecture"],
  },
  {
    q: "What is data normalization?",
    a: "Normalization organizes relational data to eliminate redundancy and improve integrity. 1NF: atomic columns, no repeating groups. 2NF: no partial dependencies on composite keys. 3NF: no transitive dependencies. In practice, OLTP schemas normalize to 3NF; OLAP schemas denormalize (star/snowflake) for query performance.",
    tags: ["SQL", "databases"],
  },
  {
    q: "What is an index in a database and when would you use one?",
    a: "An index is a data structure (usually B-tree) that speeds up row lookups by a column at the cost of extra storage and slower writes. Add indexes on: foreign keys, columns in WHERE/JOIN/ORDER BY clauses with high selectivity. Don't index every column — over-indexing slows writes and bloats storage. Use EXPLAIN ANALYZE to diagnose slow queries.",
    tags: ["databases", "performance"],
  },
  {
    q: "What are the main types of SQL JOINs?",
    a: "INNER JOIN: only matching rows. LEFT JOIN: all left rows + matching right (nulls where no match). RIGHT JOIN: inverse. FULL OUTER JOIN: all rows from both, nulls where no match. CROSS JOIN: cartesian product. Self JOIN: join a table to itself. In practice, INNER and LEFT cover 95% of use cases.",
    tags: ["SQL"],
  },
  {
    q: "What is a primary key vs a foreign key?",
    a: "A primary key uniquely identifies each row in a table (usually auto-increment integer or UUID). A foreign key is a column in one table that references the primary key of another, enforcing referential integrity — you can't insert a foreign key value that doesn't exist in the parent table. They're the foundation of relational data modeling.",
    tags: ["SQL", "fundamentals"],
  },
  {
    q: "What are aggregate functions in SQL?",
    a: "COUNT, SUM, AVG, MIN, MAX — they operate on sets of rows. Used with GROUP BY to aggregate per category. HAVING filters groups (like WHERE but post-aggregation). Window functions (ROW_NUMBER, RANK, LAG, LEAD, SUM OVER) perform calculations across rows related to the current row without collapsing them into a single output row.",
    tags: ["SQL"],
  },
  {
    q: "What is a CTE (Common Table Expression)?",
    a: "A CTE is a named temporary result set defined with `WITH cte_name AS (SELECT ...)` that you can reference in the main query. CTEs improve readability by breaking complex queries into named steps. Recursive CTEs can traverse hierarchical data (org charts, category trees). Most databases optimize CTEs similarly to subqueries.",
    tags: ["SQL"],
  },
  {
    q: "What is data cleaning and why is it important?",
    a: "Data cleaning is the process of identifying and fixing errors: missing values (impute or drop), duplicates (dedup), inconsistent formats (normalize dates, strings), outliers (cap or remove), wrong data types. 'Garbage in, garbage out' — bad data produces bad analysis and bad model predictions. In practice, 60-80% of a data project is cleaning.",
    tags: ["data quality"],
  },
  {
    q: "What is the difference between a mean, median, and mode?",
    a: "Mean: sum divided by count — sensitive to outliers. Median: middle value when sorted — robust to outliers. Mode: most frequent value. For skewed distributions (income, house prices), median is more representative. Mean works well for symmetric distributions. Always visualize before choosing a central tendency metric.",
    tags: ["statistics"],
  },
  {
    q: "What is data governance?",
    a: "Data governance is the set of policies, processes, and standards that ensure data is accurate, secure, accessible, and compliant. It covers: data ownership, data dictionaries, access controls, lineage tracking, retention policies, and GDPR/CCPA compliance. At scale, without governance, you get data swamps where no one trusts the numbers.",
    tags: ["governance", "compliance"],
  },
  {
    q: "What is a dashboard and what makes a good one?",
    a: "A dashboard is a visual interface displaying key metrics. A good dashboard: (1) answers one clear question per view, (2) shows the right audience the right metrics (executive vs. ops), (3) uses appropriate chart types (line for trends, bar for comparison, scatter for correlation), (4) loads fast, (5) has clear labels and no chartjunk, (6) links to the underlying data for drill-down.",
    tags: ["visualization", "BI"],
  },
  {
    q: "What is A/B testing?",
    a: "A/B testing is a controlled experiment comparing two variants (A = control, B = treatment) to measure which performs better on a defined metric. Requirements: random assignment, sufficient sample size (power analysis), single variable change, statistical significance threshold (p < 0.05). Common mistakes: stopping early (peeking), testing multiple things simultaneously, ignoring novelty effects.",
    tags: ["experimentation", "statistics"],
  },
  {
    q: "What is the difference between correlation and causation?",
    a: "Correlation measures the strength of a linear relationship between two variables. Causation means one variable directly causes changes in another. Correlation does not imply causation — a third variable (confounder) may drive both. Establishing causation requires: randomized controlled experiments, instrumental variables, difference-in-differences, or regression discontinuity designs.",
    tags: ["statistics"],
  },
  {
    q: "What is a KPI?",
    a: "Key Performance Indicator — a measurable value that shows how effectively an objective is being achieved. Good KPIs are: specific, measurable, actionable, relevant to the goal, and time-bound (SMART). North Star Metric = the single most important KPI for a product (e.g., Airbnb: nights booked). Leading indicators predict future performance; lagging indicators measure past results.",
    tags: ["metrics", "strategy"],
  },
  {
    q: "What is data lineage?",
    a: "Data lineage tracks the origin, movement, and transformation of data through a pipeline — where it came from, how it was changed, and where it went. Critical for debugging bad data, auditing compliance, and understanding impact of schema changes. Tools: dbt's DAG view, OpenLineage, Marquez, DataHub.",
    tags: ["data engineering", "governance"],
  },
  {
    q: "What is the difference between batch and stream processing?",
    a: "Batch processing runs jobs on accumulated data at scheduled intervals (nightly ETL, daily reports). Stream processing handles data in real time as it arrives (Kafka, Flink, Spark Streaming). Batch is simpler and cheaper; streaming is necessary when latency matters (fraud detection, live dashboards, real-time recommendations).",
    tags: ["data engineering", "architecture"],
  },
  {
    q: "What tools have you used for data analysis or visualization?",
    a: "SQL for querying (Postgres, BigQuery). Excel/Google Sheets for quick analysis and stakeholder-friendly outputs — pivot tables, VLOOKUP, named ranges. JavaScript charting libraries (Chart.js, Recharts) for embedded analytics in apps. I've also explored Python pandas for data cleaning pipelines. I prioritize the tool that gets the answer to the right person fastest.",
    tags: ["tools"],
  },
];

const PM_QA: QA[] = [
  {
    q: "How do you prioritize a product backlog?",
    a: "I use a combination of frameworks depending on context. RICE (Reach × Impact × Confidence / Effort) for scoring. MoSCoW (Must/Should/Could/Won't) for release planning. I always anchor prioritization to the North Star Metric and current company OKRs. Most importantly: I talk to users and let real pain points override internal assumptions.",
    tags: ["prioritization", "frameworks"],
  },
  {
    q: "What is a product roadmap and how do you build one?",
    a: "A roadmap is a strategic document showing where the product is going and roughly when. I build it: (1) Start with company goals and user research, (2) Define themes (not features), (3) Assign rough time horizons (now/next/later), (4) Leave room for unplanned work (bugs, tech debt, discoveries), (5) Review and update monthly. Roadmaps are communication tools, not contracts.",
    tags: ["roadmap", "strategy"],
  },
  {
    q: "How do you define and measure product success?",
    a: "Agree on the North Star Metric before building. Instrument the feature from day one. Define success criteria in the spec (e.g., '20% increase in activation rate within 30 days'). Post-launch: monitor metrics, run user interviews, check for unintended regressions. Celebrate data-based wins; kill features that don't move the metric.",
    tags: ["metrics", "success"],
  },
  {
    q: "How do you work with engineering teams?",
    a: "My background as a developer gives me a big advantage here. I write detailed specs with clear acceptance criteria, but I also let engineers push back on approach. I protect the team from scope creep mid-sprint. I join standups, ask about blockers early, and never go around engineers to get 'just one more thing' added. Trust is the foundation.",
    tags: ["collaboration", "engineering"],
  },
  {
    q: "What is a PRD (Product Requirements Document)?",
    a: "A PRD defines what to build and why — not how. Sections: problem statement, user personas, goals/success metrics, user stories/requirements, out of scope, open questions, timeline. A good PRD is concise enough to be read, detailed enough to build from, and honest about unknowns. I treat it as a living document, not a handoff artifact.",
    tags: ["documentation", "process"],
  },
  {
    q: "How do you handle stakeholder conflicts?",
    a: "First, understand each stakeholder's underlying concern — surface positions often mask real interests. Then anchor the conversation to shared goals (user value, company metrics). When alignment is impossible, escalate to whoever owns the business objective with a clear recommendation and tradeoffs. I document decisions and reasoning so we can revisit if the outcome doesn't match the hypothesis.",
    tags: ["stakeholders", "communication"],
  },
  {
    q: "What is a user story?",
    a: "A user story captures a feature from the user's perspective: 'As a [persona], I want [goal] so that [benefit].' Good user stories are INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable. Acceptance criteria define 'done.' Stories are conversation starters, not requirements specs — the real detail lives in the discussion.",
    tags: ["agile", "process"],
  },
  {
    q: "How do you conduct user research?",
    a: "Mix of methods: user interviews (open-ended, non-leading questions) for qualitative insight, surveys for quantitative signal, usability testing for friction identification, analytics for behavioral patterns, and support ticket analysis for pain points. I follow the '5 users to find 85% of usability issues' heuristic for lean testing. Always separate problem discovery from solution validation.",
    tags: ["research", "UX"],
  },
  {
    q: "What is the difference between output and outcome metrics?",
    a: "Outputs are things you produce: features shipped, story points completed, pages written. Outcomes are changes in user behavior or business results: retention improved, revenue grew, support tickets dropped. Good product teams optimize for outcomes, not outputs. 'We shipped 10 features' is irrelevant if user retention didn't move.",
    tags: ["metrics", "strategy"],
  },
  {
    q: "How do you decide when to build, buy, or partner?",
    a: "Build when: it's a core differentiator, you need full control, or no good options exist. Buy when: it's a commodity function, time-to-market matters, and the cost is justified. Partner when: you need capabilities that aren't your core competency and a vendor has a complementary distribution advantage. Always evaluate total cost of ownership, not just license price.",
    tags: ["strategy", "build-vs-buy"],
  },
  {
    q: "How do you manage technical debt from a PM perspective?",
    a: "I treat tech debt as a product risk, not just an engineering problem. I allocate 20% of sprint capacity to debt reduction by default. I help engineering translate debt into user-facing risk ('this slow query is why checkout takes 4 seconds'). I make debt visible in roadmap planning so stakeholders understand the tradeoff of skipping it.",
    tags: ["technical debt", "engineering"],
  },
  {
    q: "What frameworks do you use for product strategy?",
    a: "Jobs-to-be-Done for understanding user motivation. Porter's Five Forces / SWOT for competitive positioning. OKRs for goal-setting and alignment. Product-Market Fit survey (Rahul Vohra's 'how would you feel if you could no longer use this product?') for PMF assessment. I pick the lightest framework that answers the question — frameworks are thinking tools, not deliverables.",
    tags: ["strategy", "frameworks"],
  },
  {
    q: "How do you handle a feature that isn't getting traction?",
    a: "(1) First, confirm it's actually not getting traction — check if the metric is even instrumented correctly. (2) Diagnose: is it a discovery problem (users don't know it exists), a UX problem (they find it but can't use it), or a value problem (they try it but don't get value)? (3) Run one focused experiment to test the hypothesis. (4) If still no signal after two experiments, kill it and document the learning.",
    tags: ["product decisions", "analytics"],
  },
  {
    q: "What is a go-to-market strategy?",
    a: "GTM defines how you bring a product to market: target segment, positioning, pricing, distribution channels, and launch plan. Key questions: Who is the beachhead customer? What's the value prop in one sentence? How will they hear about it? How will they buy it? Who will support them? A tight GTM for a narrow segment beats a vague GTM for everyone.",
    tags: ["GTM", "strategy"],
  },
  {
    q: "How do you balance user requests vs. your product vision?",
    a: "Users describe symptoms, not solutions. 'Make it faster' might mean the UX flow has too many steps, not that you need a CDN. I listen for the underlying job-to-be-done, not the literal request. I track patterns across many users — one loud user is anecdote; ten users with the same pain is signal. Vision guides the destination; user feedback guides the route.",
    tags: ["vision", "user feedback"],
  },
  {
    q: "How do you approach pricing a new product?",
    a: "Start with value-based pricing: what is the outcome worth to the user? Then sanity-check against competitive alternatives and cost-to-serve. Test price sensitivity with Van Westendorp or willingness-to-pay surveys. Launch at the high end of your range — it's easier to discount than to raise prices. Consider the pricing model (usage, seat, flat) as carefully as the price itself.",
    tags: ["pricing", "strategy"],
  },
  {
    q: "What is churn and how do you reduce it?",
    a: "Churn is the rate at which customers stop using your product. Reduce it by: identifying at-risk users early (usage decline signals), triggering proactive outreach, improving onboarding to hit the 'aha moment' faster, building switching costs (integrations, data, habits), and listening to exit interviews. Retention is the most efficient growth lever — it's cheaper to keep a user than acquire a new one.",
    tags: ["retention", "growth"],
  },
  {
    q: "How do you communicate product decisions to non-technical stakeholders?",
    a: "Lead with the outcome, not the mechanism. 'We're prioritizing this because it will reduce checkout abandonment by an estimated 15%' lands better than 'we're refactoring the payment flow.' I use before/after user journey maps, prototype demos, and one-page decision memos. I over-communicate rationale — silent decisions breed distrust.",
    tags: ["communication", "stakeholders"],
  },
  {
    q: "What is net promoter score (NPS)?",
    a: "NPS measures customer loyalty: 'How likely are you to recommend us to a friend?' (0-10). Promoters (9-10) minus Detractors (0-6) = NPS. Ranges from -100 to +100. Useful as a trend metric, not an absolute one. Always pair NPS with qualitative follow-up ('why?') to make it actionable. Don't optimize NPS directly — optimize the underlying experience it measures.",
    tags: ["metrics", "customer satisfaction"],
  },
  {
    q: "How do you think about accessibility in product design?",
    a: "Accessibility is a baseline, not a feature. WCAG 2.1 AA is the standard: sufficient color contrast, keyboard navigability, screen reader compatibility, alt text, captions. I advocate for accessibility in design reviews before code is written — retrofitting is expensive. Accessible products also tend to be better for everyone (captions help in noisy environments, keyboard shortcuts help power users).",
    tags: ["accessibility", "design"],
  },
];

// ---------------------------------------------------------------------------
// Sections config
// ---------------------------------------------------------------------------
const SECTIONS: Section[] = [
  {
    id: "generic",
    label: "Behavioral",
    icon: User,
    color: "text-violet-600",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    border: "border-violet-200 dark:border-violet-800",
    data: GENERIC_QA,
  },
  {
    id: "fullstack",
    label: "Full Stack",
    icon: Code2,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-800",
    data: FULLSTACK_QA,
  },
  {
    id: "ai",
    label: "AI / LLMs",
    icon: Brain,
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-800",
    data: AI_QA,
  },
  {
    id: "data",
    label: "Data",
    icon: Database,
    color: "text-amber-600",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-200 dark:border-amber-800",
    data: DATA_QA,
  },
  {
    id: "pm",
    label: "Product",
    icon: Target,
    color: "text-rose-600",
    bg: "bg-rose-50 dark:bg-rose-900/20",
    border: "border-rose-200 dark:border-rose-800",
    data: PM_QA,
  },
];

// ---------------------------------------------------------------------------
// QACard component
// ---------------------------------------------------------------------------
function QACard({ qa, index, section }: { qa: QA; index: number; section: Section }) {
  const [open, setOpen] = useState(false);
  const Icon = section.icon;

  return (
    <div
      className={`rounded-xl border ${section.border} bg-white dark:bg-gray-900 shadow-sm overflow-hidden transition-shadow hover:shadow-md`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left px-5 py-4 flex items-start gap-3"
      >
        <div className={`mt-0.5 p-1.5 rounded-lg ${section.bg} shrink-0`}>
          <Icon size={14} className={section.color} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
              #{index + 1}
            </span>
            {qa.tags?.slice(0, 2).map((t) => (
              <span
                key={t}
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${section.bg} ${section.color}`}
              >
                {t}
              </span>
            ))}
          </div>
          <p className="font-semibold text-gray-900 dark:text-white text-sm leading-snug">{qa.q}</p>
        </div>
        <div className="shrink-0 mt-1 text-gray-400">
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-gray-100 dark:border-gray-800">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {qa.a}
          </p>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------
export default function InterviewQuestionsClient() {
  const [activeSection, setActiveSection] = useState("generic");
  const [search, setSearch] = useState("");

  const section = SECTIONS.find((s) => s.id === activeSection) ?? SECTIONS[0];
  const filtered = section.data.filter(
    (qa) =>
      search.trim() === "" ||
      qa.q.toLowerCase().includes(search.toLowerCase()) ||
      qa.a.toLowerCase().includes(search.toLowerCase()) ||
      qa.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  const totalQs = SECTIONS.reduce((acc, s) => acc + s.data.length, 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="mx-auto max-w-4xl p-6 pt-24">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 mb-4 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Admin
          </Link>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 shadow-lg">
              <MessageSquare size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Interview Questions
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {totalQs} questions across {SECTIONS.length} categories — click any question to
                reveal the answer
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-6 flex flex-wrap gap-3">
            {SECTIONS.map((s) => {
              const SIcon = s.icon;
              return (
                <div
                  key={s.id}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium ${s.bg} ${s.border} ${s.color}`}
                >
                  <SIcon size={12} />
                  {s.label}
                  <span className="opacity-70">{s.data.length}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tab nav */}
        <div className="flex flex-wrap gap-2 mb-4">
          {SECTIONS.map((s) => {
            const SIcon = s.icon;
            const active = s.id === activeSection;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setActiveSection(s.id);
                  setSearch("");
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                  active
                    ? `${s.bg} ${s.color} ${s.border} shadow-sm`
                    : "bg-white dark:bg-gray-900 text-gray-500 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
              >
                <SIcon size={14} />
                {s.label}
                <span
                  className={`text-xs rounded-full px-1.5 ${active ? "opacity-70" : "text-gray-400"}`}
                >
                  {s.data.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="mb-5">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search ${section.label} questions…`}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {search && (
            <p className="text-xs text-gray-400 mt-1.5 ml-1">
              {filtered.length} of {section.data.length} questions match
            </p>
          )}
        </div>

        {/* Cards */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-gray-400 text-sm">
              No questions match &ldquo;{search}&rdquo;
            </div>
          ) : (
            filtered.map((qa, i) => <QACard key={i} qa={qa} index={i} section={section} />)
          )}
        </div>

        {/* Compendium callout */}
        <div className="mt-10 rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-md shrink-0">
            <BookOpen size={22} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 dark:text-white">Expert Technical Compendium</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              12 deep-dive topics across Full Stack, AI&nbsp;/&nbsp;ML, and Data Engineering —
              definitions, code examples, advanced insights, pitfalls, and interview tips.
            </p>
          </div>
          <Link
            href="/admin/compendium"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors shrink-0 shadow-sm"
          >
            Open Compendium
            <ExternalLink size={13} />
          </Link>
        </div>

        {/* Footer hint */}
        <div className="mt-10 text-center text-xs text-gray-400 dark:text-gray-600">
          <Sparkles size={12} className="inline mr-1" />
          {section.data.length} {section.label} questions · {totalQs} total
        </div>
      </div>
    </main>
  );
}
