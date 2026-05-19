"use client"

import { useState } from "react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className="text-[20vw] font-bold font-sans tracking-tighter leading-none whitespace-nowrap"
          style={{ color: "rgba(107,159,255,0.04)" }}
        >
          SWIPE
        </span>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Gradient card */}
        <div
          className="rounded-3xl overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, #6B7EC4, #764BA2 50%, #E96D8D)",
            padding: "72px 48px",
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
          {/* Top shine */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)" }} />

          <div className="relative text-center">
            <p
              style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.8px", color: "rgba(255,255,255,0.6)", fontWeight: 600, marginBottom: 16 }}
            >
              Get started free
            </p>
            <h2
              className="font-serif mb-4"
              style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 900, color: "#fff", letterSpacing: "-2px", lineHeight: 1.05 }}
            >
              Start swiping for free.
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", maxWidth: 400, margin: "0 auto 40px", lineHeight: 1.6 }}>
              Join students who&apos;ve already found their perfect college match.
            </p>

            {/* Email capture */}
            {submitted ? (
              <div
                className="inline-flex items-center gap-3 mb-8 px-6 py-4 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <span style={{ fontSize: 18 }}>🎉</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>You&apos;re on the waitlist!</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>We&apos;ll be in touch soon.</div>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex gap-2 max-w-md mx-auto mb-8 flex-wrap justify-center"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    minWidth: 200,
                    padding: "13px 16px",
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    color: "#fff",
                    fontSize: 14,
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "13px 20px",
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#764BA2",
                    background: "#fff",
                    border: "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    fontFamily: "inherit",
                    transition: "opacity 0.15s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "0.9"; el.style.transform = "translateY(-1px)" }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = "translateY(0)" }}
                >
                  Join Waitlist
                </button>
              </form>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="https://apps.apple.com/app/id6756989742"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-all duration-200"
                style={{
                  padding: "12px 20px",
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#fff",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.22)" }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
              </a>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
                Free · No credit card required
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
