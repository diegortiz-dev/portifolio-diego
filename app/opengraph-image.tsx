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
          background: "linear-gradient(135deg, #08080C 0%, #13131C 50%, #08080C 100%)",
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
        {/* Aurora glows */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "10%",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(167, 139, 250, 0.35), transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "10%",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(96, 165, 250, 0.3), transparent 60%)",
            filter: "blur(80px)",
          }}
        />

        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(167, 139, 250, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(167, 139, 250, 0.04) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 700,
            marginBottom: 24,
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#A78BFA" }}>&lt;</span>
          <span style={{ color: "#F5F5FA" }}>Ortiz</span>
          <span style={{ color: "#60A5FA" }}>/&gt;</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            background: "linear-gradient(135deg, #C4B5FD, #A78BFA, #60A5FA)",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-0.04em",
            marginBottom: 16,
            lineHeight: 1,
          }}
        >
          Diego Ortiz
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 30,
            color: "#B4B4C4",
            marginBottom: 50,
          }}
        >
          Desenvolvedor Backend & Full Stack
        </div>

        {/* Tech stack */}
        <div
          style={{
            display: "flex",
            gap: 14,
          }}
        >
          {["Node.js", "Python", "TypeScript", "Next.js"].map((tech) => (
            <div
              key={tech}
              style={{
                background: "rgba(167, 139, 250, 0.1)",
                border: "1px solid rgba(167, 139, 250, 0.3)",
                borderRadius: 9999,
                padding: "10px 22px",
                fontSize: 22,
                color: "#C4B5FD",
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
            fontSize: 22,
            color: "#7A7A8C",
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
