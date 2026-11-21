import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", background: "#f6efe1" }}>
      <div style={{ display: "flex", width: 96, height: 96, borderRadius: "50%", background: "#d9452b", boxShadow: "0 0 0 14px rgba(217, 69, 43, 0.22)" }} />
    </div>,
    size,
  );
}
