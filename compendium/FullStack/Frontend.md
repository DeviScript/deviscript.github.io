# Frontend Development

## 1. Definition & Theory

Frontend development is the discipline of building the user-facing layer of web applications. In the React ecosystem, this means composing UIs from components, managing state, and optimizing for perceived performance.

**React's core model:** UI = f(state). Given the same state, the component always renders the same output. Side effects are explicitly declared in `useEffect`.

**React 18 Concurrent Features** enable React to prepare multiple versions of the UI simultaneously. With `startTransition`, state updates can be marked as non-urgent, keeping the interface responsive during expensive renders.

**Reconciliation:** React compares the new virtual DOM tree to the previous one (diffing), then applies the minimal set of DOM mutations (patching). The `key` prop is critical to correct reconciliation in lists.

---

## 2. Practical Examples & Code

### Custom Hook — Debounced Value

```tsx
import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay: number = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

// Usage
const debouncedSearch = useDebounce(searchTerm, 400);
```

### Context + Reducer Pattern (Zustand alternative for small apps)

```tsx
type Action = { type: "SET_USER"; payload: User } | { type: "LOGOUT" };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

const AppContext = createContext<{ state: AppState; dispatch: Dispatch<Action> } | null>(null);
```

### React.memo + useCallback for Expensive Lists

```tsx
const ExpensiveRow = React.memo(({ item, onSelect }: Props) => {
  return <div onClick={() => onSelect(item.id)}>{item.name}</div>;
});

function Parent({ items }: { items: Item[] }) {
  const handleSelect = useCallback((id: string) => {
    // only recreated when deps change
    setSelected(id);
  }, []);

  return items.map((item) => <ExpensiveRow key={item.id} item={item} onSelect={handleSelect} />);
}
```

---

## 3. Advanced Insights

- **Code splitting**: Use `React.lazy` + `Suspense` per route. Next.js does this automatically but dynamic imports (`next/dynamic`) give manual control — critical when a component imports a large library like `framer-motion`.
- **Hydration mismatches**: SSR renders HTML on the server; React then "hydrates" it on the client. If the rendered output differs (e.g., `window` usage, dates, random values), React throws. Fix: use `useEffect` for client-only values, or skip SSR with `dynamic(..., { ssr: false })`.
- **State colocation**: Keep state as close to where it's used as possible. Lifting state unnecessarily causes excessive re-renders. For global state, prefer Zustand (simple) or Jotai (atomic) over Redux for new projects.
- **useMemo vs useCallback**: `useMemo` memoizes a computed value; `useCallback` memoizes a function reference. Both prevent unnecessary work but add overhead — only use them when the cost of recomputing exceeds the cost of memoization.

---

## 4. Common Pitfalls

- **Stale closures in `useEffect`**: If you capture a variable inside `useEffect` without listing it in deps, you get the initial value forever. Fix: include the variable in the dependency array, or use a ref.
- **Unnecessary re-renders from object literals**: `<Component style={{ color: "red" }} />` creates a new object every render. Move it outside the component or use `useMemo`.
- **Missing cleanup**: Event listeners, subscriptions, and timers added in `useEffect` must be cleaned up in the return function. Forgetting causes memory leaks and bugs in Strict Mode (which double-invokes effects).
- **key prop on wrong element**: Putting `key` on a child inside a map when it should be on the outermost element returned by the map callback.
- **Overusing `useReducer`**: For simple boolean flags, `useState` is clearer. `useReducer` shines when you have multiple related pieces of state or complex transitions.

---

## 5. Interview Tips

- When asked about React performance, lead with **profiling first** — never optimize blind. Mention `React DevTools Profiler` and `why-did-you-render`.
- Know the difference between **controlled** and **uncontrolled** components. Interviewers love this.
- Be ready to explain **what happens when you click a button**: event bubbling → handler → setState → schedule re-render → reconciliation → DOM patch.
- For state management questions, explain the spectrum: `useState` → `useContext` → Zustand → Redux. Know when to reach for each.
- When asked about SSR/hydration, explain the **two-pass render**: server renders HTML for the initial paint, browser hydrates to attach event listeners. Problems happen when those two passes disagree.
