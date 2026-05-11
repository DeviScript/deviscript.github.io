# Data Modeling

## 1. Definition & Theory

Data modeling is the process of structuring data to support efficient querying and analysis. The right model depends on whether data is used for **operational** (transactional, OLTP) or **analytical** (reporting, OLAP) purposes.

**Normalization (OLTP)**: Eliminate data redundancy by organizing data into related tables. 3NF (Third Normal Form) is the standard for transactional systems — each non-key column depends on the whole primary key and nothing else.

**Dimensional modeling (OLAP)**: Optimized for analytical queries. Denormalize into a **star schema** or **snowflake schema**.

- **Fact table**: Stores measurable events (sales, clicks, page views). Contains foreign keys to dimensions and numeric measures.
- **Dimension table**: Stores descriptive attributes (users, products, dates). Slowly-changing, used for filtering and grouping.

**Star schema**: Fact table in the center, flat dimension tables around it. Fast for queries, easy to understand.

**Snowflake schema**: Normalized dimension tables (dimensions reference other dimensions). More storage-efficient, harder to query.

---

## 2. Practical Examples & Code

### Star Schema DDL

```sql
-- Dimension: users
CREATE TABLE dim_users (
    user_key SERIAL PRIMARY KEY,  -- surrogate key
    user_id UUID NOT NULL,        -- natural key
    email TEXT NOT NULL,
    country TEXT,
    plan_tier TEXT,
    -- SCD Type 2 columns
    valid_from TIMESTAMP NOT NULL DEFAULT NOW(),
    valid_to TIMESTAMP,
    is_current BOOLEAN NOT NULL DEFAULT TRUE
);

-- Dimension: dates
CREATE TABLE dim_date (
    date_key INT PRIMARY KEY,  -- YYYYMMDD format
    full_date DATE NOT NULL,
    year INT, quarter INT, month INT,
    week INT, day_of_week INT,
    is_weekend BOOLEAN, is_holiday BOOLEAN
);

-- Fact table: orders
CREATE TABLE fact_orders (
    order_key SERIAL PRIMARY KEY,
    user_key INT REFERENCES dim_users(user_key),
    date_key INT REFERENCES dim_date(date_key),
    product_key INT REFERENCES dim_products(product_key),
    -- Measures
    quantity INT NOT NULL,
    unit_price NUMERIC(10,2) NOT NULL,
    discount NUMERIC(5,2) DEFAULT 0,
    total_amount NUMERIC(10,2) NOT NULL
);
```

### Slowly Changing Dimension (SCD Type 2) Upsert

```sql
-- When a user upgrades their plan, expire the old row and insert a new one
UPDATE dim_users
SET valid_to = NOW(), is_current = FALSE
WHERE user_id = $1 AND is_current = TRUE;

INSERT INTO dim_users (user_id, email, country, plan_tier, valid_from, is_current)
VALUES ($1, $2, $3, $4, NOW(), TRUE);
```

---

## 3. Advanced Insights

- **Surrogate keys vs natural keys**: Use surrogate keys (auto-increment or UUID) in dimension tables. Natural keys (email, user_id from source) change or are reused; surrogate keys are stable.
- **SCD types**: Type 1 (overwrite — no history), Type 2 (add row — full history), Type 3 (add column — only previous value). Type 2 is most common in analytics.
- **Grain**: The grain of a fact table is the most atomic level of detail it records. Define it explicitly before designing the schema. A fact table should have a consistent grain — don't mix order-level and order-line-level facts.
- **Data Vault**: An alternative modeling approach for large enterprise warehouses. Hubs (business keys), Links (relationships), Satellites (attributes). Highly auditable and adaptable, but complex. Used when source systems change frequently.
- **One Big Table (OBT)**: Denormalized single table with all attributes pre-joined. Extremely fast for specific queries, terrible for flexibility. Used in specific high-query-volume scenarios (e.g., user-facing analytics).

---

## 4. Common Pitfalls

- **Missing date dimension**: Fact tables should reference a `dim_date` table rather than storing raw timestamps. Date dimensions enable fiscal year, holiday, and week-number analysis without complex SQL in every query.
- **Measures in dimension tables**: Revenue belongs in fact tables. Dimension tables hold descriptive, low-cardinality attributes. Mixing them causes incorrect aggregations on joins.
- **Ignoring slowly changing dimensions**: A user upgrading from "free" to "pro" plan should be captured in history. Overwriting (SCD Type 1) loses this — historical revenue analysis becomes wrong.
- **Inconsistent grain**: A fact table that has both one row per order and one row per order line item is a modeling error that causes incorrect sums.

---

## 5. Interview Tips

- Know how to explain a **star schema** simply: "Fact table in the middle, like a star. Dimension tables around the edges. Join dimensions to the fact to filter and group."
- Be ready to design a simple schema on a whiteboard: "Design a data model for an e-commerce analytics platform." Start with the fact table (orders), then add dimensions (users, products, dates, locations).
- Explain **SCD Type 2** clearly: "When a customer changes their address, we don't overwrite — we close the old row with an end date and insert a new one. This preserves historical accuracy."
- When discussing normalization vs denormalization: "In OLTP I normalize to 3NF to avoid write anomalies. In OLAP I denormalize into star schema to minimize join complexity for analytical queries."
