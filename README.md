# Vigía – interfaz en Astro

```bash
pnpm install
pnpm dev     # http://localhost:4321
pnpm build
```

- `src/lib/data.ts`: datos de ejemplo; reemplázalos con tu API.
- `src/components/LiveFeed.astro`: simula detecciones; para datos reales dispara
  `window.dispatchEvent(new CustomEvent('detections', { detail: { cam, boxes } }))`.
- `src/pages/busqueda.astro`: conecta aquí tu búsqueda vectorial.
