export type SocialVideo = {
  id: string;
  platform: "Instagram" | "TikTok";
  title: string;
  url: string;
  cover?: string;
};

export const socialVideos: SocialVideo[] = [
  { id: "tiktok-01", platform: "TikTok", title: "Video pilihan 01", url: "https://vt.tiktok.com/ZSg8Rnhj3/" },
  { id: "tiktok-02", platform: "TikTok", title: "Video pilihan 02", url: "https://vt.tiktok.com/ZSg88xVLX/" },
  { id: "instagram-01", platform: "Instagram", title: "Reel Palereman", url: "https://www.instagram.com/reel/DeVtcAhTdTY/" },
];

export function embedUrl(video: SocialVideo) {
  if (video.platform === "Instagram") {
    const match = video.url.match(/^https:\/\/(?:www\.)?instagram\.com\/(reel|p)\/([A-Za-z0-9_-]+)\/?/);
    return match ? `https://www.instagram.com/${match[1]}/${match[2]}/embed` : null;
  }
  const match = video.url.match(/^https:\/\/(?:www\.)?tiktok\.com\/@[^/]+\/video\/(\d+)\/?/);
  return match ? `https://www.tiktok.com/embed/v2/${match[1]}` : null;
}
