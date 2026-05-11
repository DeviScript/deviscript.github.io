# Analytics & Reporting

## 1. Definition & Theory

Analytics is the process of discovering insights from data to inform decisions. The four levels of analytics:

1. **Descriptive**: What happened? (dashboards, reports, aggregations)
2. **Diagnostic**: Why did it happen? (drill-down, segmentation, cohort analysis)
3. **Predictive**: What will happen? (forecasting, ML models)
4. **Prescriptive**: What should we do? (optimization, recommendations)

**A/B testing (experimentation)**: The gold standard for measuring causal impact of product changes. Split users randomly into control (A) and treatment (B) groups. Measure whether the observed difference is statistically significant.

**Metrics taxonomy:**

- **North Star Metric**: The single metric that best captures the value the product delivers (e.g., "weekly active users," "messages sent").
- **Input metrics**: Leading indicators the team directly influences (e.g., "onboarding completion rate").
- **Guardrail metrics**: Metrics that should not degrade while optimizing the north star (e.g., "latency," "error rate").

**AARRR framework (Pirate Metrics):** Acquisition → Activation → Retention → Revenue → Referral. Maps the user journey to measurable metrics.

---

## 2. Practical Examples & Code

### Cohort Retention Analysis (SQL)

```sql
-- Weekly retention cohorts
WITH user_cohorts AS (
    SELECT
        user_id,
        DATE_TRUNC('week', MIN(created_at)) AS cohort_week
    FROM users
    GROUP BY user_id
),
user_activity AS (
    SELECT DISTINCT
        user_id,
        DATE_TRUNC('week', activity_date) AS activity_week
    FROM user_events
)
SELECT
    c.cohort_week,
    (a.activity_week - c.cohort_week) / 7 AS weeks_since_signup,
    COUNT(DISTINCT a.user_id) AS retained_users,
    ROUND(100.0 * COUNT(DISTINCT a.user_id) / COUNT(DISTINCT c.user_id), 1) AS retention_rate
FROM user_cohorts c
LEFT JOIN user_activity a USING (user_id)
GROUP BY 1, 2
ORDER BY 1, 2;
```

### Funnel Analysis

```sql
SELECT
    COUNT(DISTINCT CASE WHEN step = 'page_view'     THEN user_id END) AS step1_view,
    COUNT(DISTINCT CASE WHEN step = 'add_to_cart'   THEN user_id END) AS step2_cart,
    COUNT(DISTINCT CASE WHEN step = 'checkout_start' THEN user_id END) AS step3_checkout,
    COUNT(DISTINCT CASE WHEN step = 'purchase'      THEN user_id END) AS step4_purchase
FROM user_funnel_events
WHERE event_date BETWEEN '2024-01-01' AND '2024-01-31';
```

### A/B Test Results Query

```sql
SELECT
    experiment_group,
    COUNT(DISTINCT user_id) AS users,
    SUM(converted::int) AS conversions,
    ROUND(100.0 * SUM(converted::int) / COUNT(DISTINCT user_id), 2) AS conversion_rate
FROM ab_experiment_users
WHERE experiment_name = 'new_onboarding_flow'
  AND assigned_at >= '2024-01-01'
GROUP BY experiment_group;
```

---

## 3. Advanced Insights

- **Survivorship bias in cohort analysis**: Only analyzing users who are still active skews retention upward. Always define cohorts at signup, include all users who ever existed in that cohort.
- **Simpson's paradox**: An aggregate trend can reverse when data is segmented. "Overall conversion went up" but "conversion dropped in every individual market." Always segment your analysis.
- **Novelty effect in A/B tests**: Users behave differently to new features simply because they're new. Run tests long enough (typically 2–4 weeks) to outlast the novelty effect.
- **Network effects in experiments**: If users in A and B groups interact (social products, marketplaces), treatment "leaks" to the control group. Use **cluster randomization** (assign by network cluster) instead of individual randomization.
- **Self-serve BI (Semantic layer)**: Tools like dbt Metrics Layer, LookML, or Cube define business metrics once in code. Business users query the semantic layer rather than raw tables — consistent metrics, no reinventing calculations in every dashboard.

---

## 4. Common Pitfalls

- **Peeking at A/B results**: Checking significance daily and stopping when you see p < 0.05 inflates false positives. Pre-register sample size and run to completion.
- **Using the wrong metric for the North Star**: Optimizing for DAU (daily active users) can produce features that annoy users into opening the app. Pair engagement metrics with quality signals.
- **Ignoring statistical power**: Before running a test, calculate the required sample size. A test with 80% power has a 20% chance of missing a real effect that exists.
- **Average vs percentile metrics**: Average latency hides tail latency. p95 and p99 latency tell you what your slowest users experience. Always report both for performance metrics.
- **Metrics without context**: A 5% drop in signups is alarming — unless it's a holiday weekend, a marketing budget cut, or a seasonality effect. Always annotate dashboards with events that could explain anomalies.

---

## 5. Interview Tips

- For product analytics interviews: start with **clarifying the problem** (what decision will this analysis inform?), then define the metric, then describe the SQL/analysis, then discuss limitations.
- Know how to walk through an **A/B test**: hypothesis, randomization unit (user vs session vs page), primary metric, guardrail metrics, sample size calculation, runtime, and how you'd interpret results.
- Be ready to discuss **data quality issues**: late-arriving data, tracking gaps (ad blockers, client-side events that fail), bot traffic, timezone errors. Show you're skeptical of raw numbers.
- For dashboard design questions: discuss **audience** (executive vs operational), **refresh frequency** (daily vs real-time), **actionability** (can the viewer do something with this information?).
- Mention **data storytelling**: "I don't just show the chart — I write a 2-sentence interpretation of what it means and the recommended action."
