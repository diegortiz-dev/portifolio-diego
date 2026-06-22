import { ImageResponse } from "next/og"

export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#0A0E1A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          fontFamily: "monospace",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "#60A5FA" }}>&lt;</span>
        <span style={{ color: "#fff" }}>O</span>
        <span style={{ color: "#60A5FA" }}>/&gt;</span>
      </div>
    ),
    {
      ...size,
    }
  )
}
