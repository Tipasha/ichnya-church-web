# St. Nicholas Church in Ichna

A static, single-page presentation of the parish. It runs without a build tool or third-party libraries; you can open `index.html` directly or host the files on any static hosting service.

## Photos

Folders for prepared images: `images/hero/`, `images/history/`, `images/archive/`, `images/revival/`, and `images/gallery/`. Visual placeholders are currently shown instead of photos so the page works without missing files or third-party images.

Before publishing, replace the placeholders in the corresponding sections of `index.html` with `<picture>` or `<img>` elements containing real photos and meaningful Ukrainian `alt` text. AVIF files with a WebP fallback are recommended. For wide photos, prepare versions approximately 800, 1400, and 2000 px wide; 900–1200 px is sufficient for the gallery. Compress images without noticeable loss of detail, and set `width` and `height` on every `<img>`. Do not defer the main photo (`loading="eager"`; use `fetchpriority="high"` if needed). For images below the fold, use `loading="lazy"` and `decoding="async"`.

## Before Production

- Replace the example canonical URL `https://example.org/` with the URL of the published site.
- Add real photos to the marked sections; do not leave the stylized placeholders on the final page.
- After adding photos, configure `srcset`/`sizes` and check the actual crops on mobile and large screens.
- Review external links, metadata, and contrast after adding the final content.

No trackers, external scripts, or fonts are loaded.