# akani.us

Static website prepared for Cloudflare Pages.

## Cloudflare Pages settings

Use these settings when creating the Pages project:

- Framework preset: None / Static HTML
- Build command: leave empty
- Build output directory: `/`
- Root directory: `/`
- Node.js version: not required

## Files

- `index.html` - static landing page
- `styles.css` - browser-safe CSS without a build step
- `_headers` - Cloudflare Pages security/cache headers
- `_redirects` - fallback routing to `index.html`

## Custom domain

After deploying the Pages project:

1. Add `akani.us` as a custom domain in Cloudflare Pages.
2. If DNS is managed by Cloudflare, Pages can create the needed DNS record automatically.
3. If DNS is outside Cloudflare, point the domain as Cloudflare instructs during custom-domain setup.
4. Enable Always Use HTTPS in Cloudflare SSL/TLS settings if available.

## Notes

This repository currently deploys as a no-build static site. Do not use the previous Tailwind `@import` syntax unless a build pipeline is added later.
