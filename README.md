# Palereman Coffee and View

Next.js site draft based on [the supplied PRD](docs/PRD-Palereman.md) (15 October 2026). The site has a home page, a searchable menu, a gallery placeholder, and a visit page.

The compressed 12-page menu PDF is available for download on the menu page. Its item names, price columns, and selected images are included in the site. The gunungan logo was extracted from that PDF. The address and map link came from a Google Maps screenshot and link supplied by the user; the user confirmed the listed hours and phone/WhatsApp number. Current menu prices and venue photos still need confirmation or source files before launch. Placeholders on the site identify missing venue photos.

The [desktop and mobile screenshots](docs/Palereman-screenshots-desktop-mobile.pdf) show the current site, including its venue photo placeholders.

## Develop

Node.js 20.9 or newer is required. Node.js 24 was used during development.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. The menu is defined in `src/lib/menu.ts`.

## Check and run a production build

```sh
npm run lint
npm run typecheck
npm run build
npm run start
```

The production server runs on port 3000 by default. Set `PORT` to use a different port. For self hosting, run the production server behind an HTTPS reverse proxy and keep the Node.js process supervised.

## Content completion

1. Confirm current prices with the venue. The menu data in `src/lib/menu.ts` follows the supplied PDF, including the hot and cold columns. `Nasi Putih` appears twice in the PDF and once on the site.
2. If a higher-resolution master logo is available, replace the PDF extraction while preserving its proportions and colors.
3. Add licensed, verified photos of the actual venue. Replace the visible photo placeholders. Selected menu photos were extracted from the PDF at their original, modest resolution.
4. Recheck the map destination and Instagram account before launch. The cloud environment could not open the supplied short Google Maps URL, though the user supplied a screenshot of its details.
5. Recheck mobile layout, keyboard access, links, metadata, and performance with the final media.
