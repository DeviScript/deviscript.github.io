# ML Pipelines

## 1. Definition & Theory

An ML pipeline is the end-to-end automated workflow that takes raw data and produces a deployed, monitored model. A well-engineered pipeline makes model iteration fast and reliable.

**Pipeline stages:**

1. **Data ingestion**: Pull from sources (databases, APIs, data lake)
2. **Feature engineering**: Transform raw data into model-ready features
3. **Training**: Fit model on training data
4. **Evaluation**: Validate on held-out data
5. **Deployment**: Serve model in production (batch or real-time)
6. **Monitoring**: Track data drift, model drift, and performance degradation

**MLOps** is the practice of applying DevOps principles to ML systems: version data and models, automate retraining, monitor drift, and roll back when quality degrades.

**Feature store**: A centralized repository of computed features shared across models. Prevents redundant computation and ensures training/serving consistency.

---

## 2. Practical Examples & Code

### Feature Engineering with Pandas

```python
import pandas as pd
from sklearn.preprocessing import StandardScaler

df = pd.read_csv("transactions.csv")

# Date features
df["hour"] = pd.to_datetime(df["timestamp"]).dt.hour
df["day_of_week"] = pd.to_datetime(df["timestamp"]).dt.dayofweek
df["is_weekend"] = df["day_of_week"].isin([5, 6]).astype(int)

# Rolling aggregates (feature for last 7 days spend per user)
df = df.sort_values("timestamp")
df["spend_7d"] = (
    df.groupby("user_id")["amount"]
    .transform(lambda x: x.rolling("7D", on=df.loc[x.index, "timestamp"]).sum())
)

# Scaling
scaler = StandardScaler()
df[["amount_scaled", "spend_7d_scaled"]] = scaler.fit_transform(df[["amount", "spend_7d"]])
```

### Simple Training Pipeline (scikit-learn)

```python
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import classification_report
import joblib

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = GradientBoostingClassifier(n_estimators=200, learning_rate=0.05, max_depth=4)
model.fit(X_train, y_train)

preds = model.predict(X_test)
print(classification_report(y_test, preds))

# Save model artifact
joblib.dump(model, "model_v2.pkl")
```

### Data Drift Detection

```python
from scipy.stats import ks_2samp

def check_drift(train_values: list, prod_values: list, threshold: float = 0.05) -> bool:
    """Kolmogorov-Smirnov test: p-value below threshold indicates drift."""
    stat, p_value = ks_2samp(train_values, prod_values)
    print(f"KS stat: {stat:.4f}, p-value: {p_value:.4f}")
    return p_value < threshold  # True = drift detected
```

---

## 3. Advanced Insights

- **Training/serving skew**: The most common production ML bug. Happens when training features are computed differently from serving features. Fix: use the same feature transformation code in both paths, ideally from a feature store.
- **Experiment tracking**: Use MLflow, Weights & Biases, or Comet to log hyperparameters, metrics, and artifacts for every run. Makes it trivial to reproduce and compare experiments.
- **Model versioning**: Store models in a model registry (MLflow, Vertex AI Model Registry). Tag with metadata: training date, dataset hash, eval metrics. Never overwrite a deployed model artifact.
- **Shadow mode deployment**: Deploy the new model alongside the old one. Route all real traffic to the old model but also run it through the new model. Compare outputs without affecting users. Safe way to validate before switching traffic.
- **Retraining triggers**: Time-based (retrain weekly), performance-based (retrain when accuracy drops below threshold), or data-based (retrain when significant data drift is detected). Automate with Prefect, Airflow, or Temporal.

---

## 4. Common Pitfalls

- **Leaking the target into features**: Using a column derived from the label as a feature (e.g., including `refund_amount` in a fraud detection model where refunds only exist for confirmed fraud). Causes near-perfect training metrics that collapse in production.
- **Not fixing the random seed**: Non-deterministic training makes it impossible to reproduce results or debug regressions. Always set `random_state` / `seed`.
- **Evaluating on training data**: `model.score(X_train, y_train)` tells you nothing. Always evaluate on held-out data.
- **Hyperparameter tuning before data cleaning**: Clean and validate data first. No amount of tuning compensates for dirty data.
- **Ignoring class imbalance**: Training on 99% negative samples without addressing imbalance produces a model that always predicts negative. Fix: `class_weight="balanced"`, oversampling (SMOTE), or appropriate threshold selection.

---

## 5. Interview Tips

- Walk through a past ML project end-to-end: problem definition → data → feature engineering → model selection → evaluation → deployment → monitoring. This shows you understand the full lifecycle.
- For feature engineering questions: discuss the types of features (numerical, categorical one-hot, embeddings, time-series rolling stats) and how to handle missing values (imputation strategy, adding a `is_missing` indicator column).
- Know **cross-validation** vs a single train/test split: k-fold gives a more reliable performance estimate, especially with small datasets.
- Mention **monitoring** — this separates practitioners from beginners. Explain data drift (input distribution changes) vs concept drift (the relationship between inputs and labels changes).
- For production questions: latency (batch vs real-time inference), infrastructure (containerized serving, auto-scaling), and rollback strategy.
