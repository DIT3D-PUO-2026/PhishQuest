# PhishQuest — Static Reconstruction

This folder reconstructs the captured PhishQuest web application as a static multi-page site.

## Included
- 16 rendered route snapshots converted to standalone `.html` pages
- Shared fallback CSS in `style.css`
- Lightweight navigation/interactions in `app.js`
- Captured page content preserved from the browser-rendered DOM

## Routes
`/`, `/register`, `/about`, `/contact`, `/dashboard`, `/learn`, `/lesson`, `/simulation`, `/website`, `/quiz`, `/rewards`, `/certificate`, `/ppd`, `/teacher`, `/profile`, `/manual`

## Notes
The original app is a Vite/React SPA. Its deployment precaches a single `index.html` and uses client-side routing, so these files are reconstructed snapshots rather than the original source pages. Authentication, Supabase writes/reads, media, and the PhishBot backend are not reproduced locally. Referenced media uses the original public deployment URLs so the visual content can load when the network is available.

For local serving, use a simple HTTP server rather than opening the files directly:

    python -m http.server 8000

Then open `http://localhost:8000/`.


## Lesson snapshots
The `lessons/` directory contains six separately captured rendered lesson pages. The Learn page routes each module card to its corresponding local HTML snapshot.


### Manual Pengguna
The `/manual` section contains 8 interactive entries in the original React route. This reconstruction now provides each entry as a standalone local page under `manual/01.html` … `manual/08.html`, while keeping the original wording and layout structure.

### Source assets
See `source-dump/` for exact captured JavaScript chunks/service worker and the live asset dumper for obtaining the deployed CSS from DevTools.
