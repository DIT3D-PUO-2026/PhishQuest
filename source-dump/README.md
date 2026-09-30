# PhishQuest source/asset dump

Captured from the provided deployment inspection on 2026-09-30.

## Exact JavaScript captured
- `index-CLqRt7LV.js` — main Vite/React bundle (exact captured content)
- `index.es-RSxu0ck3.js` — exact captured dependency chunk
- `purify.es-BlAnjfs_.js` — exact captured dependency chunk
- `sw.js` — exact captured service worker

## CSS
The deployed page references `/assets/index-nrUQTZNi.css`, but its body was not present in the supplied JS/HTML dumps and the web/runtime environment here could not directly fetch that restricted asset. `reconstructed-style.css` is therefore the local CSS used by this reconstruction, **not a claim that it is byte-for-byte identical to the deployed stylesheet**.

For an exact live dump, run `dump-live-assets.js` in DevTools Console while viewing the live PhishQuest site. It fetches same-origin external `<script>` and `<link rel="stylesheet">` assets and also captures inline styles and the rendered HTML.
