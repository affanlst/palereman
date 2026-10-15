import type { ReactNode, SVGProps } from "react";

type IconName = "arrow" | "photo" | "video" | "pin" | "clock" | "phone" | "instagram" | "message";

const paths: Record<IconName, ReactNode> = {
  arrow: <path d="M7 17 17 7M7 7h10v10" />,
  photo: <><rect x="3" y="3" width="18" height="18" rx="1" /><circle cx="8" cy="8" r="1.5" /><path d="m3 17 5-5 4 4 3-3 6 6" /></>,
  video: <><rect x="3" y="5" width="13" height="14" rx="1" /><path d="m16 9 5-3v12l-5-3" /></>,
  pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" /></>,
  phone: <path d="m7 3 3 5-2.5 2.5a15 15 0 0 0 6 6L16 14l5 3-1 4C11 22 2 13 3 4l4-1Z" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  message: <><path d="M21 11.5a9 9 0 0 1-13.5 7.8L3 21l1.7-4.5A9 9 0 1 1 21 11.5Z" /><path d="m8 8 2 3 3 2 3-1" /></>,
};

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
