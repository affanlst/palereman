# Palereman Coffee and View

Next.js 16, React and TypeScript single page website. The active specification is [PRD 2.0](docs/PRD-Palereman-v2-approved.md); the [approved design](docs/design/approved-desktop.webp) and [design direction](docs/design-direction-v3.md) document the user's redesign approval.

The site uses warm cream, locally hosted Newsreader and Source Sans 3, and a continuous Javanese mural from the hero through the footer. Suasana has its image on the left, while Menu has its image on the right. Shared containers align header, sections and footer. Mobile has a native collapsible menu and a keyboard-scrollable video rail. The mural remains static, and reduced motion disables smooth scrolling and transitions.

## Develop

Node.js 20.9 or newer is required. This environment uses Node.js 24.

```sh
npm ci
npm run dev
```

Use `http://localhost:3000` for local development. Current Next.js development resources require a matching allowed origin; a different hostname or tunnel needs an explicitly scoped `allowedDevOrigins` entry. The production server does not depend on the development HMR connection.

## Validate and self host

```sh
npm run lint
npm run typecheck
npm run build
npm run start
```

Production uses port 3000 unless `PORT` or `--port` is supplied. Run behind an HTTPS reverse proxy with a supervised Node.js process. No new environment variables or platform credentials are required for the redesign.

## Content and integrations

Business information is configured in `src/lib/profile.ts`. The address and Maps link came from the user's screenshot and link. The user confirmed the phone/WhatsApp number and hours: 08.00–20.00, Friday closed.

Both menu buttons open the same Google Drive URL from that configuration in a new tab. `/menu`, `/suasana` and `/kunjungi` redirect to their corresponding homepage anchors. There is no local menu PDF or full menu catalogue.

The Nasi Bakar photograph and official gunungan were extracted from the supplied menu. The continuous mural is original generated decoration made for the user-approved design; it is not an official historical character sheet or a licensed stock image. Font license files are in `public/fonts`. See [asset notes](docs/design/README.md).

Venue photo files are still missing, so Hero and Suasana use explicit photo placeholders. The user supplied two TikTok short links and one Instagram Reel, now configured in `src/lib/social-videos.ts`. All three cards have working play controls and source links. Since cover images have not been supplied, the cards use neutral platform labels rather than invented thumbnails. The component loads one official player at a time on request, with loading, failure/retry and close controls.

Instagram has a direct embed URL. TikTok short links are resolved on demand by `/api/videos/[id]`, which follows only HTTPS redirects on an explicit TikTok hostname allowlist. It accepts configured video IDs only, with an eight-second resolution deadline and a five-redirect limit. No HTML/video scraping is used. The production Node.js server must be able to reach TikTok to resolve the short links; if that request or a platform player fails, the source link remains available. Full canonical TikTok URLs can replace short links in the configuration later to eliminate the resolution step. See [video integration checks](docs/video-integration-verification.md) for actual versus simulated test coverage.

The visit section contains a lazy Google Maps iframe and an always-visible directions link. This cloud environment blocks Google Maps and anonymous Drive requests; those remote destinations need verification from a visitor's unrestricted browser. Link targets and new-tab behavior can be tested locally without claiming the remote content is accessible.

## Review

Current website screenshots: [desktop](docs/screenshots/palereman-desktop.png), [mobile](docs/screenshots/palereman-mobile.png). These are browser captures of the implementation, not generated mockups. [Verification notes](docs/redesign-verification.md) record executed checks and remaining media limitations.
