# Model Evaluation

## 1. Definition & Theory

Model evaluation determines whether your AI system is working correctly — both at training time and in production. For LLM-based systems, evaluation is harder than traditional ML because outputs are open-ended text.

**Two phases of evaluation:**

1. **Offline evaluation**: Run before deploying. Measure on a held-out test set with known ground truth. Fast iteration loop.
2. **Online evaluation**: Monitor in production. Track real user interactions, collect implicit signals (thumbs up/down, follow-up questions), and run shadow mode experiments.

**Metrics by task type:**

| Task             | Metrics                                                         |
| ---------------- | --------------------------------------------------------------- |
| Classification   | Accuracy, Precision, Recall, F1, ROC-AUC                        |
| Regression       | MAE, RMSE, R²                                                   |
| Generation (LLM) | BLEU, ROUGE, BERTScore (automated); Human evals (gold standard) |
| RAG              | Faithfulness, Answer Relevance, Context Precision (RAGAS)       |
| Recommendation   | Precision@K, Recall@K, NDCG, MRR                                |

**Bias and fairness**: Models can amplify biases in training data. Always evaluate performance disaggregated by demographic subgroups before deploying systems that affect people.

---

## 2. Practical Examples & Code

### LLM-as-Judge Evaluation

```ts
async function evaluateFaithfulness(
  question: string,
  context: string,
  answer: string
): Promise<{ score: number; reasoning: string }> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `You are an expert evaluator. Score the answer from 0.0 to 1.0 
based solely on whether it is factually grounded in the provided context. 
Return JSON: { "score": number, "reasoning": string }`,
      },
      {
        role: "user",
        content: `Context: ${context}\n\nQuestion: ${question}\n\nAnswer: ${answer}`,
      },
    ],
    response_format: { type: "json_object" },
  });

  return JSON.parse(response.choices[0].message.content!);
}
```

### Confusion Matrix Interpretation

```ts
// For binary classification
function computeMetrics(tp: number, fp: number, tn: number, fn: number) {
  const precision = tp / (tp + fp); // When model says positive, how often correct?
  const recall = tp / (tp + fn); // How many actual positives did model catch?
  const f1 = (2 * (precision * recall)) / (precision + recall);
  const accuracy = (tp + tn) / (tp + fp + tn + fn);
  return { precision, recall, f1, accuracy };
}
```

### A/B Test Significance Check

```ts
// Two-proportion z-test
function isSignificant(
  conversionsA: number,
  totalA: number,
  conversionsB: number,
  totalB: number,
  alpha = 0.05
): boolean {
  const pA = conversionsA / totalA;
  const pB = conversionsB / totalB;
  const pooled = (conversionsA + conversionsB) / (totalA + totalB);
  const se = Math.sqrt(pooled * (1 - pooled) * (1 / totalA + 1 / totalB));
  const z = Math.abs(pA - pB) / se;
  const criticalZ = 1.96; // α = 0.05, two-tailed
  return z > criticalZ;
}
```

---

## 3. Advanced Insights

- **Overfitting to eval set**: If you tune hyperparameters on the validation set, your final test set score becomes an optimistic estimate. Hold out a true test set and evaluate it only once.
- **Eval dataset quality**: Garbage in, garbage out. An eval set with labeling errors will give misleading metrics. Regularly audit your eval data for quality.
- **Statistical power**: Small test sets give unreliable metrics. For 95% confidence with ±2% margin of error on a metric around 50%, you need ~2400 samples.
- **Online evaluation signals**: Direct feedback (thumbs up/down) is sparse and biased (users mostly complain, not compliment). Implicit signals — query reformulation, time-on-task, downstream actions — are richer.
- **Regression testing**: Every time you change a prompt or model, run your eval suite to check for regressions. Treat AI systems like software: if a metric drops, it's a bug.

---

## 4. Common Pitfalls

- **Using accuracy on imbalanced datasets**: A model that always predicts "not fraud" on 99% non-fraud data is 99% accurate but useless. Use F1, PR-AUC, or Matthews Correlation Coefficient.
- **Data leakage**: Training data contaminated with test data makes eval metrics meaningless. Especially common when splitting by random row rather than by entity (e.g., split by user ID, not individual transactions).
- **Automating eval without human calibration**: LLM-as-judge works well when calibrated against human judgments. Blindly trusting it without validation can lead to "eval hacking" — model optimized for the judge's quirks, not real quality.
- **Evaluating only the happy path**: Test with adversarial inputs, edge cases, and malformed queries. Your eval set should include examples that should fail gracefully.

---

## 5. Interview Tips

- For classification metrics, be able to explain the **precision/recall trade-off**: high recall (catch everything, more false positives) vs high precision (only confident positives). Explain which matters more in context (fraud detection → high recall; spam filter → high precision).
- For LLM evaluation, mention that **automated metrics have limitations** — BLEU can score a fluent but factually wrong answer highly. Say you'd combine automated metrics with periodic human evaluation.
- Demonstrate awareness of **production monitoring**: "After deploying, I'd track p95 latency, error rate, and a sample of outputs through an LLM-as-judge pipeline."
- Know the difference between **validation set** (tune hyperparameters) and **test set** (final honest evaluation). Conflating them is a common mistake.
