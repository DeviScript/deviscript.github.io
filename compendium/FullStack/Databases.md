# Databases

## 1. Definition & Theory

Databases persist, organize, and retrieve data reliably. The two primary families are:

- **Relational (SQL)**: Structured tables with enforced schemas, ACID transactions, and powerful query capabilities via SQL. Best for structured data with complex relationships (Postgres, MySQL, SQLite).
- **Document / NoSQL**: Schema-flexible storage — documents (MongoDB), key-value (Redis), column-family (Cassandra), graph (Neo4j). Best for high write throughput, flexible schemas, or specific access patterns.

**ACID properties:**

- **Atomicity**: All operations in a transaction succeed, or none do.
- **Consistency**: A transaction brings the database from one valid state to another.
- **Isolation**: Concurrent transactions don't see each other's intermediate states.
- **Durability**: Committed transactions survive crashes.

**CAP Theorem**: A distributed database can guarantee at most two of: Consistency, Availability, Partition tolerance. Real-world systems choose CP (Postgres) or AP (Cassandra, DynamoDB).

---

## 2. Practical Examples & Code

### Drizzle ORM — Schema + Query

```ts
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Type-safe query
const user = await db.select().from(users).where(eq(users.email, "alice@example.com")).limit(1);
```

### Index Strategies

```sql
-- Composite index: order matters — supports (email), (email, status), not (status) alone
CREATE INDEX idx_users_email_status ON users(email, status);

-- Partial index: only index active users — smaller, faster
CREATE INDEX idx_active_users ON users(email) WHERE status = 'active';

-- Index on expression for case-insensitive lookup
CREATE INDEX idx_users_lower_email ON users(lower(email));
```

### Postgres EXPLAIN ANALYZE

```sql
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT u.id, u.email, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
GROUP BY u.id
ORDER BY order_count DESC
LIMIT 20;
```

---

## 3. Advanced Insights

- **Query planning**: Postgres uses statistics (`pg_statistic`) to choose between sequential scan, index scan, and bitmap index scan. After bulk inserts, run `ANALYZE` to update stats.
- **Connection pooling in serverless**: Traditional connection pooling (PgBouncer) doesn't work well in serverless because functions are stateless and short-lived. Use Neon's WebSocket-based pooler or Supabase's Supavisor for edge runtimes.
- **Read replicas**: Offload heavy read queries to replicas. Write to primary, read from replica for analytics or reporting. Be aware of replication lag.
- **Partitioning**: For tables with billions of rows, partition by range (date), list (region), or hash. Queries that filter on the partition key avoid scanning irrelevant partitions (partition pruning).
- **JSONB vs JSON**: Postgres JSONB stores data in a decomposed binary format — faster to query, supports GIN indexing for key-existence queries. JSON is stored as text, preserves whitespace and key order. Prefer JSONB unless you need exact text preservation.

---

## 4. Common Pitfalls

- **Missing indexes on foreign keys**: Postgres doesn't automatically index foreign key columns. A join or cascade operation on an un-indexed FK causes a full table scan.
- **SELECT \***: Always select only the columns you need. `SELECT *` transfers unnecessary data and prevents index-only scans.
- **Long-running transactions**: Hold locks on rows. Other transactions that need those rows will wait. Keep transactions short; move non-DB work outside transaction boundaries.
- **Implicit type coercion in WHERE**: `WHERE user_id = '123'` when `user_id` is an integer forces a cast on every row, potentially making an index unusable.
- **Not using transactions for multi-step writes**: If step 2 fails, step 1 has already committed. Always wrap related writes in a transaction.

---

## 5. Interview Tips

- Know when to choose SQL vs NoSQL: SQL for financial data, complex queries, referential integrity; NoSQL for large-scale event logs, user activity feeds, flexible document storage.
- Be ready to walk through **index selection**: what column(s) to index, when a composite index is better, and when an index actually hurts (high write/update tables, low cardinality columns).
- For "how would you scale a database?", discuss: read replicas, caching hot queries in Redis, archiving old data, sharding as a last resort.
- Understand `EXPLAIN ANALYZE` — being able to read a query plan is a strong signal of database maturity.
- Know the difference between **optimistic** and **pessimistic locking**: optimistic uses version columns (`updated_at` or a counter) and retries on conflict; pessimistic uses `SELECT FOR UPDATE` to lock rows.
