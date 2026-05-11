"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Code2,
  Database,
  BookOpen,
  Lightbulb,
  AlertTriangle,
  Target,
  FileCode,
  Sparkles,
  BarChart3,
  Server,
  Layers,
  GitBranch,
  Cpu,
  Network,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type TopicData = {
  id: string;
  title: string;
  icon: React.ElementType;
  sections: {
    definition: string;
    examples: string;
    advanced: string;
    pitfalls: string;
    tips: string;
  };
};

type Category = {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  border: string;
  topics: TopicData[];
};

// ---------------------------------------------------------------------------
// Content renderer
// ---------------------------------------------------------------------------
function renderContent(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let bulletBuffer: string[] = [];
  let codeBuffer: string[] = [];
  let inCode = false;
  let key = 0;

  const flushBullets = () => {
    if (bulletBuffer.length === 0) return;
    elements.push(
      <ul key={key++} className="my-3 space-y-2">
        {bulletBuffer.map((b, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            <span className="text-gray-400 mt-0.5 shrink-0">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    );
    bulletBuffer = [];
  };

  const flushCode = () => {
    if (codeBuffer.length === 0) return;
    elements.push(
      <pre
        key={key++}
        className="bg-gray-900 text-gray-100 rounded-lg p-4 text-xs overflow-x-auto my-3 font-mono leading-relaxed"
      >
        <code>{codeBuffer.join("\n")}</code>
      </pre>
    );
    codeBuffer = [];
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCode) {
        inCode = false;
        flushCode();
      } else {
        flushBullets();
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      codeBuffer.push(line);
      continue;
    }
    if (line.startsWith("• ") || line.startsWith("- ")) {
      flushCode();
      bulletBuffer.push(line.slice(2));
      continue;
    }
    flushBullets();
    flushCode();
    if (line.trim() === "") continue;
    elements.push(
      <p key={key++} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
        {line}
      </p>
    );
  }
  flushBullets();
  flushCode();
  return elements;
}

// ---------------------------------------------------------------------------
// Q&A Data
// ---------------------------------------------------------------------------
const COMPENDIUM: Category[] = [
  // =========================================================================
  // FULL STACK
  // =========================================================================
  {
    id: "fullstack",
    label: "Full Stack",
    icon: Code2,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-800",
    topics: [
      {
        id: "frontend",
        title: "Frontend Development",
        icon: Layers,
        sections: {
          definition: `React is a declarative, component-based library for building UIs. Its core primitive is the virtual DOM — a lightweight in-memory representation of the real DOM tree. When state changes, React re-renders the virtual tree, diffs it against the previous version (reconciliation), and applies only the minimal set of real DOM mutations required. This diffing uses a heuristic O(n) algorithm assuming elements of different types produce different trees, and that list items are stable across renders unless a key changes.

Hooks (React 16.8+) let function components use state, side effects, context, and refs. Core hooks: useState (local state), useEffect (side effects + cleanup), useContext (consume context without prop drilling), useRef (mutable container that doesn't trigger re-render), useMemo (memoized computed value), useCallback (memoized function reference).

State management exists on a spectrum: local state (useState/useReducer for component-level), shared state (Zustand, Jotai for client-global state), and server state (React Query/SWR for fetching, caching, background refetching). Choosing the wrong layer causes either prop drilling (state too low) or unnecessary global coupling (state too high).`,
          examples: `Reducer pattern for complex state (preferred over nested useState):
\`\`\`tsx
type Action = { type: 'set_loading' } | { type: 'set_data'; payload: User[] } | { type: 'set_error'; payload: string };
type State = { loading: boolean; data: User[]; error: string | null };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'set_loading': return { ...state, loading: true, error: null };
    case 'set_data':    return { loading: false, data: action.payload, error: null };
    case 'set_error':   return { loading: false, data: [], error: action.payload };
  }
}
const [state, dispatch] = useReducer(reducer, { loading: false, data: [], error: null });
\`\`\`

useEffect with cleanup (AbortController prevents state updates on unmounted components):
\`\`\`tsx
useEffect(() => {
  const controller = new AbortController();
  fetch('/api/users', { signal: controller.signal })
    .then(r => r.json()).then(setData)
    .catch(err => { if (err.name !== 'AbortError') setError(err.message); });
  return () => controller.abort();
}, []);
\`\`\`

Stabilize callbacks to avoid re-rendering memoized children:
\`\`\`tsx
const List = React.memo(({ onSelect }: { onSelect: (id: string) => void }) => <div>...</div>);
// Parent:
const handleSelect = useCallback((id: string) => setSelected(id), []); // stable reference
\`\`\``,
          advanced: `React 18 Concurrent Features: React can now interrupt, pause, and resume renders, enabling a priority-based scheduler. startTransition marks a state update as non-urgent — React renders it in the background without blocking user input. useDeferredValue defers updating a derived value until the browser is idle. Suspense provides declarative loading states — wrap any async subtree with a fallback. Streaming SSR lets the server send HTML chunks as they're ready, unblocking TTFB.

Fiber is React's reconciliation engine. Each fiber is a JS object representing a component instance: it stores the component type, props, state, hooks, effects, and pointers to parent/child/sibling fibers. Fiber enables incremental rendering by breaking the render into units of work that can be paused between frames.

Bundle optimization: route-level code splitting with dynamic imports (next/dynamic or React.lazy) reduces initial JS payload. Analyze with @next/bundle-analyzer. Image optimization with next/image (automatic WebP, lazy loading, size hints). Font optimization with next/font (no FOUT, self-hosted, zero layout shift).`,
          pitfalls: `• Stale closures in useEffect: forgetting a dependency means the effect closes over an outdated value. Always add the ESLint react-hooks/exhaustive-deps plugin and treat its warnings as errors.
• Infinite loops: calling setState inside useEffect without a proper dependency array (or with an object that creates a new reference each render) causes an effect → state change → re-render → effect loop.
• No cleanup in useEffect: subscriptions, timers, and async operations that set state after component unmount cause "Can't perform state update on unmounted component" warnings and memory leaks.
• Context over-sharing: every consumer of a Context re-renders when any part of the context value changes. Split contexts by update frequency, or use Zustand selectors.
• Object/array in dependency arrays: \`useEffect(() => {}, [options])\` — if options is a new object each render, the effect runs every render. Destructure primitives into the deps array.
• Premature memoization: useMemo/useCallback add overhead (comparison on every render). Only apply after profiling with the React DevTools Profiler identifies a real bottleneck.
• key on the wrong element: using array index as key breaks reconciliation when items are reordered. Always use stable, unique IDs as keys.`,
          tips: `• Virtual DOM question: "React maintains a virtual tree and diffs it against the previous one on state change. The diff is O(n) using two heuristics: different component types fully remount, and list reconciliation uses the key prop to track identity across re-renders."
• useMemo/useCallback question: "I don't add them preemptively. I profile first with React DevTools. Then I apply memoization only where the profiler shows unnecessary re-renders causing measurable jank."
• State management: "I start with useState/useReducer for local state. When multiple unrelated components need the same data I reach for Zustand — it's lightweight and avoids Context re-render issues. For server data I use React Query for caching, deduplication, and background refetching."
• Architecture: "I split components into 'smart' containers (handle data fetching, business logic) and 'dumb' presentational components (pure render). This makes the presentation layer trivially testable."
• React 18: mention startTransition for deferred non-urgent updates, Suspense for streaming data, and how concurrent rendering enables better perceived performance without manual optimization.`,
        },
      },
      {
        id: "backend",
        title: "Backend & Node.js",
        icon: Server,
        sections: {
          definition: `Node.js is a JavaScript runtime built on V8 with an event-driven, non-blocking I/O architecture. The single-threaded event loop processes JavaScript execution while I/O operations (network, disk, DNS) are offloaded to libuv's thread pool or OS async APIs. When I/O completes, callbacks are enqueued and processed by the event loop. This model handles thousands of concurrent connections without OS thread overhead — each connection is a callback, not a blocked thread.

Event loop phases (in order): timers (setTimeout/setInterval callbacks), pending I/O callbacks, idle/prepare, poll (wait for new I/O events, execute callbacks), check (setImmediate callbacks), close callbacks. Microtasks (Promise .then, queueMicrotask) run after each phase completes, before moving to the next. process.nextTick runs before microtasks — use sparingly as it starves the event loop.

API design principles: resources are nouns (/users, /orders/123), HTTP verbs express the action (GET = read, POST = create, PUT = full replace, PATCH = partial update, DELETE = remove). Status codes communicate outcome (201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity, 429 Too Many Requests, 500 Internal Server Error). Version in the URL: /api/v1/. Pagination: prefer cursor-based over offset for large datasets (offset degrades at scale as it requires scanning and skipping rows).`,
          examples: `Express middleware chain with typed error handling:
\`\`\`ts
app.use(express.json({ limit: '10kb' })); // prevent large payload DoS
app.use(helmet());                         // secure headers
app.use(rateLimiter);                      // express-rate-limit with Redis store

app.post('/users', validate(createUserSchema), async (req, res, next) => {
  try {
    const user = await userService.create(req.validated);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

// 4-param signature is required for Express to treat it as error middleware
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  logger.error({ err, path: req.path });
  if (err instanceof ValidationError) return res.status(422).json({ error: err.message });
  if (err instanceof NotFoundError)   return res.status(404).json({ error: 'Not found' });
  res.status(500).json({ error: 'Internal server error' }); // never leak stack traces
});
\`\`\`

Graceful shutdown (drain in-flight requests before exit):
\`\`\`ts
const server = app.listen(PORT);
process.on('SIGTERM', () => {
  server.close(async () => {
    await db.pool.end();
    logger.info('Server shut down gracefully');
    process.exit(0);
  });
});
\`\`\``,
          advanced: `Worker threads (node:worker_threads) enable true parallelism for CPU-bound work — each worker has its own V8 isolate and event loop, communicating via message passing or SharedArrayBuffer. Use for: image/video processing, large JSON parsing, cryptographic operations. Don't use for I/O-bound work — async handles that better without the thread overhead.

Clustering (node:cluster or PM2) forks one process per CPU core, each running its own event loop. The master distributes incoming connections. For stateful apps, sessions must be shared (Redis) and sticky sessions may be needed.

Streaming prevents memory exhaustion for large payloads. Instead of buffering a 1GB CSV in memory, pipe it: readableStream.pipe(transformStream).pipe(res). Node streams use backpressure — writable.write() returns false when the internal buffer is full; the readable should pause and resume on 'drain'. Async iterators (for await...of stream) make stream consumption ergonomic in modern Node.

tRPC provides end-to-end type safety between a TypeScript backend and TypeScript frontend — no code generation, no OpenAPI spec. The router defines procedures (queries, mutations, subscriptions) with Zod input validators. The client infers types automatically. Best for full-stack TypeScript monorepos.`,
          pitfalls: `• Blocking the event loop: CPU-intensive synchronous operations (large JSON.parse, bcrypt with high work factor on main thread, complex regex, heavy crypto) block all concurrent requests. Move to worker threads or a job queue.
• Unhandled Promise rejections: async route handlers that throw without try/catch silently drop errors in older Node versions. Always wrap async routes with try/catch and call next(err), or use an asyncHandler wrapper.
• No input validation: never trust req.body. Validate shape and type with Zod before processing — prevents injection attacks and saves debugging time.
• Connection pool exhaustion: creating a new DB pool per request quickly exhausts database connections. Create the pool once at startup as a module-level singleton.
• Leaking error details: stack traces in API responses expose file paths, package names, and code structure to attackers. Log internally (Sentry/pino), respond with generic messages.
• Memory leaks: event emitter listeners added in request handlers without removal, closures retaining large objects, caches without eviction. Profile with node --inspect + Chrome DevTools heap snapshots.`,
          tips: `• Event loop question: draw the phases. Emphasize: "async I/O in Node doesn't mean multi-threaded — it means the CPU is never idle waiting for a disk read or network response. The event loop processes other callbacks in the meantime."
• High throughput: "I use clustering (one process per CPU core), Redis for shared caching and session state, database connection pooling (PgBouncer), rate limiting, and horizontal scaling behind a load balancer."
• API design: mention idempotency keys for POST operations (safe to retry), cursor-based pagination for large result sets, and consistent error envelopes ({error, code, details}).
• Security: validate all inputs (Zod), use parameterized queries (never string concat for SQL), set security headers (helmet), rate limit all public endpoints, never log secrets.`,
        },
      },
      {
        id: "databases",
        title: "Databases",
        icon: Database,
        sections: {
          definition: `ACID properties define relational transaction guarantees: Atomicity (all operations succeed or none are applied), Consistency (data always transitions between valid states per schema constraints), Isolation (concurrent transactions can't see each other's intermediate state), Durability (committed transactions survive crashes via WAL). PostgreSQL provides full ACID. MongoDB provides ACID within a single document by default; multi-document ACID transactions were added in v4.0 but carry performance overhead.

CAP theorem: in a distributed system you can guarantee only 2 of: Consistency (every read sees the latest write), Availability (every request gets a non-error response), Partition Tolerance (system functions despite network partitions). Since partitions are inevitable in distributed systems, the real choice is CP (consistent, may reject requests during partitions: HBase, Zookeeper) vs AP (always responds, eventually consistent: DynamoDB, Cassandra, CouchDB).

B-tree indexes allow O(log n) lookups by maintaining a balanced, sorted structure on disk. Without an index, queries require O(n) full table scans. The trade-off: faster reads, slower writes (index updated on every insert/update/delete), extra storage. Composite index column order matters — an index on (status, created_at) supports queries filtering on status, but not on created_at alone (leading column rule).`,
          examples: `Window functions for analytics (avoid multiple self-joins):
\`\`\`sql
SELECT
  customer_id,
  order_date,
  amount,
  SUM(amount)  OVER (PARTITION BY customer_id ORDER BY order_date) AS running_total,
  LAG(amount)  OVER (PARTITION BY customer_id ORDER BY order_date) AS prev_order,
  RANK()       OVER (PARTITION BY customer_id ORDER BY amount DESC) AS rank_by_size
FROM orders;
\`\`\`

Upsert (insert or update atomically):
\`\`\`sql
INSERT INTO users (id, email, updated_at) VALUES ($1, $2, NOW())
ON CONFLICT (id) DO UPDATE
  SET email = EXCLUDED.email, updated_at = EXCLUDED.updated_at;
\`\`\`

Diagnose slow queries:
\`\`\`sql
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT * FROM orders WHERE customer_id = 123 ORDER BY created_at DESC LIMIT 10;
-- Look for: "Seq Scan" on large tables, high cost, high "Buffers: shared read"
-- Fix:       CREATE INDEX ON orders(customer_id, created_at DESC);
\`\`\``,
          advanced: `MVCC (Multi-Version Concurrency Control): PostgreSQL never overwrites rows in-place. Each UPDATE creates a new row version with updated xmin/xmax transaction IDs. Readers see a snapshot of the database at their transaction start time — no read locks needed. This enables high read concurrency but requires VACUUM to reclaim dead row versions (autovacuum handles this automatically). Table bloat occurs if autovacuum can't keep up with write load.

Query planning: Postgres chooses between sequential scan, index scan, index-only scan, bitmap heap scan, and join strategies (hash join, merge join, nested loop) based on table statistics (pg_statistic). Run ANALYZE after large data loads to update statistics. pg_stat_statements tracks query execution time — use it to find the slowest queries in production. Covering indexes (INCLUDE clause) allow index-only scans by storing non-indexed columns in the index leaf pages.

Connection pooling is critical: Postgres allocates ~5-10MB per connection and has a max_connections limit (typically 100-200). Serverless functions (Vercel, Lambda) can exhaust this instantly. Use PgBouncer in transaction-mode pooling to multiplex thousands of app connections onto a small pool of real DB connections.`,
          pitfalls: `• N+1 query problem: fetching N parent records then issuing N separate queries for children. Fix: JOIN in a single query, or use ORM eager loading (Prisma include, typeorm relations with eager: true).
• Missing indexes on foreign keys: every JOIN on an unindexed FK column is a full table scan. Always index FKs.
• SELECT * in application code: fetches unnecessary columns, prevents index-only scans, and breaks if the schema changes. Always select specific columns.
• No transactions for multi-step mutations: if step 2 fails after step 1 committed, you have inconsistent data. Wrap related operations in BEGIN/COMMIT.
• NULL handling errors: NULL != NULL in SQL. Use IS NULL / IS NOT NULL. NULL propagates through arithmetic and comparisons. Aggregate functions (SUM, COUNT) ignore NULLs — this can produce misleading results.
• Over-indexing write-heavy tables: each index slows INSERT/UPDATE/DELETE proportionally. Only add indexes that reduce query time meaningfully.
• Implicit type coercion: WHERE user_id = '123' when user_id is an integer may not use the index due to type mismatch. Always match the type of the column.`,
          tips: `• SQL vs NoSQL: "I choose based on access patterns. Postgres for relational data with complex queries and strong consistency. MongoDB when the document shape varies significantly per record or write throughput is the primary constraint. Redis for caching, sessions, real-time leaderboards, and pub/sub."
• Index question: always explain the trade-off (read speed vs write overhead and storage cost). Then explain composite index column order (most selective column first, unless range scan requires a different order).
• Performance: "First I check EXPLAIN ANALYZE for sequential scans on large tables. Then I add targeted indexes. I also check for N+1 in ORM queries using query logging, and verify VACUUM is keeping up with dead tuples."
• Transactions: explain READ COMMITTED (default — sees committed data at statement start) vs SERIALIZABLE (full isolation, prevents all read anomalies, slower). Describe the phenomena each isolation level prevents: dirty reads, non-repeatable reads, phantom reads.`,
        },
      },
      {
        id: "devops",
        title: "DevOps & Testing",
        icon: GitBranch,
        sections: {
          definition: `The testing pyramid defines three layers by quantity and speed: unit tests (test individual functions in isolation, fast, no I/O, most numerous), integration tests (test components together — API endpoint + real database, slower, fewer), end-to-end tests (test full user journeys in a real browser, slowest, fewest). The shape reflects the ideal ratio: many fast units, fewer slower integrations, minimal expensive E2E. The anti-pattern is the "ice cream cone" — heavy E2E tests that are slow, brittle, and expensive to maintain.

CI/CD: Continuous Integration means every push to any branch runs automated checks (type-check, lint, test, build). The goal is catching regressions within minutes, not days. Continuous Delivery means every passing build is deployable (but may require a manual deploy gate). Continuous Deployment means passing builds deploy automatically. The key principle: smaller, more frequent releases have a smaller blast radius and are easier to roll back than large infrequent ones.

Observability: the three pillars are logs (structured JSON events, searchable in Datadog/Loki), metrics (time-series counters and gauges, e.g., request rate, error rate, latency — Prometheus/Datadog), and traces (distributed request tracing across services — OpenTelemetry). Metrics alert you that something is wrong; traces tell you where in the call graph; logs tell you what happened at that moment.`,
          examples: `GitHub Actions CI pipeline with caching:
\`\`\`yaml
name: CI
on: [push, pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'pnpm' }
      - run: pnpm install --frozen-lockfile
      - run: pnpm type-check
      - run: pnpm lint
      - run: pnpm test --coverage
      - run: pnpm build
\`\`\`

Docker multi-stage build (minimal production image):
\`\`\`dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=deps /app/node_modules ./node_modules
USER node          # never run as root
EXPOSE 3000
CMD ["node", "dist/index.js"]
\`\`\``,
          advanced: `Deployment strategies reduce blast radius: Blue-green maintains two identical production environments. Traffic switches instantly between them via load balancer; rollback is a DNS/LB switch. Canary gradually shifts a traffic percentage (1% → 10% → 50% → 100%) to the new version while monitoring error rates and latency. Feature flags decouple deployment from release — code ships behind a flag that can be toggled per user/segment without redeployment.

SLOs, SLIs, SLAs: SLI (indicator) is the measured metric (e.g., request latency p99). SLO (objective) is the target ("99.9% of requests respond in < 300ms over 30 days"). SLA (agreement) is the contractual commitment with penalty. Error budget = 1 - SLO. If the error budget is burned, freeze risky deployments. Alert on burn rate, not absolute error count — a spike that exhausts your monthly budget in one hour needs paging; a slow drip does not.

Infrastructure as Code: Terraform defines cloud resources declaratively (provider + resource blocks). Plan shows diff before apply. State file tracks actual resource state — store in S3 + DynamoDB for locking. Pulumi defines infra in TypeScript/Python. AWS CDK compiles TypeScript to CloudFormation. IaC gives you reproducible environments, peer-reviewed infrastructure changes, and disaster recovery from code alone.`,
          pitfalls: `• No automated tests: every deploy is a gamble. Even a single integration test per critical path catches regressions before users do.
• Flaky tests: tests that randomly pass or fail destroy team confidence in CI. Teams start ignoring failures. Fix the root cause or delete the test — never skip it.
• Large Docker images: using node:latest instead of node:alpine, not using .dockerignore, copying dev dependencies into the production image. Large images mean slow deploys, more CVEs, and bigger attack surface.
• Secrets in code or Docker layers: use environment variables injected at runtime. Use a secrets manager (Doppler, AWS Secrets Manager, Vault). Never commit .env files with real values.
• No health check endpoint: load balancers need a /healthz endpoint to verify the instance is ready. Without it, traffic goes to crashed pods.
• No rollback plan: define the rollback procedure before you deploy. Blue-green makes it trivial. Document it — you won't have time to think during an incident.
• Only testing in development environment: production has different data distributions, network topology, and third-party behavior. Load test against a staging environment that mirrors production topology.`,
          tips: `• Testing philosophy: "I write tests that give me confidence the code works correctly, not tests that chase coverage metrics. Unit tests for pure business logic, integration tests for I/O boundaries (API routes, database queries), E2E for the 3-5 most critical user journeys."
• CI/CD pipeline: walk through your stages — type-check → lint → unit tests → integration tests → build → deploy. Mention branch protection rules requiring all checks to pass before merge.
• Docker: explain multi-stage builds (separate build-time deps from runtime image), why you use Alpine (smaller attack surface), and layer caching (copy package.json before source so dependency installation is cached until package.json changes).
• Monitoring: "I instrument with OpenTelemetry for distributed traces, export to Datadog. I define SLOs for each service before launch and alert on error budget burn rate. I never alert on metrics that don't require immediate human action."`,
        },
      },
    ],
  },
  // =========================================================================
  // AI / ML
  // =========================================================================
  {
    id: "ai",
    label: "AI / ML",
    icon: Brain,
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-800",
    topics: [
      {
        id: "llms",
        title: "Large Language Models",
        icon: Cpu,
        sections: {
          definition: `Transformer architecture (Vaswani et al., 2017) is the foundation of modern LLMs. The key mechanism is self-attention: for each token in the input sequence, the model computes a weighted sum of all other token representations — the weights (attention scores) reflect relevance between token pairs. Multi-head attention runs this in parallel across H heads, each learning different relationship types (syntax, semantics, coreference). Feed-forward layers apply non-linear transformations per-token. Stacked layers build increasingly abstract representations.

Tokenization converts text to integer IDs using a subword vocabulary (BPE or WordPiece). "ChatGPT" might tokenize as ["Chat", "G", "PT"]. The vocabulary size is typically 50k-100k tokens. Token count matters for pricing, context window limits, and generation speed. One token ≈ 0.75 English words on average.

Training: LLMs are pretrained on massive text corpora via next-token prediction (causal language modeling). Pre-training installs broad world knowledge. Fine-tuning adapts the model to a specific task or style. RLHF (Reinforcement Learning from Human Feedback) aligns the model with human preferences — human raters compare outputs, a reward model is trained, and PPO optimizes the LLM against the reward model. Constitutional AI (Anthropic) uses AI-generated critiques to reduce the need for human feedback at scale.`,
          examples: `Prompt engineering patterns:
\`\`\`
// Zero-shot
Classify the sentiment of this review as positive, negative, or neutral.
Review: "The product arrived late but works well."

// Few-shot (inject examples to calibrate format and style)
Classify sentiment:
Review: "Amazing quality, fast shipping!" → positive
Review: "Broken on arrival, terrible support." → negative
Review: "The product arrived late but works well." → ?

// Chain-of-thought (improves reasoning on complex tasks)
Classify sentiment. First explain your reasoning, then give the label.

// Output format constraint (JSON mode or explicit structure)
Return ONLY valid JSON: { "sentiment": "positive" | "negative" | "neutral", "confidence": 0-1 }
\`\`\`

Function calling / tool use:
\`\`\`ts
const response = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [{ role: 'user', content: 'What is the weather in Paris?' }],
  tools: [{
    type: 'function',
    function: {
      name: 'get_weather',
      description: 'Get current weather for a city',
      parameters: {
        type: 'object',
        properties: { city: { type: 'string' } },
        required: ['city'],
      },
    },
  }],
});
// LLM returns tool_calls array instead of content when it decides to call a tool
\`\`\``,
          advanced: `Context window strategies: modern LLMs support large contexts (GPT-4o: 128k, Claude 3: 200k, Gemini 1.5: 1M tokens) but long contexts have known failure modes. "Lost in the middle" — models attend more strongly to content at the start and end of the context, underweighting middle content. For multi-document QA, RAG with a focused retrieved context outperforms stuffing all documents into the context window.

Inference optimization: quantization reduces model weights from 32-bit to 8-bit or 4-bit floats, shrinking memory footprint with minimal accuracy loss. Speculative decoding uses a small "draft" model to propose multiple tokens that the large "verifier" model accepts or rejects in parallel — speeds up generation 2-3x. KV cache reuses attention key-value computations for the prompt portion across requests (critical for API efficiency at scale).

Temperature and sampling: temperature scales the logit distribution before softmax. Temperature 0 → deterministic (argmax). Temperature 1 → model's learned distribution. Temperature > 1 → more random. Top-p (nucleus sampling) samples from the smallest set of tokens whose cumulative probability exceeds p (e.g., 0.95). Use temperature 0 for deterministic factual tasks; use higher temperature for creative generation.`,
          pitfalls: `• Prompt injection: user input that overrides the system prompt ("Ignore previous instructions and..."). Mitigate by separating system instructions from user content structurally, not just positionally. Validate outputs before acting on them.
• Hardcoding prompts: prompts need iteration. Store them as versioned assets (database or files), A/B test variants, and track which version produced which output.
• Ignoring latency and cost: LLM API calls add 0.5-3s of latency and cost scales with tokens. Cache deterministic responses, use smaller models for simple subtasks, set max_tokens to prevent runaway completions.
• Over-trusting structured output: even in JSON mode, LLMs can produce invalid JSON or wrong field types. Always validate with Zod before using the parsed output downstream.
• No system prompt: without a system prompt defining persona, tone, and constraints, the model's behavior is unpredictable across model updates.
• Treating LLM judgment as ground truth: LLMs hallucinate. For factual outputs, ground the model with retrieved documents (RAG) and ask it to cite sources from the provided context only.`,
          tips: `• Prompting vs RAG vs fine-tuning: "Prompting is my first choice — fast to iterate, no training cost. I add RAG when the model needs access to proprietary or recent knowledge. I fine-tune only when prompting + RAG can't achieve the quality required, I have 1000+ high-quality labeled examples, and I can afford the compute cost and retraining loop."
• Evaluation: "I never ship an LLM feature without an eval set. I use LLM-as-judge (another model scores coherence, accuracy, and groundedness) for scalable quality checks, plus a human-reviewed golden dataset for regression testing."
• Safety: mention output filtering, rate limiting per user, content moderation layers (Perspective API, Llama Guard), and audit logging of prompts and completions in production.
• Explain attention: "Self-attention lets every token attend to every other token in the sequence simultaneously. This is what makes transformers much more powerful than RNNs for capturing long-range dependencies — an RNN processes tokens sequentially and struggles with context hundreds of tokens away."`,
        },
      },
      {
        id: "rag",
        title: "RAG Workflows",
        icon: Network,
        sections: {
          definition: `Retrieval-Augmented Generation (RAG) grounds LLM responses in external knowledge retrieved at query time. Instead of relying on parametric knowledge baked into the model during training (which can be outdated or factually incorrect), RAG provides the model with relevant documents as context, then asks it to answer based on those documents. This dramatically reduces hallucination on knowledge-intensive tasks and allows the model to cite sources.

RAG vs fine-tuning: fine-tuning bakes knowledge into model weights (expensive, can't easily update, may "forget" old knowledge — catastrophic forgetting). RAG keeps knowledge in an external, updatable store. RAG wins for dynamic knowledge (product catalogs, documentation, news). Fine-tuning wins for consistent output format or domain-specific style that prompting can't achieve. Hybrid: fine-tune for style/behavior + RAG for factual knowledge retrieval.

The RAG pipeline has four stages: (1) Ingestion — chunk documents, generate embeddings, store in a vector database. (2) Retrieval — embed the user query, search the vector DB for the most semantically similar chunks (k-NN). (3) Augmentation — inject the retrieved chunks into the LLM prompt as context. (4) Generation — the LLM generates an answer grounded in the provided context.`,
          examples: `End-to-end RAG implementation:
\`\`\`ts
// 1. Ingestion (run offline when documents change)
import { OpenAI } from 'openai';
import { PineconeClient } from '@pinecone-database/pinecone';

const openai = new OpenAI();
const pinecone = new PineconeClient();

async function ingestDocument(text: string, id: string, metadata: object) {
  const chunks = chunkText(text, { size: 512, overlap: 64 });
  for (const [i, chunk] of chunks.entries()) {
    const { data } = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: chunk,
    });
    await pinecone.index('docs').upsert([{
      id: \`\${id}_\${i}\`,
      values: data[0].embedding,
      metadata: { ...metadata, text: chunk },
    }]);
  }
}

// 2. Query pipeline (at request time)
async function ragQuery(question: string): Promise<string> {
  // Embed the question
  const { data } = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: question,
  });

  // Retrieve top-5 semantically similar chunks
  const results = await pinecone.index('docs').query({
    vector: data[0].embedding,
    topK: 5,
    includeMetadata: true,
  });

  const context = results.matches
    .map(m => m.metadata?.text)
    .join('\n\n---\n\n');

  // Generate grounded answer
  const { choices } = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'Answer ONLY using the provided context. If the answer is not in the context, say so.' },
      { role: 'user', content: \`Context:\n\${context}\n\nQuestion: \${question}\` },
    ],
  });
  return choices[0].message.content ?? '';
}
\`\`\``,
          advanced: `Chunking strategies significantly impact retrieval quality. Fixed-size chunking (500 tokens, 50-token overlap) is the baseline. Recursive character splitting respects natural boundaries (paragraphs, sentences). Semantic chunking uses embedding similarity to find natural topic boundaries — more accurate but slower. Document-specific chunking: for code, chunk at function boundaries; for PDFs, chunk at section headings.

Hybrid search combines dense (embedding similarity) and sparse (BPM25 keyword) retrieval, then merges results with Reciprocal Rank Fusion (RRF). Dense retrieval handles semantic meaning; sparse retrieval catches exact keyword matches that embeddings might miss. Hybrid consistently outperforms either alone on retrieval benchmarks.

Cross-encoder re-ranking: after retrieving top-k candidates with a bi-encoder (fast approximate search), a cross-encoder (slower, more accurate) re-scores each query-document pair and reorders results. Cross-encoders attend jointly to the query and document, capturing deeper relevance signals. Tools: Cohere Rerank, BGE-Reranker, cross-encoder/ms-marco-MiniLM-L-6-v2. HyDE (Hypothetical Document Embeddings): instead of embedding the question, ask the LLM to generate a hypothetical answer document, embed that, and search with it — the embedding distribution better matches document embeddings.`,
          pitfalls: `• Naive fixed-size chunking without overlap: a sentence spanning a chunk boundary is split, losing semantic coherence. Always use overlap (10-20% of chunk size).
• Using the wrong embedding model: embedding model and retrieval task must align. Don't embed with text-embedding-ada-002 and retrieve with a different model's index. Don't use a general-purpose model for specialized domain text — use a domain-fine-tuned model or a model trained on retrieval tasks (e.g., e5-large, BGE).
• No retrieval evaluation: retrieval quality determines generation quality. Evaluate retrieval separately: precision@k, recall@k, MRR (Mean Reciprocal Rank), NDCG. Tools: RAGAS, TruLens.
• Injecting too many chunks: more context isn't always better — it dilutes relevance and hits the "lost in the middle" phenomenon. Start with 3-5 chunks; tune based on eval.
• Not handling "I don't know" answers: if no retrieved chunk contains the answer, the model should say so — not hallucinate. Enforce this with the system prompt and test it explicitly.
• Stale vector index: if the source documents update but the embeddings don't, retrieval returns outdated content. Implement incremental re-indexing on document change (CDC or webhook triggers).`,
          tips: `• Walk through the full pipeline: "Ingest → chunk with overlap → embed with text-embedding-3-small → store in pgvector/Pinecone. At query time: embed query → similarity search top-k → optional re-ranking → inject into prompt as context → generate with citation constraint."
• Chunking discussion: "Chunk size is a tuning parameter. Large chunks have more context but dilute the relevance signal; small chunks are more precise but may lack context for the answer. I start at 512 tokens with 10% overlap and tune based on retrieval recall metrics."
• Why RAG over fine-tuning: "RAG is cheaper (no training compute), more explainable (I can show which chunk the answer came from), and easier to update (change the document, re-embed, done). Fine-tuning is better for style consistency or domain-specific reasoning patterns."
• Eval question: "I evaluate retrieval with precision@5 and recall@5 on a manually labeled query-document set. I evaluate generation with RAGAS metrics: faithfulness (is the answer grounded in the context?), answer relevancy, and context relevancy."`,
        },
      },
      {
        id: "model-eval",
        title: "Model Evaluation",
        icon: BarChart3,
        sections: {
          definition: `Evaluating AI systems has two phases: offline evaluation (before deployment — on a held-out test set) and online evaluation (after deployment — on real user traffic). Offline eval catches regressions and measures absolute quality before launch. Online eval measures actual user behavior and business impact. Both are necessary — good offline metrics don't guarantee good online metrics, and shipping without offline eval is reckless.

Evaluation dimensions for LLMs: factual accuracy (does the answer match known ground truth?), faithfulness/groundedness (for RAG: does the answer stay within the provided context?), answer relevancy (does the response actually address the question?), coherence (is the response well-structured and readable?), safety (does the response avoid harmful content?), and latency/cost (is it acceptable for the use case?).

LLM-as-judge: use a capable LLM (GPT-4o, Claude Opus) to score another model's outputs on a Likert scale or pairwise comparison. Requires: a detailed scoring rubric, examples (few-shot), and calibration against human judgments. LLM-as-judge is scalable and correlates well with human ratings, but can be biased toward longer responses, its own outputs, or responses that "sound confident" regardless of accuracy.`,
          examples: `RAGAS evaluation for RAG pipelines:
\`\`\`python
from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_recall, context_precision
from datasets import Dataset

# Collect test cases
data = {
    'question':   ['What is the refund policy?'],
    'answer':     ['You can return items within 30 days.'],   # model output
    'contexts':   [['Our policy allows returns within 30 days of purchase.']],  # retrieved chunks
    'ground_truth': ['Items can be returned within 30 days.'],  # reference answer
}
dataset = Dataset.from_dict(data)

result = evaluate(dataset, metrics=[faithfulness, answer_relevancy, context_recall, context_precision])
print(result)  # faithfulness: 0.97, answer_relevancy: 0.89, context_recall: 1.0
\`\`\`

LLM-as-judge in CI:
\`\`\`ts
async function evaluateAnswer(question: string, answer: string, rubric: string): Promise<number> {
  const { choices } = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'You are a precise evaluator. Score the answer 1-5 per the rubric. Return ONLY the integer score.' },
      { role: 'user', content: \`Rubric: \${rubric}\nQuestion: \${question}\nAnswer: \${answer}\` },
    ],
    temperature: 0,
  });
  return parseInt(choices[0].message.content ?? '1');
}
// Run in CI against a golden dataset of 50+ question/answer pairs
// Fail the pipeline if average score drops below threshold
\`\`\``,
          advanced: `Continuous evaluation in production: shadow mode runs the new model in parallel with the old one, logging outputs without serving them to users — evaluate quality offline before enabling traffic. A/B testing routes a percentage of traffic to the new model and measures business metrics (task completion, user satisfaction ratings, session length). Multi-armed bandit algorithms can dynamically route traffic to the better-performing model.

Red-teaming: systematically probe the model for failure modes. Categories: jailbreaks (bypass safety training), prompt injection (override system prompt via user input), data extraction (retrieve training data), hallucination probing (ask factual questions about obscure topics), adversarial inputs (typos, encoding tricks, homoglyphs). Automate red-teaming with adversarial prompt generators. Tools: Garak, PyRIT, custom attack suites.

Eval dataset construction: the quality of your evaluation is bounded by the quality of your eval dataset. Requirements: diverse (covers edge cases, not just happy paths), representative (distribution matches production traffic), labeled accurately (human annotators with a clear rubric), versioned (track which model was evaluated on which dataset), and regularly refreshed (production edge cases are added as they're discovered).`,
          pitfalls: `• Evaluating only on happy paths: eval datasets full of easy, typical examples won't catch failures at the distribution tail. Deliberately include edge cases, ambiguous inputs, and adversarial examples.
• Goodhart's Law in AI: once a metric becomes a target (optimize ROUGE score), it ceases to be a good measure (models learn to game it). Maintain multiple diverse metrics and human oversight.
• Ignoring latency and cost as metrics: a 99% accurate model that costs $1/query or responds in 5 seconds may not be deployable. Eval must include operational metrics alongside quality metrics.
• LLM-as-judge verbosity bias: LLM judges tend to rate longer, more elaborate answers higher, even when a shorter correct answer is better. Use calibration examples in the judge prompt to counteract this.
• Using BLEU/ROUGE as primary metrics for LLM outputs: they measure n-gram overlap, which doesn't capture semantic correctness. A semantically equivalent answer with different wording scores 0. Use embedding similarity (BERTScore) or LLM-as-judge for quality assessment.
• No regression baseline: never report absolute eval scores in isolation — always compare to the previous model version on the same eval set. A score of 0.85 means nothing without context.`,
          tips: `• Evaluation strategy: "I maintain a golden eval dataset that grows continuously — new edge cases get added as they appear in production. I run offline evals in CI before every model update. In production, I log thumbs-up/down ratings and use shadow deployments to compare model versions before enabling traffic."
• Metrics mix: "I track faithfulness and answer relevancy with RAGAS for RAG pipelines, LLM-as-judge for open-ended quality, and task completion rate as the primary business metric. Offline and online metrics together."
• Red-teaming: "Before any model ships, I run a structured red-team covering prompt injection, jailbreaks, and topic-specific failure modes. I document each finding and either fix it or accept the risk explicitly."
• Safety: mention content moderation layers (Llama Guard, Perspective API), output filtering, and structured output validation (Zod) as practical safety measures beyond model-level alignment.`,
        },
      },
      {
        id: "ml-pipelines",
        title: "ML Pipelines",
        icon: Layers,
        sections: {
          definition: `The ML lifecycle spans six stages: (1) Data collection and labeling, (2) Exploratory Data Analysis (EDA), (3) Feature engineering and preprocessing, (4) Model training and hyperparameter tuning, (5) Evaluation and validation, (6) Deployment and monitoring. Each stage has its own tools and failure modes. Most ML projects spend 60-80% of their time in stages 1-3, not in model training.

Feature engineering transforms raw data into inputs the model can learn from effectively. Numerical features: normalization (min-max scaling to [0,1] or standardization to zero mean/unit variance), log transformation for skewed distributions. Categorical features: one-hot encoding (creates sparse binary vectors), ordinal encoding (for ordered categories), embedding encoding (learned dense vectors for high-cardinality features). Temporal features: extract day-of-week, hour, is_weekend, lag features (value 24h ago), rolling statistics.

MLOps is the practice of reliably and efficiently deploying and maintaining ML models in production. Key practices: experiment tracking (log every run's parameters, metrics, artifacts — MLflow, Weights & Biases), model registry (versioned store of trained models with promotion workflows — staging → production), data versioning (DVC, Delta Lake snapshots), and automated retraining pipelines triggered by data drift or scheduled intervals.`,
          examples: `Scikit-learn pipeline prevents data leakage:
\`\`\`python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.model_selection import cross_val_score

numeric_features = ['age', 'income', 'tenure']
categorical_features = ['region', 'plan_type']

preprocessor = ColumnTransformer([
    ('num', StandardScaler(), numeric_features),
    ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features),
])

pipeline = Pipeline([
    ('prep', preprocessor),
    ('model', GradientBoostingClassifier(n_estimators=200, max_depth=4)),
])

# Cross-validation — pipeline applies preprocessing within each fold (no leakage)
scores = cross_val_score(pipeline, X_train, y_train, cv=5, scoring='roc_auc')
print(f'AUC: {scores.mean():.3f} ± {scores.std():.3f}')
\`\`\`

MLflow experiment tracking:
\`\`\`python
import mlflow
with mlflow.start_run():
    mlflow.log_params({'n_estimators': 200, 'max_depth': 4, 'learning_rate': 0.1})
    pipeline.fit(X_train, y_train)
    auc = roc_auc_score(y_val, pipeline.predict_proba(X_val)[:, 1])
    mlflow.log_metric('val_auc', auc)
    mlflow.sklearn.log_model(pipeline, 'model')
\`\`\``,
          advanced: `Training-serving skew is the most common and dangerous ML production failure: the preprocessing applied at training time differs from what's applied at serving time. Fix: encapsulate all preprocessing in the same Pipeline object used for both training and inference. Store the fitted pipeline (not just the model weights). Feature stores (Feast, Tecton) provide consistent feature computation across training and serving.

Data drift: the statistical distribution of input features changes after deployment (e.g., user behavior shifts, new product categories). Monitor feature distributions (PSI — Population Stability Index, KL divergence) and prediction distributions. Trigger retraining when drift exceeds a threshold. Concept drift: the relationship between features and the target changes (e.g., a fraud pattern is discovered and fraudsters adapt). Harder to detect — requires monitoring prediction accuracy on labeled samples.

Shadow mode deployment: the new model scores every request in parallel with the old model but its predictions are logged, not served. This allows comparing model outputs on real production traffic before cutover. After validating on shadow traffic, enable the new model via a feature flag. Champion/challenger: route a small traffic slice (5-10%) to the new model and compare business metrics before full rollout.`,
          pitfalls: `• Feature leakage: using features that encode the target label (e.g., including "account_closed_date" as a feature for churn prediction). Results in suspiciously high validation metrics that collapse in production.
• Leaking test set: applying preprocessing (scaling, imputation) fit on the entire dataset (including test set) before splitting. The test set should never influence preprocessing parameters. Use Pipeline.fit_transform on train, Pipeline.transform on test.
• No data versioning: training on unversioned data makes experiments non-reproducible. If you need to retrain 6 months later, use the exact same dataset snapshot. Use DVC or Delta Lake table snapshots.
• Class imbalance ignored: training on heavily imbalanced datasets (1% positive class) causes the model to predict the majority class always. Fix: class_weight='balanced', SMOTE, threshold calibration, or appropriate metrics (F1, AUC instead of accuracy).
• Evaluation on the wrong metric: optimizing cross-entropy loss but the business cares about precision@k or revenue impact. Always map model metrics to business metrics.
• No monitoring post-deployment: models degrade silently as data distributions shift. Monitor prediction distributions, feature distributions, and business KPIs continuously.`,
          tips: `• "Describe your ML pipeline": "Data versioning with DVC → feature engineering in a reusable Pipeline → experiment tracking with MLflow → model registry for promotion workflow → deployment as REST endpoint → monitoring with Grafana dashboards tracking prediction distribution and business KPIs → automated retraining triggered by drift or scheduled weekly."
• Training-serving skew: "The most important thing I've learned is to use the same Pipeline object for both training and inference, serialized and versioned together. If preprocessing differs between training and serving, the model is guaranteed to underperform."
• Retraining strategy: "I evaluate two triggers: time-based (weekly retraining to incorporate new data) and drift-based (retrain when PSI > 0.2 on key features). The retrained model goes through the same eval pipeline before promotion."
• Feature importance: mention SHAP (SHapley Additive exPlanations) for model interpretability — it provides consistent, theoretically grounded feature attributions for any model type.`,
        },
      },
    ],
  },
  // =========================================================================
  // DATA ENGINEERING
  // =========================================================================
  {
    id: "data",
    label: "Data Engineering",
    icon: Database,
    color: "text-amber-600",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-200 dark:border-amber-800",
    topics: [
      {
        id: "etl",
        title: "ETL Pipelines",
        icon: GitBranch,
        sections: {
          definition: `ETL (Extract, Transform, Load) is the foundational pattern for moving and reshaping data across systems. Extract: pull raw data from sources — operational databases, REST/GraphQL APIs, flat files (CSV, Parquet), event streams, SaaS platforms (Salesforce, Stripe). Transform: clean, normalize, join, aggregate, and enrich the raw data into a consistent shape for analytics. Load: write the transformed data to the destination — a data warehouse, data lake, or analytics database.

ELT (Extract, Load, Transform) is the modern variant: load raw data into the destination first, then transform using the warehouse's compute (SQL in BigQuery, Snowflake, or Redshift + dbt). ELT is preferred when the destination warehouse is cheap to compute in and you want to preserve raw data for future reprocessing. ETL is preferred when transformations are complex, data is sensitive and must be anonymized before storage, or the warehouse compute cost is high.

Change Data Capture (CDC) extracts only rows that have changed since the last extraction, rather than performing a full table dump. CDC sources: database transaction logs (Debezium reads Postgres WAL), application-level timestamps (WHERE updated_at > last_run), database triggers. CDC is far more efficient than full extracts for large tables and enables near-real-time pipelines.`,
          examples: `Incremental load with watermark (efficient for large tables):
\`\`\`python
import psycopg2
import pandas as pd
from datetime import datetime

def incremental_extract(last_loaded: datetime) -> pd.DataFrame:
    conn = psycopg2.connect(os.environ['SOURCE_DB_URL'])
    query = """
        SELECT id, user_id, amount, status, created_at, updated_at
        FROM orders
        WHERE updated_at > %(watermark)s
        ORDER BY updated_at
    """
    df = pd.read_sql(query, conn, params={'watermark': last_loaded})
    conn.close()
    return df

def transform(df: pd.DataFrame) -> pd.DataFrame:
    df['amount_usd'] = df['amount'] / 100          # cents to dollars
    df['is_completed'] = df['status'] == 'completed'
    df['created_date'] = pd.to_datetime(df['created_at']).dt.date
    return df.drop(columns=['status'])

def upsert_to_warehouse(df: pd.DataFrame, table: str):
    # Use ON CONFLICT DO UPDATE for idempotent loads
    ...

last_run = get_last_watermark('orders_etl')
raw = incremental_extract(last_run)
clean = transform(raw)
upsert_to_warehouse(clean, 'analytics.orders')
save_watermark('orders_etl', datetime.utcnow())
\`\`\`

dbt transformation model (SQL-first ELT):
\`\`\`sql
-- models/marts/finance/fct_orders.sql
{{ config(materialized='incremental', unique_key='order_id') }}

SELECT
    o.id                AS order_id,
    o.user_id,
    o.amount / 100.0    AS amount_usd,
    o.status,
    u.email             AS user_email,
    u.created_at        AS user_signup_date,
    o.created_at        AS order_date
FROM {{ ref('stg_orders') }} o
JOIN {{ ref('stg_users') }}  u ON o.user_id = u.id

{% if is_incremental() %}
WHERE o.updated_at > (SELECT MAX(order_date) FROM {{ this }})
{% endif %}
\`\`\``,
          advanced: `Idempotency: a pipeline run is idempotent if running it multiple times produces the same result as running it once. This is critical for fault tolerance — when a pipeline fails halfway through and retries, it shouldn't duplicate data. Achieve idempotency by: using upsert (INSERT ... ON CONFLICT DO UPDATE) instead of INSERT, writing to a staging table and then doing an atomic swap (TRUNCATE + INSERT), or using partitioned table rewrites (overwrite the affected date partition, not the whole table).

Exactly-once semantics in streaming: at-most-once (may lose messages), at-least-once (may duplicate), exactly-once (hardest, requires transactional coordination between the source broker and the sink). Kafka achieves exactly-once between producer and broker with idempotent producers + transactions. Achieving exactly-once end-to-end (broker + consumer + sink) requires the sink to be transactional or idempotent as well.

Data contracts: a formal schema agreement between data producers and consumers — like an API contract for data. Producers commit to emitting a specific schema (field names, types, nullability). Consumers can trust the schema won't break unexpectedly. Implementations: dbt schema tests, Great Expectations, soda-core, or Pact for streaming. Data contracts reduce the "silent breakage" problem where upstream schema changes silently corrupt downstream models.`,
          pitfalls: `• No idempotency: a pipeline that uses INSERT (not upsert) will duplicate data on retry. Every pipeline must be safe to re-run from any checkpoint.
• Silent failures: a pipeline that catches exceptions and continues without alerting produces corrupted downstream data that analysts discover days later. Fail loudly, alert immediately, and never swallow exceptions.
• No data quality checks: validate row counts, null rates, and value distributions at each pipeline stage. A sudden 80% drop in row count is a sign of upstream breakage, not a successful extraction.
• Full table scans on large source tables: extracting an entire 10B-row table nightly is unsustainable. Implement CDC or incremental loads with watermarks from day one.
• Schema drift: source systems add or rename columns without notice. Handle gracefully: reject unknowns (strict mode), or land raw JSON and validate downstream.
• No monitoring or alerting: SLA breaches (pipeline didn't finish by 6am) go unnoticed. Use Airflow SLAs or external monitors (Datadog, Monte Carlo) to alert on missed schedules and anomalous metrics.`,
          tips: `• Pipeline reliability: "Every pipeline I write is idempotent by design — I use upserts, write to staging tables with atomic swaps, or overwrite partitions. I also validate row counts and key metrics at each stage and alert on anomalies."
• Orchestration: "I use Airflow for complex DAG dependencies with cross-task data passing. For simpler ELT I use dbt with its built-in DAG and incremental materialization. For streaming I use Kafka + Flink or Spark Structured Streaming."
• Incremental loading: "I always prefer incremental loads over full extracts for tables larger than a few million rows. I use a watermark column (updated_at) and store the last successful run timestamp. The watermark is saved only after a successful load — failed runs retry from the same checkpoint."
• Schema evolution: "I treat source schemas as untrusted. I validate against an expected schema at ingest time and fail the pipeline if required fields are missing or have wrong types. Optional new fields pass through transparently."`,
        },
      },
      {
        id: "data-modeling",
        title: "Data Modeling",
        icon: Layers,
        sections: {
          definition: `Database normalization organizes relational data to minimize redundancy and maintain integrity. First Normal Form (1NF): atomic column values (no arrays or comma-lists in a cell), no repeating column groups. Second Normal Form (2NF): no partial dependencies — every non-key column depends on the entire primary key (relevant for composite PKs). Third Normal Form (3NF): no transitive dependencies — non-key columns depend only on the primary key, not on other non-key columns. BCNF (Boyce-Codd Normal Form): stricter 3NF — every determinant must be a candidate key.

OLTP schemas normalize to 3NF to optimize for write throughput and data integrity — each fact is stored once. OLAP (analytical) schemas denormalize into star or snowflake schemas to optimize for read performance and query simplicity. Denormalization eliminates joins at query time at the cost of data redundancy.

Star schema: a central fact table surrounded by dimension tables. The fact table stores measurable events (sales, page views, conversions) — typically narrow (few columns) but very tall (billions of rows). Dimension tables store descriptive attributes about the facts (product, customer, date, geography) — wider (many descriptive columns) but shorter. Joins in a star schema are always fact ↔ dimension — never dimension ↔ dimension. This predictable join pattern enables vectorized query engines to optimize heavily.`,
          examples: `OLTP normalized schema vs OLAP star schema:
\`\`\`sql
-- OLTP (3NF): optimized for writes, integrity
CREATE TABLE customers (id SERIAL PRIMARY KEY, email TEXT UNIQUE, name TEXT, region_id INT REFERENCES regions(id));
CREATE TABLE products  (id SERIAL PRIMARY KEY, sku TEXT UNIQUE, name TEXT, price_cents INT, category_id INT REFERENCES categories(id));
CREATE TABLE orders    (id SERIAL PRIMARY KEY, customer_id INT REFERENCES customers(id), created_at TIMESTAMPTZ DEFAULT NOW());
CREATE TABLE order_items (order_id INT REFERENCES orders(id), product_id INT REFERENCES products(id), quantity INT, unit_price_cents INT, PRIMARY KEY (order_id, product_id));

-- OLAP Star Schema: optimized for analytical reads
CREATE TABLE fact_sales (
  order_id INT, customer_key INT, product_key INT, date_key INT,
  quantity INT, revenue_usd NUMERIC(12,2), cost_usd NUMERIC(12,2)
);
CREATE TABLE dim_customer (customer_key SERIAL, customer_id INT, email TEXT, name TEXT, region TEXT, segment TEXT);
CREATE TABLE dim_product  (product_key SERIAL, product_id INT, sku TEXT, name TEXT, category TEXT, brand TEXT);
CREATE TABLE dim_date     (date_key INT PRIMARY KEY, full_date DATE, year INT, quarter INT, month INT, week INT, day_of_week TEXT, is_weekend BOOL);
\`\`\`

Slowly Changing Dimension Type 2 (SCD2) — preserve history:
\`\`\`sql
-- When a customer's segment changes, close old record and add new
UPDATE dim_customer SET valid_to = NOW(), is_current = FALSE WHERE customer_id = 123 AND is_current = TRUE;
INSERT INTO dim_customer (customer_id, email, name, segment, valid_from, valid_to, is_current)
VALUES (123, 'user@example.com', 'Jane', 'Premium', NOW(), '9999-12-31', TRUE);
\`\`\``,
          advanced: `Slowly Changing Dimensions (SCD): SCD Type 1 — overwrite the old value (no history). SCD Type 2 — add a new row for each change, with valid_from/valid_to dates and an is_current flag (preserves full history, enables point-in-time queries). SCD Type 3 — add a "previous value" column (preserves only one prior value, simpler than SCD2). SCD2 is the most common and powerful but increases dimension table size and complicates ETL.

Event sourcing: instead of storing the current state, store an immutable, append-only log of all state-changing events. Current state is derived by replaying the event log. Benefits: complete audit trail, ability to replay events to rebuild state, temporal queries ("what was the state at time T?"). Drawbacks: complex querying, eventual consistency, large storage for high-event systems. Event stores: Kafka (with compaction), EventStoreDB, or PostgreSQL with append-only tables.

Schema evolution strategies: backward-compatible changes (add nullable columns, add new tables) require no consumer changes. Breaking changes (rename/remove columns, change types) require coordinated migration. Techniques: expand-contract migration (add new column → backfill → update consumers → remove old column), Blue-green schema migration (switch consumers to new schema atomically), Temporal versioning (keep both schemas alive simultaneously with a version column).`,
          pitfalls: `• Over-normalizing OLAP schemas: a fully normalized analytics schema requires many joins that kill query performance on fact tables with billions of rows. Denormalize dimension attributes into the fact table for frequently queried fields.
• Under-normalizing OLTP schemas: storing comma-separated values in a single column, or repeating groups of columns (product_1, product_2, product_3). This makes queries complex, indexing impossible, and integrity enforcement impossible.
• No surrogate keys: using natural business keys (email, SKU) as primary keys in dimension tables makes SCD2 difficult and creates coupling between operational and analytical systems. Always use integer surrogate keys in dimensional models.
• Ignoring cardinality: high-cardinality columns in dimension tables (user_id, session_id) may belong in the fact table as degenerate dimensions, not in a separate dimension table that would have billions of rows.
• No date dimension: a dim_date table with pre-computed calendar attributes (is_holiday, fiscal_quarter, week_of_year) enables fast calendar-based filters without expensive date functions on fact table dates.
• Premature normalization of reference data: a products dimension with 10,000 rows doesn't need further normalization into categories and brands tables in the OLAP layer — flatten it for simpler queries.`,
          tips: `• OLTP vs OLAP: "OLTP schemas are normalized to 3NF for write efficiency and data integrity. OLAP schemas are denormalized into star schemas for read efficiency — I pre-join dimension data so analysts don't have to write complex joins in every query."
• SCD strategy: "For customer and product dimensions I typically use SCD Type 2 — I need to know what segment a customer was in when they made a purchase, not just their current segment. SCD1 would corrupt historical analysis."
• Grain: "Before designing a fact table, I define the grain — the most atomic unit of measurement that will be stored in one row. Revenue by order? By order line item? By product? Getting the grain wrong is the most expensive modeling mistake."
• Event sourcing: "I recommend event sourcing for audit-critical domains (financial transactions, medical records, access control) where 'what happened and when?' is as important as 'what is the current state?'"`,
        },
      },
      {
        id: "big-data",
        title: "Big Data & Streaming",
        icon: Network,
        sections: {
          definition: `Big data systems are defined by volume (data too large for a single machine), velocity (data arriving faster than batch can process), and variety (structured tables, unstructured text, semi-structured JSON, binary blobs). The engineering challenge is building systems that scale horizontally — adding more machines solves the problem rather than requiring a bigger machine.

Batch processing operates on bounded datasets accumulated over a time window (hourly, daily). Examples: nightly ETL jobs, weekly ML model retraining, monthly billing runs. Batch is simpler to build, easier to debug, and cheaper per unit of compute than streaming. The trade-off is latency — outputs are available only after the batch completes.

Stream processing operates on unbounded, continuously arriving data, producing outputs with low latency (seconds to milliseconds). Examples: fraud detection, real-time dashboards, recommendation engines, IoT anomaly detection. Apache Kafka is the dominant messaging backbone: topics are partitioned for parallelism, messages are retained for configurable periods (replay capability), and consumer groups enable independent consumption by multiple downstream systems. Apache Flink and Spark Structured Streaming are the leading stream processing engines.`,
          examples: `Kafka producer/consumer in Node.js:
\`\`\`ts
import { Kafka } from 'kafkajs';
const kafka = new Kafka({ clientId: 'orders-service', brokers: ['kafka:9092'] });

// Producer: emit an event on each order
const producer = kafka.producer();
await producer.connect();
await producer.send({
  topic: 'order-events',
  messages: [{ key: orderId, value: JSON.stringify({ type: 'ORDER_CREATED', orderId, userId, amount }) }],
});

// Consumer group: each instance in the group handles a subset of partitions
const consumer = kafka.consumer({ groupId: 'analytics-consumer' });
await consumer.connect();
await consumer.subscribe({ topic: 'order-events', fromBeginning: false });
await consumer.run({
  eachMessage: async ({ message }) => {
    const event = JSON.parse(message.value!.toString());
    await analyticsDB.insert(event);
  },
});
\`\`\`

Spark DataFrame aggregation:
\`\`\`python
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, sum, count, date_trunc

spark = SparkSession.builder.appName('OrderAnalytics').getOrCreate()
df = spark.read.parquet('s3://data-lake/orders/year=2024/')

daily_revenue = (
    df.filter(col('status') == 'completed')
      .withColumn('day', date_trunc('day', col('created_at')))
      .groupBy('day', 'region')
      .agg(sum('amount').alias('revenue'), count('id').alias('order_count'))
      .orderBy('day', 'region')
)
daily_revenue.write.mode('overwrite').parquet('s3://data-warehouse/daily-revenue/')
\`\`\``,
          advanced: `Data skew: when data is unevenly distributed across partitions, some tasks process millions of records while others process thousands — the slowest task determines job completion time. Causes: hot keys (one user_id appears in 20% of rows), NULL values in join keys, high-cardinality join columns. Fixes: salting (add random suffix to hot keys and join on multiple buckets), broadcast joins (if one side is small, broadcast it to all executors to avoid shuffle), skew hints in Spark SQL (HINT(BROADCAST)), or repartitioning before the join.

Shuffle optimization: the most expensive operation in distributed processing is the shuffle — redistributing data across the network to co-locate rows with the same key. In Spark: minimize shuffles by partitioning data upfront (df.repartition('customer_id')), caching DataFrames used in multiple downstream operations (df.cache()), and using bucketing for repeated joins on the same column.

Lambda vs Kappa architecture: Lambda has two processing paths — a batch layer (reprocesses all historical data for accuracy) and a speed layer (stream processing for low-latency approximate results). Queries merge both layers. Complex to maintain (two codebases, data synchronization). Kappa architecture: single streaming pipeline handles both historical reprocessing (replay from Kafka with offset 0) and real-time. Simpler, but requires the streaming framework to handle batch-scale data efficiently (Flink excels here).`,
          pitfalls: `• Small files problem: hundreds of thousands of tiny files (1-100KB) in S3/HDFS destroy read performance — each file requires a separate metadata lookup and typically reads far less than one HDFS block (128MB). Fix: compact small files into larger Parquet files (100-500MB) in your ETL pipeline. Use delta tables (Delta Lake) which handle compaction automatically (OPTIMIZE command).
• Naive partitioning: partitioning an S3 dataset by user_id when queries always filter by date is the worst choice — every query scans all partitions. Partition by the most common filter dimension (date, region, product_category). Avoid high-cardinality partition keys (user_id would create millions of partitions).
• Not handling late-arriving data: in streaming, events arrive out of order due to network delays, mobile apps going offline, etc. Stream processors must define a watermark (how long to wait for late data) and a window strategy (tumbling, sliding, session). Events beyond the watermark are dropped or sent to a dead-letter queue.
• No data locality awareness: in distributed systems, network I/O is the bottleneck. Co-locate compute with storage — run Spark close to the S3/HDFS data, use columnar storage (Parquet/ORC) to minimize data scanned, and apply predicate pushdown (filter early before data moves across the network).
• Unbounded state in streaming: a running COUNT or SUM without time windows accumulates state forever, eventually causing out-of-memory errors. Always bound aggregations with time windows (1-hour tumbling window, 7-day sliding window) or explicit state expiration (Flink state TTL).`,
          tips: `• Batch vs streaming decision: "I default to batch processing unless the use case requires sub-minute latency. Batch is simpler, cheaper, easier to debug, and more reliable. Streaming is appropriate for fraud detection, live dashboards, real-time personalization, and IoT anomaly detection where latency matters."
• Partitioning strategy: "I always design partitioning around the most common query filter. For time-series data that's almost always date (year/month/day). Within a partition I sort by the second most common filter (region, user_id) to enable predicate pushdown. I also aim for partition sizes of 100-500MB to avoid the small files problem."
• Data skew: "When a Spark job has a few slow tasks while all others finish quickly, it's almost always data skew. I diagnose with the Spark UI task duration histogram. I fix by salting hot join keys — append a random int 0-9 to the hot key on both sides of the join, replicate the hot-key side 10x, then join on the salted key."
• CAP theorem application: "Kafka is AP — always available, eventually consistent (messages may be duplicated in failure scenarios, hence idempotent consumers). Zookeeper (Kafka's old metadata store) is CP. When designing distributed systems I always ask which side of CP/AP is acceptable for the use case."`,
        },
      },
      {
        id: "analytics",
        title: "Analytics & Reporting",
        icon: BarChart3,
        sections: {
          definition: `Analytics engineering sits between data engineering and business intelligence — transforming raw warehouse data into clean, documented, tested semantic models that analysts and stakeholders can self-serve. The analytics engineer owns the "T" in ELT: writing dbt models that clean, join, and aggregate warehouse data into a semantic layer. This replaces ad-hoc SQL queries with versioned, tested, peer-reviewed data transformations.

A metrics framework defines KPIs hierarchically: North Star Metric (one primary measure of product/business value — e.g., "weekly active users" or "gross merchandise value"), then Level 2 metrics that decompose the NSM (acquisition, activation, retention, revenue, referral — AARRR), then operational metrics that diagnose specific components. The hierarchy makes it possible to investigate a North Star decline by checking each level.

A/B testing is the gold standard for causal inference in product analytics. Requirements: random assignment to control and treatment groups (prevent selection bias), sufficient sample size (determined by power analysis before the experiment — not after), single primary metric defined upfront (multiple testing increases Type I error rate), appropriate statistical test (t-test for continuous metrics, chi-square for binary, Mann-Whitney for non-normal distributions), and minimum detectable effect pre-defined (what size of change is business-relevant?).`,
          examples: `SQL window functions for common analytics patterns:
\`\`\`sql
-- Month-over-month revenue growth
WITH monthly AS (
  SELECT
    DATE_TRUNC('month', created_at) AS month,
    SUM(amount_usd) AS revenue
  FROM fact_orders
  WHERE status = 'completed'
  GROUP BY 1
)
SELECT
  month,
  revenue,
  LAG(revenue) OVER (ORDER BY month) AS prev_month_revenue,
  ROUND(100.0 * (revenue - LAG(revenue) OVER (ORDER BY month)) / LAG(revenue) OVER (ORDER BY month), 1) AS mom_growth_pct
FROM monthly
ORDER BY month;

-- Cohort retention: % of users from signup month who returned each month
SELECT
  cohort_month,
  months_since_signup,
  COUNT(DISTINCT user_id)::FLOAT / FIRST_VALUE(COUNT(DISTINCT user_id)) OVER (PARTITION BY cohort_month ORDER BY months_since_signup) AS retention_rate
FROM (
  SELECT
    u.id AS user_id,
    DATE_TRUNC('month', u.created_at) AS cohort_month,
    DATE_PART('month', AGE(DATE_TRUNC('month', e.event_date), DATE_TRUNC('month', u.created_at))) AS months_since_signup
  FROM users u
  JOIN events e ON u.id = e.user_id
) t
GROUP BY 1, 2
ORDER BY 1, 2;
\`\`\``,
          advanced: `Semantic layer / metrics layer: a centralized definition of business metrics in code, accessible by any BI tool (Looker LookML, dbt Semantic Layer, Cube.dev). Instead of each analyst writing their own revenue calculation with slightly different filters, one definition is shared across all reports. Benefits: single source of truth, consistent metrics across tools, automated lineage documentation. The semantic layer sits between the warehouse and the BI tool, translating metric queries into optimized SQL.

Metric trees / driver trees: decompose a high-level metric into its mathematical components. Revenue = Users × Conversion Rate × Average Order Value. When revenue drops, the driver tree immediately shows whether users declined (acquisition problem), conversion dropped (product/UX problem), or AOV fell (pricing/mix problem). This narrows the diagnostic space from "revenue is down" to "conversion rate for mobile users dropped 8% in the last 7 days."

Statistical pitfalls in A/B testing: peeking (checking results before the planned end date inflates Type I error — the "p-hacking" problem). Fix: use sequential testing methods (O'Brien-Fleming, always-valid inference) if you need to peek. Novelty effect: users engage more with new features simply because they're new — validate long enough for novelty to wear off. Simpson's Paradox: a trend present in sub-groups can reverse when groups are combined due to differing group sizes.`,
          pitfalls: `• Vanity metrics: metrics that look good but don't drive decisions or correlate with business outcomes. Page views, total registered users, app downloads. Prefer active users over registered users, revenue over page views, NPS trend over absolute NPS.
• Correlation vs causation errors: "users who use feature X have 3x higher retention" — but feature X may be used only by already-engaged users (reverse causation). Without a randomized experiment, correlation tells you nothing about causation.
• Missing context: a 5% conversion rate is good or terrible depending on industry, traffic source, and device type. Always provide benchmarks, prior period comparison, and segmentation alongside headline numbers.
• No actionable insights: a dashboard that shows "mobile retention is 20% lower than desktop" without a hypothesis or recommended action is a data dump, not an insight. Pair every finding with "therefore we should..."
• Dashboard sprawl: hundreds of dashboards with overlapping, inconsistent definitions. Stakeholders don't know which to trust. Fix: establish a tiered system — certified dashboards (single source of truth, maintained by analytics team) and exploratory dashboards (self-service, clearly labeled as unofficial).
• Ignoring data freshness: a "real-time" dashboard built on a table that refreshes once daily misleads users who act on stale data. Always display data freshness timestamps on dashboards.`,
          tips: `• Metrics framework: "Before building any dashboard I define: what decision will this dashboard support? Who is the audience? What's the primary metric and how is it calculated? I write the metric definition in a dbt semantic layer so everyone uses the same formula."
• A/B testing: "I always run a power analysis before starting an experiment to determine the required sample size for 80% power and a minimum detectable effect of X%. I set the primary metric and success criteria before the experiment — not after seeing results."
• Data storytelling: "A good analysis answers: what happened, why it happened, and what to do about it. I structure findings as: context → insight → implication → recommendation. Numbers without narrative don't change decisions."
• SQL for analytics: "The most useful SQL concepts for analytics are window functions (running totals, rankings, lag/lead for time comparisons), CTEs for readable query structure, and self-joins for cohort analysis. I also rely heavily on dbt for version-controlled, tested transformations."`,
        },
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Section metadata
// ---------------------------------------------------------------------------
const SECTION_META = [
  {
    key: "definition" as const,
    label: "Definition & Theory",
    icon: BookOpen,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    key: "examples" as const,
    label: "Practical Examples & Code",
    icon: FileCode,
    color: "text-violet-600",
    bg: "bg-violet-50 dark:bg-violet-900/20",
  },
  {
    key: "advanced" as const,
    label: "Advanced Insights",
    icon: Lightbulb,
    color: "text-amber-600",
    bg: "bg-amber-50 dark:bg-amber-900/20",
  },
  {
    key: "pitfalls" as const,
    label: "Common Pitfalls",
    icon: AlertTriangle,
    color: "text-rose-600",
    bg: "bg-rose-50 dark:bg-rose-900/20",
  },
  {
    key: "tips" as const,
    label: "Interview Tips",
    icon: Target,
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
  },
];

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------
function SectionCard({ meta, content }: { meta: (typeof SECTION_META)[number]; content: string }) {
  const [open, setOpen] = useState(false);
  const Icon = meta.icon;
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
      >
        <div className={`p-1.5 rounded-lg ${meta.bg} shrink-0`}>
          <Icon size={14} className={meta.color} />
        </div>
        <span className="font-semibold text-sm text-gray-900 dark:text-white flex-1">
          {meta.label}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-gray-400 shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-gray-400 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-800">
          <div className="pt-3">{renderContent(content)}</div>
        </div>
      )}
    </div>
  );
}

function TopicView({ topic, category }: { topic: TopicData; category: Category }) {
  const Icon = topic.icon;
  return (
    <div>
      <div
        className={`flex items-center gap-3 mb-6 p-4 rounded-xl border ${category.border} ${category.bg}`}
      >
        <div className="p-2 rounded-lg bg-white dark:bg-gray-900 shadow-sm">
          <Icon size={18} className={category.color} />
        </div>
        <div>
          <h2 className="font-bold text-gray-900 dark:text-white">{topic.title}</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {category.label} · {SECTION_META.length} sections
          </p>
        </div>
      </div>
      <div className="space-y-3">
        {SECTION_META.map((meta) => (
          <SectionCard key={meta.key} meta={meta} content={topic.sections[meta.key]} />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------
export default function CompendiumClient() {
  const [activeCat, setActiveCat] = useState("fullstack");
  const [activeTopic, setActiveTopic] = useState("frontend");

  const category = COMPENDIUM.find((c) => c.id === activeCat) ?? COMPENDIUM[0];
  const topic = category.topics.find((t) => t.id === activeTopic) ?? category.topics[0];

  const handleCatChange = (catId: string) => {
    const cat = COMPENDIUM.find((c) => c.id === catId)!;
    setActiveCat(catId);
    setActiveTopic(cat.topics[0].id);
  };

  const totalTopics = COMPENDIUM.reduce((acc, c) => acc + c.topics.length, 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="mx-auto max-w-7xl p-6 pt-24">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/interview-questions"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 mb-4 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Interview Questions
          </Link>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg">
              <BookOpen size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Expert Technical Compendium
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {totalTopics} deep-dive topics across {COMPENDIUM.length} domains · definition,
                examples, advanced insights, pitfalls & interview tips
              </p>
            </div>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {COMPENDIUM.map((cat) => {
            const CatIcon = cat.icon;
            const active = cat.id === activeCat;
            return (
              <button
                key={cat.id}
                onClick={() => handleCatChange(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                  active
                    ? `${cat.bg} ${cat.color} ${cat.border} shadow-sm`
                    : "bg-white dark:bg-gray-900 text-gray-500 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
              >
                <CatIcon size={14} />
                {cat.label}
                <span className={`text-xs ${active ? "opacity-60" : "text-gray-400"}`}>
                  {cat.topics.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Two-column layout */}
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-52 shrink-0 space-y-1.5">
            {category.topics.map((t) => {
              const TIcon = t.icon;
              const active = t.id === activeTopic;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTopic(t.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-left transition-all border ${
                    active
                      ? `${category.bg} ${category.color} ${category.border} font-semibold shadow-sm`
                      : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-300 font-medium"
                  }`}
                >
                  <TIcon size={13} className="shrink-0" />
                  <span className="truncate">{t.title}</span>
                  {active && <ChevronRight size={12} className="ml-auto shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <TopicView topic={topic} category={category} />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-xs text-gray-400 dark:text-gray-600">
          <Sparkles size={12} className="inline mr-1" />
          {totalTopics} topics · {SECTION_META.length} sections each · expert-level reference
        </div>
      </div>
    </main>
  );
}
