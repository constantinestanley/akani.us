# akani.us

React/TanStack Router website prepared for Cloudflare Pages.

## Cloudflare Pages settings

Use these settings when creating the Pages project:

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Node.js version: `20`

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Files

- `routes/` - TanStack Router file routes
- `src/main.tsx` - React app bootstrap
- `vite.config.ts` - Vite + TanStack Router plugin config
- `index.html` - Vite HTML entry
- `styles.css` - global styles imported by `routes/__root.tsx`
- `_headers` - Cloudflare Pages security/cache headers
- `_redirects` - SPA fallback routing to `index.html`

## Custom domain

After deploying the Pages project:

1. Add `akani.us` as a custom domain in Cloudflare Pages.
2. If DNS is managed by Cloudflare, Pages can create the needed DNS record automatically.
3. If DNS is outside Cloudflare, point the domain as Cloudflare instructs during custom-domain setup.
4. Enable Always Use HTTPS in Cloudflare SSL/TLS settings if available.

## Notes

This repository is no longer configured as a no-build static site. It builds through Vite and outputs to `dist` for Cloudflare Pages.
