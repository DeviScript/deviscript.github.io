# DevOps & Testing

## 1. Definition & Theory

DevOps is the practice of combining software development and IT operations to shorten the delivery cycle while maintaining reliability. For a TypeScript/Next.js engineer, this means:

- **Testing**: Writing automated tests at multiple levels to catch bugs before production.
- **CI/CD**: Automated pipelines that build, test, and deploy code on every push.
- **Observability**: Knowing what your application is doing in production (logs, metrics, traces).
- **Deployment**: Reliably releasing new versions with minimal downtime.

**Test pyramid (from fast/cheap to slow/expensive):**

1. Unit tests — test a single function or class in isolation
2. Integration tests — test multiple modules working together (e.g., API handler + DB)
3. End-to-end tests — simulate a real user in a real browser (Playwright, Cypress)

---

## 2. Practical Examples & Code

### Vitest Unit Test

```ts
import { describe, it, expect } from "vitest";
import { formatCurrency } from "@/lib/utils";

describe("formatCurrency", () => {
  it("formats USD correctly", () => {
    expect(formatCurrency(1234.5, "USD")).toBe("$1,234.50");
  });

  it("handles zero", () => {
    expect(formatCurrency(0, "USD")).toBe("$0.00");
  });

  it("handles negative values", () => {
    expect(formatCurrency(-99.99, "USD")).toBe("-$99.99");
  });
});
```

### Playwright E2E Test

```ts
import { test, expect } from "@playwright/test";

test("user can log in and see dashboard", async ({ page }) => {
  await page.goto("/login");
  await page.fill('[name="email"]', "test@example.com");
  await page.fill('[name="password"]', "secret123");
  await page.click('[type="submit"]');

  await expect(page).toHaveURL("/dashboard");
  await expect(page.getByRole("heading", { name: "Welcome" })).toBeVisible();
});
```

### GitHub Actions CI Pipeline

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm test
      - run: pnpm build
```

---

## 3. Advanced Insights

- **Test doubles**: Know the difference between **mocks** (verify interactions), **stubs** (return fixed values), and **spies** (observe real function calls). Over-mocking leads to tests that pass when the real code is broken.
- **Database in tests**: For integration tests, spin up a real Postgres instance with Docker (or use `pg-mem` for in-memory). Use a separate test database; run migrations before tests; truncate tables between test runs.
- **Blue-green deployments**: Two identical environments (blue = current, green = new). Switch traffic to green after validation. Instant rollback by switching back. Vercel does this automatically per deployment.
- **Feature flags**: Deploy code without activating it. Enables trunk-based development (no long-lived feature branches) and gradual rollouts. Tools: LaunchDarkly, Statsig, or a simple DB flag.
- **OpenTelemetry**: Vendor-neutral instrumentation standard. Add traces to your Next.js app with `@vercel/otel` or the official `@opentelemetry/sdk-node`. Traces show exactly where latency is coming from across services.

---

## 4. Common Pitfalls

- **Testing implementation details**: Testing that a function calls `setState` a specific number of times is brittle. Test behavior (what the user sees) not implementation (how it's built).
- **Flaky tests**: Tests that fail intermittently due to timing, shared state, or network calls. Fix with deterministic assertions, proper waits (`await expect(...).toBeVisible()`), and isolated test environments.
- **Skipping the feedback loop**: CI that takes 20+ minutes gets ignored. Optimize by running unit tests first (fast), then integration, then E2E. Cache `node_modules` aggressively.
- **No rollback plan**: Always know how to revert a deployment. Database migrations that add columns are safe; migrations that drop or rename columns require a multi-phase rollout.

---

## 5. Interview Tips

- Describe your testing philosophy: "I follow the testing trophy — more integration tests than unit tests, because they give more confidence with less brittleness, and E2E for critical user journeys."
- For CI/CD questions, walk through a real pipeline: push → lint → type-check → unit tests → integration tests → build → deploy to staging → smoke test → deploy to production.
- Know what **observability** means vs monitoring: monitoring tells you _that_ something is wrong; observability lets you ask _why_ it's wrong without deploying new code.
- When asked about deployment strategies, name three: rolling (gradual replacement), blue-green (full swap), canary (route % of traffic to new version). Explain trade-offs.
