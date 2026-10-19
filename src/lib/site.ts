import { profile } from "@/lib/profile";

export const site = {
  url: "https://www.paleremancafe.web.id",
  name: "Palereman Coffee and View",
  title: "Palereman Coffee and View | Cafe Ponorogo",
  description:
    "Cafe bernuansa Jawa di Singosaren, Jenangan, Ponorogo. Nikmati kopi, Nasi Bakar, dan pemandangan sawah. Buka 08.00–20.00, Jumat tutup. Lihat menu dan lokasi.",
  image: "/images/suasana-palereman-view-sawah.jpg",
};

const weekdays: Record<string, string> = {
  Senin: "Monday", Selasa: "Tuesday", Rabu: "Wednesday", Kamis: "Thursday",
  Jumat: "Friday", Sabtu: "Saturday", Minggu: "Sunday",
};

export const businessStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CafeOrCoffeeShop",
      "@id": `${site.url}/#cafe`,
      name: site.name,
      url: `${site.url}/`,
      description: site.description,
      telephone: profile.phoneHref.replace("tel:", ""),
      address: {
        "@type": "PostalAddress",
        streetAddress: "Singosaren, Setono, Kecamatan Jenangan",
        addressLocality: "Ponorogo",
        addressRegion: "Jawa Timur",
        postalCode: "63492",
        addressCountry: "ID",
      },
      image: [site.image, "/images/suasana-palereman.jpg", "/images/suasana-palereman-pemandangan.jpg"].map(path => `${site.url}${path}`),
      logo: `${site.url}/images/gunungan-palereman-transparent.png`,
      hasMap: profile.mapsUrl,
      hasMenu: profile.menuDriveUrl,
      sameAs: [profile.instagramUrl, profile.tiktokUrl],
      openingHoursSpecification: profile.hours.map(({ day, time }) => {
        const [opens, closes] = time === "Tutup" ? ["00:00", "00:00"] : time.replaceAll(".", ":").split("–");
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: `https://schema.org/${weekdays[day]}`,
          opens, closes,
        };
      }),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      inLanguage: "id-ID",
      alternateName: ["Palereman", "Palereman Coffee & View"],
      publisher: { "@id": `${site.url}/#cafe` },
    },
  ],
};
