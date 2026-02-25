import { ImageResponse } from "next/og"

export const alt = "Diego Ortiz - Desenvolvedor Full Stack"
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
          background: "linear-gradient(135deg, #09090B 0%, #18181B 50%, #09090B 100%)",
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
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(34, 197, 94, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            fontSize: 80,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          <span style={{ color: "#22C55E" }}>&lt;</span>
          <span style={{ color: "#fff" }}>Ortiz</span>
          <span style={{ color: "#22C55E" }}>/&gt;</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 48,
            fontWeight: "bold",
            color: "#fff",
            marginBottom: 16,
          }}
        >
          Diego Ortiz
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#A1A1AA",
            marginBottom: 40,
          }}
        >
          Desenvolvedor Full Stack
        </div>

        {/* Tech stack */}
        <div
          style={{
            display: "flex",
            gap: 16,
          }}
        >
          {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
            <div
              key={tech}
              style={{
                background: "rgba(34, 197, 94, 0.1)",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                borderRadius: 9999,
                padding: "12px 24px",
                fontSize: 20,
                color: "#22C55E",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Website URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 24,
            color: "#71717A",
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
