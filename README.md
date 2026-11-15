# Fairway 90 — PWA

This is month 1 of a 90-day program for mobility, strength and golf power. It's a static site with no backend, no build step and no dependencies.

## Files
- `index.html`: the whole app, with program data, styles and logic inlined
- `manifest.webmanifest`, `icons/`: home-screen install
- `sw.js`: offline cache

## Deploy (pick one)
- **Vercel:** `npx vercel deploy --prod` from this folder, or drag the folder into vercel.com/new.
- **Netlify:** drag the folder onto app.netlify.com/drop.
- **GitHub Pages:** push the folder to a repo, then go to Settings → Pages and deploy from the branch root.

You need HTTPS for the service worker, and all three hosts give you that.

Then open the URL on your phone. On iPhone, use Safari: Share → Add to Home Screen. On Android, use Chrome: ⋮ → Install app.

## Data
Logs are stored in `localStorage` on the device. Use Setup → Copy backup to export them, and paste the text into Restore on another device.

## Editing the program
In the source project, all program content (sessions, rx per week, cues, tests and evidence) lives in `src/program.js`. Run `python3 build.py` to regenerate `dist/`. When you ship changes, bump `CACHE` in `sw.js` so phones pick up the new version.
