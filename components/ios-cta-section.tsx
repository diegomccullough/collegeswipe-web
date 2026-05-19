"use client"

export function IosCTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #6B7EC4 0%, #764BA2 50%, #E96D8D 100%)",
        padding: "80px 24px",
      }}
    >
      {/* Noise texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
        }}
      />
      {/* Top edge shine */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)" }} />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(255,255,255,0.65)", fontWeight: 600, marginBottom: 16 }}>
          iOS App
        </p>
        <h2
          className="font-serif"
          style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 900, color: "#fff", letterSpacing: "-2px", lineHeight: 1.05, marginBottom: 32 }}
        >
          Available now on iOS
        </h2>
        <a
          href="https://apps.apple.com/app/id6756989742"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 transition-all duration-200"
          style={{
            padding: "16px 32px",
            borderRadius: 16,
            fontSize: 16,
            fontWeight: 700,
            color: "#764BA2",
            background: "#fff",
            textDecoration: "none",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            letterSpacing: "-0.2px",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = "translateY(-2px)"
            el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.28)"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = "translateY(0)"
            el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)"
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download on the App Store
        </a>
        <p style={{ marginTop: 16, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
          Free · No credit card required
        </p>
      </div>
    </section>
  )
}
