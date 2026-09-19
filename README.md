# Vivacity '27

React/Vite website for Vivacity '27 at LNMIIT Jaipur.

## Run locally

```bash
npm install
npm run dev
```

## Build for deployment

```bash
npm run build
npm run preview
```

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages whenever `main` changes.

## Repository structure

- `src/` contains the React application, pages, shared data, and UI behavior.
- `public/` contains optimized public WebP assets.
- Root CSS files preserve the existing visual system and responsive design.
- `private/` is ignored and is reserved for the admin dashboard source.
- `google-apps-script.gs` is ignored and must remain private.

The public deployment includes the festival site and registration form. The admin dashboard and spreadsheet receiver are intentionally excluded from the public GitHub Pages bundle.
