# Backend & Node.js

## 1. Definition & Theory

Backend development covers server-side logic, data persistence, API design, and system integration. Node.js is single-threaded with a non-blocking I/O model powered by libuv and an event loop — making it excellent for I/O-bound workloads but unsuitable for CPU-intensive tasks without worker threads.

**Event loop phases (in order):**

1. Timers (`setTimeout`, `setInterval`)
2. Pending callbacks (I/O errors)
3. Idle/prepare (internal)
4. Poll (new I/O events)
5. Check (`setImmediate`)
6. Close callbacks

`Promise.then` callbacks run in the **microtask queue** — they execute _between_ event loop phases, before the next phase begins.

**REST vs tRPC vs GraphQL:**

- REST: resource-based, widely understood, requires manual type sync between client/server
- tRPC: end-to-end type safety, ideal for TypeScript monorepos, no code generation
- GraphQL: client-specified queries, great for complex data graphs, adds complexity

---

## 2. Practical Examples & Code

### Hono API with Zod Validation

```ts
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const app = new Hono();

const CreateUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

app.post("/users", zValidator("json", CreateUserSchema), async (c) => {
  const { name, email } = c.req.valid("json");
  const user = await db.user.create({ data: { name, email } });
  return c.json(user, 201);
});
```

### Worker Threads for CPU Work

```ts
import { Worker, isMainThread, parentPort, workerData } from "worker_threads";

if (isMainThread) {
  const worker = new Worker(__filename, { workerData: { n: 40 } });
  worker.on("message", (result) => console.log("Fibonacci:", result));
} else {
  function fib(n: number): number {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  parentPort?.postMessage(fib(workerData.n));
}
```

### Rate Limiting with Redis

```ts
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"), // 10 requests per 10s
});

// In middleware
const { success, remaining } = await ratelimit.limit(ip);
if (!success) return c.json({ error: "Too many requests" }, 429);
```

---

## 3. Advanced Insights

- **Backpressure**: When your server produces data faster than the consumer can process it (e.g., streaming a large DB result to a slow client), use Node.js streams with proper `pipe` and `drain` event handling.
- **Connection pooling**: Never create a new DB connection per request. Use a pool (PgBouncer, Drizzle's built-in pool, or Prisma's connection limit). In serverless, use edge-compatible poolers like Neon's `@neondatabase/serverless` over WebSockets.
- **Graceful shutdown**: Listen for `SIGTERM`, stop accepting new connections, wait for in-flight requests to complete, then close the server. Critical in Kubernetes where pods are replaced frequently.
- **Caching strategies**: Cache-aside (app manages cache explicitly) vs write-through (write to cache and DB together) vs read-through (cache handles misses). Redis for hot data; CDN for static/public data.

---

## 4. Common Pitfalls

- **Unhandled promise rejections**: In Node.js, an unhandled rejection can crash the process. Always add `.catch()` or use `try/catch` with `async/await`. Register a global handler for uncaught cases: `process.on("unhandledRejection", ...)`.
- **Blocking the event loop**: `JSON.parse` of a 50MB payload, synchronous file reads (`fs.readFileSync`), or heavy crypto on the main thread all block the loop. Move CPU work to worker threads.
- **N+1 queries**: Fetching a list of items then querying each item's relations individually. Fix with JOIN, `include` in Prisma, or DataLoader (batching pattern).
- **Secrets in logs**: Logging request bodies or headers in debug mode can expose tokens or passwords. Use structured logging and scrub sensitive fields.

---

## 5. Interview Tips

- For "how does Node.js handle concurrency?", explain the event loop, microtask queue, and libuv thread pool. Emphasize it's _concurrent_ (can handle many I/O requests) but not _parallel_ on the main thread.
- When asked about API design, show you know REST semantics: proper HTTP verbs (GET/POST/PUT/PATCH/DELETE), status codes (200/201/400/404/422/500), and idempotency.
- Mention **graceful degradation**: what happens if your cache is down? Your queue is full? Good systems have fallbacks.
- For scaling questions: vertical (bigger machine) vs horizontal (more machines). Horizontal requires stateless services — JWT over session cookies, shared cache, etc.
