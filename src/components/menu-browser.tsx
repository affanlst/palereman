"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { categories, formatRupiah, menuItems } from "@/lib/menu";

export function MenuBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");
  const [temperature, setTemperature] = useState("Semua suhu");
  const filtered = useMemo(() => menuItems.filter((item) =>
    (category === "Semua" || item.category === category) &&
    (temperature === "Semua suhu" || item.variants.some((variant) => variant.label === temperature)) &&
    item.name.toLocaleLowerCase("id-ID").includes(query.trim().toLocaleLowerCase("id-ID"))
  ), [query, category, temperature]);

  return (
    <div>
      <div className="menu-tools">
        <div className="menu-inputs"><label className="search-field"><span>Cari menu</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari nama makanan atau minuman" /></label><label className="temperature-field"><span>Sajian</span><select value={temperature} onChange={(event) => setTemperature(event.target.value)}><option>Semua suhu</option><option>Panas</option><option>Dingin</option></select></label></div>
        <div className="category-group" role="group" aria-label="Filter kategori">
          {categories.map((entry) => <button key={entry} type="button" className={entry === category ? "category active" : "category"} aria-pressed={entry === category} onClick={() => setCategory(entry)}>{entry}</button>)}
        </div>
      </div>
      <div className="result-count" aria-live="polite">{filtered.length} pilihan ditampilkan</div>
      {filtered.length ? (
        <div className="menu-list">
          {filtered.map((item) => (
            <article className="menu-row" key={item.id}>
              {item.image && <div className="menu-row-image"><Image src={item.image} alt={item.name} width={108} height={108} /></div>}
              <div className="menu-row-main"><span className="item-category">{item.group || item.category}</span><h2>{item.name}</h2>{item.description && <p className="menu-description">{item.description}</p>}</div>
              <div className="menu-row-end">{item.variants.filter((variant) => temperature === "Semua suhu" || variant.label === temperature).map((variant) => <div className="menu-price" key={variant.label || "single"}><span>{variant.label}</span><strong>{formatRupiah(variant.priceIDR)}</strong></div>)}<small>Sumber: halaman {item.sourcePage}</small></div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-result"><h2>Belum ada yang cocok.</h2><p>Coba kata lain atau tampilkan semua kategori.</p><button type="button" className="button button-gold" onClick={() => { setQuery(""); setCategory("Semua"); setTemperature("Semua suhu"); }}>Hapus filter</button></div>
      )}
    </div>
  );
}
