import { ImageResponse } from "next/og";

export const alt = "Quyen Nguyen — Helping people make clearer choices. Research, strategy, and product.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 64, background: "#f5f0e6", color: "#242721", border: "16px solid #242721" }}>
      <div style={{ display: "flex", fontSize: 28, textTransform: "uppercase", letterSpacing: 3 }}>Quyen Nguyen · Portfolio</div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 82, fontWeight: 700, lineHeight: 1.08 }}>
        <span>Helping people make</span>
        <span style={{ color: "#a33724" }}>clearer choices.</span>
      </div>
      <div style={{ display: "flex", fontSize: 28 }}>Research · Strategy · Product · Small experiments</div>
    </div>,
    size,
  );
}
