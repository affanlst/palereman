const allowedHosts = new Set(["tiktok.com", "www.tiktok.com", "vt.tiktok.com", "vm.tiktok.com", "m.tiktok.com"]);

function allowedUrl(url: URL) {
  return url.protocol === "https:" && allowedHosts.has(url.hostname) && !url.username && !url.password && (!url.port || url.port === "443");
}

export async function resolveTikTok(source: string, request: typeof fetch = fetch): Promise<string> {
  let url = new URL(source);
  const signal = AbortSignal.timeout(8000);

  for (let step = 0; step < 5; step++) {
    if (!allowedUrl(url)) throw new Error("Unsupported TikTok redirect");
    const id = url.pathname.match(/^\/@[^/]+\/video\/(\d+)\/?$/)?.[1];
    if (id) return `https://www.tiktok.com/embed/v2/${id}`;

    const response = await request(url, { redirect: "manual", signal, cache: "no-store" });
    const location = response.headers.get("location");
    await response.body?.cancel();
    if (response.status < 300 || response.status >= 400 || !location) throw new Error("TikTok redirect unavailable");
    url = new URL(location, url);
  }

  throw new Error("Too many TikTok redirects");
}
