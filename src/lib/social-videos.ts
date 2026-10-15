export type SocialVideo = {
  id: string;
  platform: "Instagram" | "TikTok";
  title: string;
  url: string;
  cover: string;
};

// Add only owner-approved post URLs and locally licensed cover images.
export const socialVideos: SocialVideo[] = [];

export function embedUrl(video: SocialVideo) {
  if (video.platform === "Instagram") {
    const match = video.url.match(/^https:\/\/(?:www\.)?instagram\.com\/(reel|p)\/([A-Za-z0-9_-]+)\/?/);
    return match ? `https://www.instagram.com/${match[1]}/${match[2]}/embed` : null;
  }
  const match = video.url.match(/^https:\/\/(?:www\.)?tiktok\.com\/@[^/]+\/video\/(\d+)\/?/);
  return match ? `https://www.tiktok.com/embed/v2/${match[1]}` : null;
}
