# Reproduction Steps

1. Run pnpm install
2. Run pnpm dev
3. Open http://localhost:5173 in your browser
4. Notice the following warning in the terminal:

```shell
QWIK WARN A 'Component' chore was scheduled on a host element that has already been streamed to the client.
This can lead to inconsistencies between Server-Side Rendering (SSR) and Client-Side Rendering (CSR).

Problematic chore:
  - Type: Component
  - Host: <SSRNode id="10AAA" ="11A", q:brefs=*, q:key="GA_1", q:props=*, q:renderFn=*, q:type="C" />
  - Nearest element location: /src/components/checkbox/checkbox-root.tsx:27:5

This is often caused by modifying a signal in an already rendered component during SSR.
```

This happens when we are backpatching something and there is a qrl around a ref function. Unfortunately, if we remove the ref function, an SSG build fails. Currently we have the qrl kept with the warning.

5. Look into checkbox-trigger.tsx
6. If you uncomment the signal write when backpatching in checkbox-error, the read in checkbox-trigger, or remove the qrl around the ref function, the warning goes away.
