# Palereman Coffee and View

Next.js 16, React and TypeScript single page website. Business information follows [PRD 2.0](docs/PRD-Palereman-v2-approved.md). The current [modern Jawa design direction](docs/design-direction-v4.md) implements the user's October 17 remake request and supersedes the older cream mural design.

The site pairs forest green, cream and copper with a fixed-ratio wayang illustration and crisp vector batik inspired by kawung. Locally hosted Newsreader and Source Sans 3 provide editorial headings and readable body text. Menu photography comes from the supplied Palereman menu. Mobile has a native collapsible menu. The social section uses an Elfsight embed with persistent profile links. Reduced motion disables local smooth scrolling and transitions.

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

The Nasi Bakar and Kopi Rempah photographs and official gunungan were extracted from the supplied menu. The new wayang artwork is generated decorative illustration, not an official logo or historical character identification. The old mural remains an archived asset and is no longer rendered. Font license files are in `public/fonts`. See [asset notes](docs/design/README.md).

Hero uses decorative wayang art. Suasana displays four original user-supplied venue photos in one fixed-ratio carousel: indoor seating and views of the surrounding fields. It supports native touch swipes, previous/next buttons, photo indicators, and keyboard navigation, with no autoplay. Additional photos load when selected; loading/error feedback keeps the controls available. A link to more venue images on Instagram remains below the copy.

The social section now uses the user-provided Elfsight widget `f1b94c89-8127-4922-8666-ab81c060cd92`, loaded by `src/components/social-feed.tsx`. The Instagram and TikTok links both point to `palereman.png`. Feed sources must be configured in the widget's Elfsight dashboard; the embed code does not set usernames or provide API credentials. The loader uses the original lazy embed attribute, with loading/failure/slow states and profile links that remain accessible. No Elfsight account credentials are needed in this repository.

The current cloud proxy denies the Elfsight loader. Actual provider output and account configuration remain unverified; fixture tests cover local recovery and integration behavior only. [Elfsight investigation](docs/elfsight-investigation.md) distinguishes observed results, architecture inferences, saved network requirements, and remaining live checks.

The previous three-video component, `src/lib/social-videos.ts`, and `/api/videos/[id]` remain as legacy code; the homepage no longer renders those cards. Their earlier [video integration checks](docs/video-integration-verification.md) are historical.

The visit section contains a lazy Google Maps iframe and an always-visible directions link. This cloud environment blocks Google Maps and anonymous Drive requests; those remote destinations need verification from a visitor's unrestricted browser. Link targets and new-tab behavior can be tested locally without claiming the remote content is accessible.

## Review

Current website screenshots: [desktop](docs/screenshots/palereman-remake-desktop.webp), [mobile](docs/screenshots/palereman-remake-mobile.webp). These are browser captures of the implementation. [Remake verification](docs/remake-verification.md) records executed checks and remaining media limitations. Earlier screenshots and verification notes are retained as history.

The navbar and footer use a transparent 1068 × 1472 restoration of the gunungan from the Suasana section, without a background panel. Updated Retina navbar captures: [desktop](docs/screenshots/palereman-logo-desktop.png), [mobile](docs/screenshots/palereman-logo-mobile.png). The original asset is preserved; `src/app/icon.tsx` renders the 64 × 64 PNG tab icon from it at build time.
