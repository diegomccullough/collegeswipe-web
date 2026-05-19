"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { AnimatedText } from "./animated-text"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let rafId: number
    let currentProgress = 0
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 400
      const targetProgress = Math.min(scrollY / maxScroll, 1)
      const smoothUpdate = () => {
        currentProgress += (targetProgress - currentProgress) * 0.1
        if (Math.abs(targetProgress - currentProgress) > 0.001) {
          setScrollProgress(currentProgress)
          rafId = requestAnimationFrame(smoothUpdate)
        } else {
          setScrollProgress(targetProgress)
        }
      }
      cancelAnimationFrame(rafId)
      smoothUpdate()
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const easeOutQuad = (t: number) => t * (2 - t)
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
  const scale = 1 - easeOutQuad(scrollProgress) * 0.15
  const brRadius = easeOutCubic(scrollProgress) * 48
  const heightVh = 100 - easeOutQuad(scrollProgress) * 37.5

  return (
    // Fix 1: overflow visible so phone can bleed outside section
    <section
      className="relative min-h-screen flex items-center px-6"
      style={{ paddingTop: 80, paddingBottom: 60, overflow: "visible" }}
    >
      {/* Animated dark background — clipped to its own div */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: -1 }}>
        <div
          className="w-full will-change-transform overflow-hidden"
          style={{
            transform: `scale(${scale})`,
            borderRadius: `${brRadius}px`,
            height: `${heightVh}vh`,
            position: "relative",
            background: "#02040A",
          }}
        >
          <div style={{ position: "absolute", top: "10%", right: "-5%", width: "60%", height: "80%", borderRadius: "50%", background: "radial-gradient(circle, rgba(107,159,255,0.12) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "20%", left: "-5%", width: "50%", height: "70%", borderRadius: "50%", background: "radial-gradient(circle, rgba(118,75,162,0.18) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "0%", left: "30%", width: "40%", height: "40%", borderRadius: "50%", background: "radial-gradient(circle, rgba(233,109,141,0.08) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "72px 72px", pointerEvents: "none", maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)" }} />
        </div>
      </div>

      {/* Fix 2: Depth radial glows */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, background: "radial-gradient(ellipse 70% 80% at 85% 50%, rgba(107,159,255,0.10) 0%, transparent 65%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, background: "radial-gradient(ellipse 50% 60% at 15% 60%, rgba(118,75,162,0.12) 0%, transparent 60%)" }} />

      {/* Background COLLEGESWIPE parallax text */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none flex items-end justify-center"
        style={{ transform: `translateY(${scrollProgress * 150}px)`, opacity: 1 - scrollProgress * 0.8, height: "100%", zIndex: 1 }}
      >
        <span className="block font-bold text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] tracking-tighter select-none text-center leading-none" style={{ color: "#6B9FFF", opacity: 0.03 }}>
          COLLEGESWIPE
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative" style={{ zIndex: 10 }}>
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* LEFT: headline + CTAs */}
          <div className="flex flex-col justify-center">

            {/* Fix 8: Social proof pill — green pulse dot, glass, no emoji */}
            <div className={`mb-6 transition-all duration-700 delay-[300ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}>
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                <span
                  className="animate-pulse rounded-full flex-shrink-0"
                  style={{ width: 8, height: 8, background: "#22C55E", display: "inline-block" }}
                />
                <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.7)", letterSpacing: "-0.1px" }}>
                  150+ students already matched
                </span>
              </div>
            </div>

            {/* Fix 3 + 7: Headline — clamp size, gradient on "colleges that fit you." */}
            <div className={`transition-all duration-1000 delay-[700ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
              <h1
                className="font-serif font-black leading-tight mb-6"
                style={{ fontSize: "clamp(42px, 7vw, 88px)", letterSpacing: "-1.5px", color: "#fff" }}
              >
                <AnimatedText text="Swipe through " delay={0.3} />
                <motion.span
                  initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.86, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{
                    background: "linear-gradient(135deg, #6B9FFF, #E96D8D)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline",
                  }}
                >
                  colleges that fit you.
                </motion.span>
              </h1>
            </div>

            <div className={`transition-all duration-700 delay-[1200ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <p className="mb-6" style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", maxWidth: 460, lineHeight: 1.65, letterSpacing: "-0.2px" }}>
                See your reach, target, and safety schools instantly. Free on iOS for high school students.
              </p>
              <div className="flex items-center gap-2 mb-8 flex-wrap">
                {[
                  { label: "Safety", color: "#22C55E" },
                  { label: "Target", color: "#3B82F6" },
                  { label: "Reach", color: "#EF4444" },
                ].map((p) => (
                  <span key={p.label} style={{ padding: "4px 14px", borderRadius: 999, fontSize: 12, fontWeight: 700, color: p.color, background: `${p.color}14`, border: `1px solid ${p.color}30`, letterSpacing: "0.2px" }}>
                    {p.label}
                  </span>
                ))}
              </div>
            </div>

            <div className={`flex flex-col sm:flex-row items-start gap-3 transition-all duration-700 delay-[1400ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <a
                href="https://apps.apple.com/app/id6756989742"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-all duration-200"
                style={{ padding: "14px 24px", borderRadius: 14, fontSize: 15, fontWeight: 600, color: "#fff", background: "linear-gradient(135deg, #6B9FFF, #4A90E2)", boxShadow: "0 0 0 1px rgba(107,159,255,0.3), 0 4px 24px rgba(107,159,255,0.3)", textDecoration: "none", letterSpacing: "-0.1px" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0 0 0 1px rgba(107,159,255,0.5), 0 8px 32px rgba(107,159,255,0.45)"; el.style.transform = "translateY(-1px)" }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = "0 0 0 1px rgba(107,159,255,0.3), 0 4px 24px rgba(107,159,255,0.3)"; el.style.transform = "translateY(0)" }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
              </a>

              {/* Fix 6: Glass "Get Early Access" button */}
              <button
                className="flex items-center gap-2 transition-all duration-200"
                style={{ padding: "14px 22px", borderRadius: 14, fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.8)", background: "transparent", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)", cursor: "pointer", letterSpacing: "-0.1px" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.4)"; el.style.background = "rgba(255,255,255,0.05)" }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.2)"; el.style.background = "transparent" }}
              >
                Get Early Access →
              </button>
            </div>
          </div>

          {/* Fix 1 + 7: RIGHT — phone 300px mobile / 380px desktop, overflow visible, Apple-style bleed */}
          <div className="flex justify-center lg:justify-end items-center" style={{ overflow: "visible" }}>
            <div
              className={`relative w-[300px] lg:w-[380px] will-change-transform transition-all duration-[1500ms] ease-out delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"}`}
              style={{
                marginTop: "-48px",
                marginBottom: "-48px",
                filter: "drop-shadow(0 0 80px rgba(107,159,255,0.25))",
              }}
            >
              {/* Purple glow behind phone */}
              <div style={{ position: "absolute", inset: "-50px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(118,75,162,0.45) 0%, transparent 65%)", filter: "blur(40px)", zIndex: 0, pointerEvents: "none" }} />

              {/* Screenshot — fills phone body, sits below frame */}
              <div style={{ position: "absolute", inset: 0, zIndex: 5, overflow: "hidden", borderRadius: "13%" }}>
                <img
                  src="/images/screenshot-swipe.png"
                  alt="CollegeSwipe App"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
              </div>

              {/* Phone frame — screen blend makes black transparent, bezels stay */}
              <img
                src="/images/iphone-frame.png"
                alt="iPhone"
                className="w-full h-auto relative z-10"
                style={{ mixBlendMode: "screen" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
