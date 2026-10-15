import { socialVideos, embedUrl } from "@/lib/social-videos";
import { resolveTikTok } from "@/lib/resolve-tiktok";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const video = socialVideos.find((item) => item.id === id);
  if (!video) return Response.json({ error: "Video tidak ditemukan." }, { status: 404 });

  try {
    const src = embedUrl(video) ?? (video.platform === "TikTok" ? await resolveTikTok(video.url) : null);
    if (!src) throw new Error("No player URL");
    return Response.json({ src }, { headers: { "Cache-Control": "public, max-age=3600" } });
  } catch {
    return Response.json({ error: "Pemutar belum dapat dibuka. Tonton melalui tautan sumber." }, { status: 502, headers: { "Cache-Control": "no-store" } });
  }
}
