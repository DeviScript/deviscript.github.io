# ETL Pipelines

## 1. Definition & Theory

ETL (Extract, Transform, Load) is the process of moving data from source systems into a destination optimized for analysis. Modern variants include **ELT** (Extract, Load, Transform) — load raw data first, transform in the warehouse — which is now preferred with cloud data warehouses (BigQuery, Snowflake, Redshift).

**Extract**: Pull data from source systems — relational DBs, REST APIs, event streams, files (CSV, JSON, Parquet).

**Transform**: Clean, validate, normalize, aggregate, and reshape data. The most complex and error-prone phase.

**Load**: Write to destination — data warehouse, data lake, operational DB.

**Pipeline orchestration tools:**

- **Apache Airflow**: Industry standard. Python-based DAGs, rich ecosystem. Heavy for small teams.
- **Prefect / Dagster**: Modern Python-native alternatives. Better observability, easier testing.
- **dbt**: Transforms data _inside_ the warehouse using SQL. Does T in ELT, with version control, testing, and docs.

**Idempotency**: An ETL pipeline run should produce the same result if run multiple times for the same time period. Critical for recovery from failures.

---

## 2. Practical Examples & Code

### Airflow DAG Example

```python
from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.python import PythonOperator

def extract_users(**context):
    # Pull new users since last run
    ds = context["ds"]  # execution date
    users = db.execute(f"SELECT * FROM users WHERE created_at::date = '{ds}'")
    return users.to_json()

def transform_users(**context):
    raw = context["task_instance"].xcom_pull(task_ids="extract")
    df = pd.read_json(raw)
    df["email"] = df["email"].str.lower().str.strip()
    df["domain"] = df["email"].str.split("@").str[1]
    return df.to_json()

with DAG(
    dag_id="user_etl",
    start_date=datetime(2024, 1, 1),
    schedule_interval="@daily",
    catchup=False,
    default_args={"retries": 2, "retry_delay": timedelta(minutes=5)},
) as dag:
    extract = PythonOperator(task_id="extract", python_callable=extract_users)
    transform = PythonOperator(task_id="transform", python_callable=transform_users)
    extract >> transform
```

### dbt Model Example

```sql
-- models/marts/user_metrics.sql
{{ config(materialized='incremental', unique_key='user_id') }}

SELECT
    u.id AS user_id,
    u.email,
    u.created_at,
    COUNT(o.id) AS total_orders,
    SUM(o.amount) AS total_spend,
    MAX(o.created_at) AS last_order_at
FROM {{ ref('stg_users') }} u
LEFT JOIN {{ ref('stg_orders') }} o ON o.user_id = u.id

{% if is_incremental() %}
WHERE u.updated_at > (SELECT MAX(created_at) FROM {{ this }})
{% endif %}

GROUP BY u.id, u.email, u.created_at
```

---

## 3. Advanced Insights

- **Incremental loads vs full refresh**: Full refresh reprocesses everything — safe but slow. Incremental load processes only new/changed records using a high-water mark (timestamp or ID). Use incremental by default; fall back to full refresh for corrections.
- **Change Data Capture (CDC)**: Rather than polling the source DB for changes, capture DB write-ahead log (WAL) events. Tools: Debezium, Airbyte CDC connectors. Zero-lag replication to downstream systems.
- **Schema evolution**: Source schemas change without warning (new columns, renamed fields, type changes). Build pipelines to handle `SELECT *` → named columns, nullable fields, and schema validation at ingestion.
- **Data lineage**: Track which source data produced which downstream table. Tools like OpenLineage / Marquez record lineage automatically. Essential for debugging and compliance.

---

## 4. Common Pitfalls

- **Silent failures**: A pipeline fails partway through — half the data loads successfully. Without proper atomic commits or idempotency, you now have corrupt data. Use staging tables + atomic swap (create new table, then rename).
- **Not testing transformations**: dbt has built-in tests (`not_null`, `unique`, `accepted_values`, `relationships`). Untested transforms silently produce wrong aggregates for months.
- **Timezone handling**: UTC in the database, convert on display. Never store local times. ETL pipelines that run across midnight can double-count or miss records if timezone handling is wrong.
- **Ignoring pipeline failures**: Airflow SLA misses and task failures should page the team. An ETL that silently fails means downstream dashboards show stale data without anyone knowing.

---

## 5. Interview Tips

- Explain the **ELT vs ETL trade-off**: ELT is preferred when your warehouse is powerful enough to transform (BigQuery, Snowflake). Traditional ETL makes sense when you want to reduce warehouse costs by cleaning data before loading.
- Know what makes a pipeline **idempotent**: "If I re-run yesterday's DAG today, I should get the same result." Discuss using `MERGE`/`UPSERT`, partition overwrite, or deduplicated staging tables.
- For failure handling questions: retries with backoff, dead letter queues for bad records, alerting on SLA misses, and runbooks for common failure modes.
- When asked about tooling: show awareness of the ecosystem (Airflow for orchestration, dbt for transformation, Airbyte for ingestion, Great Expectations for data quality) without being dogmatic — the right tool depends on scale and team.
