# Palereman Coffee and View

Next.js 16 single page site based on the [revised PRD](docs/PRD-Palereman.md). The home page contains Tentang, Suasana, Menu, Video, and Kunjungi sections. Menu buttons open the [public Google Drive menu](https://drive.google.com/file/d/1L7ihFNGiLOhXX5wK7XbqEQ8DGiBHlEjS/view) in a new tab. The URL is configured once in `src/lib/profile.ts`. Old `/menu`, `/suasana`, and `/kunjungi` routes redirect to their respective home page sections.

The gunungan artwork and one food photo were extracted from the supplied Palereman menu. A newly generated ornamental wayang illustration decorates the hero; it is not an official Palereman character or historical depiction. Venue photos and selected official video URLs have not been supplied as files/links, so those sections display clearly labeled placeholders instead of invented media. The video component is ready for owner-approved Instagram Reel or TikTok post URLs in `src/lib/social-videos.ts`. An account profile URL alone cannot provide a reliable automatic video feed; that would require authorized platform APIs. The visit section includes an embedded Google Maps search and the user-supplied directions link as a fallback. Design research access limitations are recorded in [design-references.md](docs/design-references.md).

The address and Maps link came from the user's screenshot and link. The user confirmed the listed hours and phone/WhatsApp number. The Drive URL came from the user; direct anonymous access could not be checked from this environment because its outbound proxy denied the request.

Current full-page previews: [desktop](docs/screenshots/palereman-desktop.png) and [mobile](docs/screenshots/palereman-mobile.png). They show the venue and video placeholders awaiting original media. The map iframe could not load in this cloud environment's restricted browser; visitors can use the directions link below it.

## Develop

Node.js 20.9 or newer is required. Node.js 24 was used during development.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Check and run a production build

```sh
npm run lint
npm run typecheck
npm run build
npm run start
```

The production server runs on port 3000 by default. Set `PORT` to use a different port. For self hosting, run the production server behind an HTTPS reverse proxy and keep the Node.js process supervised.

## Before public launch

- Verify that the Google Drive menu opens without login on desktop and mobile.
- Add licensed, original photos of the venue to replace the visible placeholder. The photo sent in chat was not available as a project file.
- Add verified Instagram Reel and TikTok video URLs and locally usable cover images before claiming official videos or embedding players.
- Complete the Dribbble/Pinterest reference review when those sites can be accessed.
- Recheck the final images, links, keyboard access, and performance after media has been added.
