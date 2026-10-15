export type MenuVariant = { label: string; priceIDR: number };
export type MenuItem = {
  id: string;
  name: string;
  category: string;
  variants: MenuVariant[];
  sourcePage: number;
  description?: string;
  group?: string;
  image?: string;
};

// Each line is id | name | category | price(s) | PDF page. P and D follow the
// PDF's Panas and Dingin columns. The duplicate Nasi Putih entry appears once.
const rows = `
kopi-cangkir|Kopi Cangkir|Kopi Palereman|P:4000|2
kopi-gelas|Kopi Gelas|Kopi Palereman|P:5000,D:7000|2
kopi-susu-cangkir|Kopi Susu Cangkir|Kopi Palereman|P:5000|2
kopi-susu-gelas|Kopi Susu Gelas|Kopi Palereman|P:6000,D:8000|2
kopi-jahe|Kopi Jahe|Kopi Palereman|P:6000|2
kopi-jahe-susu|Kopi Jahe Susu|Kopi Palereman|P:8000|2
kopi-cokelat|Kopi Cokelat|Kopi Palereman|P:8000,D:10000|2
kopi-rempah|Kopi Rempah|Kopi Palereman|P:10000|2
kopi-susu-cokelat|Kopi Susu Cokelat|Kopi Palereman|P:11000,D:12000|2
degan-original|Degan Original|Es Degan Jamtrok|14000|3
degan-gula-putih|Degan Gula Putih|Es Degan Jamtrok|17000|3
degan-gula-aren|Degan Gula Aren Murni|Es Degan Jamtrok|18000|3
degan-spesial|Degan Spesial|Es Degan Jamtrok|23000|3
es-susu-tape|Es Susu Tape|Unjukan|10000|4
es-sultan-ndan|Es Sultan Ndan|Unjukan|13000|4
es-keluarga-cemara|Es Keluarga Cemara|Unjukan|13000|4
es-dawet|Es Dawet|Unjukan|10000|4
wedang-rempah|Wedang Rempah|Unjukan|10000|4
teh|Teh|Unjukan|P:5000,D:6000|5
teh-tubruk|Teh Tubruk|Unjukan|P:5000,D:5000|5
teh-susu|Teh Susu|Unjukan|P:7000,D:8000|5
teh-lemon|Teh Lemon|Unjukan|P:7000,D:8000|5
teh-jahe|Teh Jahe|Unjukan|P:6000,D:7000|5
kampul|Kampul|Unjukan|P:7000,D:8000|5
jeruk|Jeruk|Unjukan|P:6000,D:7000|5
cao|Cao|Unjukan|D:7000|5
susu-tape-spesial|Susu Tape Spesial|Unjukan|P:7000,D:8000|5
susu-jahe|Susu Jahe|Unjukan|P:7000,D:8000|5
soda-gembira|Soda Gembira|Unjukan|D:12000|5
jus-jeruk|Jus Jeruk|Unjukan|D:10000|5
jus-jambu|Jus Jambu|Unjukan|D:10000|5
jus-alpukat|Jus Alpukat|Unjukan|D:10000|5
sachet|Sachet|Unjukan|P:6000,D:7000|5
jahe|Jahe|Unjukan|P:6000|5
asem|Asem|Unjukan|P:6000|5
tomat|Tomat|Unjukan|P:6000|5
tape|Tape|Unjukan|P:6000,D:7000|5
beras-kencur|Beras Kencur|Unjukan|D:7000|5
parem|Parem (Kunir Asem)|Unjukan|D:7000|5
air-mineral|Air Mineral|Unjukan|P:5000,D:6000|5
mie-gacor-palereman|Mie Gacor Palereman|Makanan|10000|6
nasi-bakar-palereman|Nasi Bakar Palereman|Makanan|10000|6
tahu-campur-palereman|Tahu Campur Palereman|Makanan|17000|6
gado-gado-palereman|Gado Gado Palereman|Makanan|13000|6
tahu-tek-palereman|Tahu Tek Palereman|Makanan|15000|6
lele-lalapan|Lele Lalapan|Makanan|15000|7
telur-kriwil|Telur Kriwil|Makanan|15000|7
ayam-goreng-kremes|Ayam Goreng Kremes|Makanan|18000|8
ayam-bakar|Ayam Bakar|Makanan|20000|8
nasi-kebuli-ayam-goreng|Nasi Kebuli Ayam Goreng|Makanan|26000|8
nasi-kebuli-ayam-bakar|Nasi Kebuli Ayam Bakar|Makanan|28000|8
mie-goreng|Mie Goreng|Mie|10000|9
mie-goreng-telur|Mie Goreng Telur|Mie|14000|9
mie-nyemek-telur|Mie Nyemek Telur|Mie|14000|9
mie-kuah|Mie Kuah|Mie|10000|9
mie-kuah-telur|Mie Kuah Telur|Mie|14000|9
tempe-tahu|Tempe/Tahu|Tambahan|2000|9
nasi-putih|Nasi Putih|Tambahan|4000|9
sambal-lalapan|Sambal + Lalapan|Tambahan|5000|9
rempela-ati|Rempela Ati|Tambahan|7000|9
ceker-kepala|Ceker 2 + Kepala 1|Tambahan|8000|9
telur-dadar-ceplok|Telur (Dadar/Ceplok)|Tambahan|4000|9
kerupuk-peyek-brangkal|Kerupuk/Peyek/Brangkal|Tambahan|2000|9
pisang-cokelat|Pisang Cokelat (4 pcs)|Nyamikan / Camilan|10000|10
kentang-goreng|Kentang Goreng|Nyamikan / Camilan|10000|10
tempe-mendoan|Tempe Mendoan (5 pcs)|Nyamikan / Camilan|10000|10
pisang-goreng|Pisang Goreng (5 pcs)|Nyamikan / Camilan|10000|10
pentol-corah|Pentol Corah|Nyamikan / Camilan|10000|10
pentol-corah-mix|Pentol Corah mix otak-otak|Nyamikan / Camilan|10000|11
risol-mayo|Risol Mayo|Nyamikan / Camilan|12000|11
tahu-bakso|Tahu Bakso|Nyamikan / Camilan|10000|11
mix-platter|Mix Platter|Nyamikan / Camilan|15000|11
otak-otak|Otak-otak|Nyamikan / Camilan|10000|11
gorengan|Gorengan|Bakaran|2000|12
polo-pendem|Polo Pendem|Bakaran|2000|12
tempura|Tempura|Bakaran|3000|12
sundukan-bacem|Sundukan Bacem|Bakaran|4000|12
bumbu-bakar|Bumbu Bakar (5 pcs)|Bakaran|1000|12
`.trim();

const details: Record<string, Pick<MenuItem, "description" | "group" | "image">> = {
  "kopi-rempah": { description: "Kopi, jahe, kapulaga, bunga lawang, sereh, kayu manis", image: "/images/kopi-rempah.png" },
  "degan-spesial": { description: "Degan, alpukat, nata de coco, susu, selasih" },
  "es-sultan-ndan": { description: "Susu, gula pandan, alpukat, janggelan, tape ketan hijau" },
  "es-keluarga-cemara": { description: "Susu, gula, alpukat, janggelan, tape ketan hitam", image: "/images/es-keluarga-cemara.png" },
  "es-dawet": { description: "Santan, gula merah, cendol" },
  "wedang-rempah": { description: "Jahe, sereh, kayu manis, cengkeh, jeruk nipis, bunga lawang" },
  "sachet": { description: "Pilihan pada PDF: Beng Beng Drink, Chocolatos Coklat/Matcha, Milo, Good Day Cappuccino, Nutrisari, Extrajoss, Kukubima" },
  "nasi-bakar-palereman": { image: "/images/nasi-bakar-palereman.png" },
  "tahu-campur-palereman": { description: "Tahu, kikil, selada, toge, lontong, lentho, kuah petis" },
  "gado-gado-palereman": { description: "Selada, kentang, wortel, toge, mentimun, lontong, tahu, tempe, telur rebus, bumbu kacang" },
  "tahu-tek-palereman": { description: "Tahu telur, lontong, kentang, toge, mentimun, bumbu kacang" },
  "lele-lalapan": { description: "Lele, lalapan, nasi, sambal terasi" },
  "telur-kriwil": { description: "Telur, lalapan, nasi, sambal terasi" },
  "ayam-goreng-kremes": { description: "Ayam goreng, lalapan, nasi, sambal terasi" },
  "ayam-bakar": { description: "Ayam bakar, lalapan, nasi, sambal terasi" },
  "nasi-kebuli-ayam-goreng": { description: "Nasi kebuli, ayam goreng, acar, sambal" },
  "nasi-kebuli-ayam-bakar": { description: "Nasi kebuli, ayam bakar, acar, sambal" },
  "mix-platter": { image: "/images/mix-platter.png" },
};

export const menuItems: MenuItem[] = rows.split("\n").map((row) => {
  const [id, name, category, prices, page] = row.split("|");
  const variants = prices.split(",").map((value) => {
    const [key, price] = value.includes(":") ? value.split(":") : ["", value];
    return { label: key === "P" ? "Panas" : key === "D" ? "Dingin" : "", priceIDR: Number(price) };
  });
  return { id, name, category, variants, sourcePage: Number(page), ...details[id], ...(Number(page) === 4 ? { group: "Unjukan Best Seller" } : {}) };
});

export const categories = ["Semua", "Kopi Palereman", "Es Degan Jamtrok", "Unjukan", "Makanan", "Mie", "Nyamikan / Camilan", "Bakaran", "Tambahan"];

export function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
}
