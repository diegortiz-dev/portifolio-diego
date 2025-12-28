import { ImageResponse } from "next/og"

export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: "#09090B",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          fontFamily: "monospace",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "#22C55E" }}>&lt;</span>
        <span style={{ color: "#fff" }}>O</span>
        <span style={{ color: "#22C55E" }}>/&gt;</span>
      </div>
    ),
    {
      ...size,
    }
  )
}
