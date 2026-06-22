import { ImageResponse } from "next/og"

export const alt = "Diego Ortiz — Desenvolvedor Backend & Full Stack"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0A0E1A 0%, #0F1524 50%, #131B2E 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 400,
            background: "radial-gradient(ellipse, rgba(59, 130, 246, 0.2), transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            marginBottom: 28,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#60A5FA" }}>&lt;</span>
          <span style={{ color: "#F8FAFC" }}>Ortiz</span>
          <span style={{ color: "#60A5FA" }}>/&gt;</span>
        </div>

        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "#F8FAFC",
            letterSpacing: "-0.04em",
            marginBottom: 12,
            lineHeight: 1,
          }}
        >
          Diego Ortiz
        </div>

        <div
          style={{
            fontSize: 30,
            background: "linear-gradient(135deg, #60A5FA, #3B82F6)",
            backgroundClip: "text",
            color: "transparent",
            fontWeight: 600,
            marginBottom: 50,
          }}
        >
          Desenvolvedor Backend & Full Stack
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Node.js", "Python", "TypeScript", "Next.js"].map((tech) => (
            <div
              key={tech}
              style={{
                background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                color: "#fff",
                borderRadius: 9999,
                padding: "10px 22px",
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 22,
            color: "#64748B",
          }}
        >
          diegortiz.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
