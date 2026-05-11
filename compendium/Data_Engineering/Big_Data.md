# Big Data & Streaming

## 1. Definition & Theory

**Big Data** refers to datasets too large for a single machine to process efficiently. The three Vs: **Volume** (scale), **Velocity** (speed of generation), **Variety** (structured, semi-structured, unstructured).

**Batch processing**: Process large accumulated datasets on a schedule. High throughput, high latency (minutes to hours). Apache Spark is the dominant engine.

**Stream processing**: Process data continuously as it arrives. Low latency (milliseconds to seconds), lower throughput per record. Apache Kafka + Flink/Spark Streaming are standard.

**Lambda architecture**: Two parallel pipelines — batch layer (accurate, slow) + speed layer (approximate, fast) + serving layer (merges both). Complex to maintain.

**Kappa architecture**: Single streaming pipeline handles both real-time and historical replay. Simpler, now preferred with systems like Apache Kafka.

**Data lake vs data warehouse:**

- **Data lake**: Raw/unstructured storage (S3, GCS). Cheap, schema-on-read, flexible. Risk: "data swamp" without governance.
- **Data warehouse**: Structured, schema-on-write, optimized for SQL queries (BigQuery, Snowflake, Redshift). Expensive but queryable.
- **Lakehouse**: Combines both — raw storage with warehouse-like ACID transactions and query performance. Apache Iceberg, Delta Lake, Apache Hudi.

---

## 2. Practical Examples & Code

### Spark DataFrame Operations (PySpark)

```python
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, window, sum as spark_sum, avg

spark = SparkSession.builder.appName("UserAnalytics").getOrCreate()

# Read partitioned Parquet from S3
df = spark.read.parquet("s3://my-bucket/events/year=2024/month=01/")

# Filter and aggregate
result = (
    df
    .filter(col("event_type") == "purchase")
    .groupBy(
        "user_id",
        window(col("event_timestamp"), "1 day").alias("day")
    )
    .agg(
        spark_sum("amount").alias("daily_spend"),
        avg("amount").alias("avg_order_value"),
    )
    .orderBy("user_id", "day")
)

# Write back partitioned
result.write.partitionBy("year", "month").mode("overwrite").parquet("s3://my-bucket/daily_spend/")
```

### Kafka Producer/Consumer (Python)

```python
from kafka import KafkaProducer, KafkaConsumer
import json

# Producer
producer = KafkaProducer(
    bootstrap_servers=["kafka:9092"],
    value_serializer=lambda v: json.dumps(v).encode("utf-8"),
)
producer.send("user-events", {"user_id": "abc123", "event": "page_view", "ts": 1700000000})
producer.flush()

# Consumer
consumer = KafkaConsumer(
    "user-events",
    bootstrap_servers=["kafka:9092"],
    group_id="analytics-group",
    auto_offset_reset="earliest",
    value_deserializer=lambda m: json.loads(m.decode("utf-8")),
)

for message in consumer:
    event = message.value
    process_event(event)
```

---

## 3. Advanced Insights

- **Partitioning strategy**: How you partition data determines query speed. Partition on the column most commonly filtered (e.g., date for time-series). Bad partitioning causes "small file problem" (thousands of tiny Parquet files, each with overhead) or "data skew" (one partition much larger than others).
- **Apache Iceberg**: Table format that adds ACID transactions, schema evolution, time travel, and partition evolution to data lakes. Queries can `SELECT * FROM events FOR SYSTEM_TIME AS OF '2024-01-01'`.
- **Exactly-once semantics in Kafka**: Difficult to achieve. Kafka supports idempotent producers + transactional APIs for exactly-once delivery. For most analytics use cases, at-least-once with idempotent consumers is sufficient.
- **Columnar storage (Parquet)**: Stores each column contiguously. For a query that touches 3 of 50 columns, Parquet reads only those 3 columns — dramatically reducing I/O. Row-based formats (CSV, JSON) read entire rows even for single-column queries.
- **Shuffle in Spark**: A `groupBy` or `join` causes a shuffle — data is redistributed across nodes based on the key. Shuffles are expensive. Minimize with: broadcast joins for small tables, pre-partitioning, and avoiding wide transformations when narrow ones suffice.

---

## 4. Common Pitfalls

- **Too many small files**: Each Spark/Hive task creates a file. Millions of tiny files in S3 kill performance due to list/open overhead. Use `coalesce()` or `repartition()` to merge before writing. Schedule a compaction job for streaming destinations.
- **Ignoring backpressure in streaming**: If your consumer is slower than the producer, the consumer falls behind, memory pressure builds, and the system OOMs. Kafka consumer lag monitoring is essential.
- **Using collect() in Spark**: `df.collect()` brings all data to the driver node. On a large dataset, this causes OOM. Use `show()` for inspection, write to storage for output.
- **Storing PII in data lakes without encryption/governance**: Data lakes accumulate sensitive data. Implement column-level encryption, access control (Ranger, IAM), and data retention policies from the start.

---

## 5. Interview Tips

- Know the difference between **batch** and **streaming** and when each is appropriate: "For end-of-day reporting, batch is fine. For fraud detection or live dashboards, streaming is necessary."
- Explain **Kafka's durability model**: messages are persisted to disk and replicated across brokers. Consumer groups track offsets independently — multiple consumers can read the same topic without interfering.
- For Spark questions, know the difference between **transformations** (lazy, build DAG) and **actions** (trigger execution). Common question: "why is my Spark job slow?" — data skew, too many small files, or an unnecessary shuffle.
- Mention **data formats**: Parquet for analytics (columnar), Avro for Kafka messages (schema registry), Delta/Iceberg for lakehouse (ACID + time travel).
