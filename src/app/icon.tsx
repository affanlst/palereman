import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default async function Icon() {
  const logo = await readFile(join(process.cwd(), "public/images/gunungan-palereman-transparent.png"));

  return new ImageResponse(
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#142e27" }}>
       <img src={`data:image/png;base64,${logo.toString("base64")}`} alt="" width={70} height={96} />
    </div>,
    size,
  );
}
