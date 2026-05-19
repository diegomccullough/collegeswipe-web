"use client"

import { useState, useEffect, useRef } from "react"
import { UserCircle, Layers, ListChecks } from "lucide-react"

const services = [
  {
    icon: UserCircle,
    title: "Tell us about you",
    description: "Enter your major, GPA, and location. Takes under 2 minutes and we never share your data.",
  },
  {
    icon: Layers,
    title: "Swipe your matches",
    description: "Swipe right to save, left to pass. Every card is personalized to your exact academic profile.",
  },
  {
    icon: ListChecks,
    title: "Build your perfect list",
    description: "Compare saved schools side-by-side, track every deadline, and share with counselors.",
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="py-16 px-6 relative overflow-hidden">
      {/* Large background text — barely perceptible */}
      <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none z-0">
        <span
          className="font-bold text-center text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] leading-none tracking-tighter whitespace-nowrap select-none"
          style={{ color: "rgba(107,159,255,0.03)" }}
        >
          MISSION
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Mission card — tighter margins */}
        <div
          ref={sectionRef}
          className="relative px-6 lg:px-16 py-12 lg:py-16 mb-16 overflow-hidden rounded-3xl"
          style={{
            background: "linear-gradient(135deg, #0d1530 0%, #1a0d30 50%, #2a0d20 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Glows */}
          <div style={{ position: "absolute", top: "-20%", left: "0%", width: "50%", height: "100%", borderRadius: "50%", background: "radial-gradient(circle, rgba(107,159,255,0.1) 0%, transparent 70%)", filter: "blur(48px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "0%", right: "0%", width: "50%", height: "100%", borderRadius: "50%", background: "radial-gradient(circle, rgba(233,109,141,0.08) 0%, transparent 70%)", filter: "blur(48px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(107,159,255,0.3), rgba(168,85,247,0.3), transparent)" }} />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-1 lg:order-2">
              <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(107,159,255,0.7)", fontWeight: 600, marginBottom: 16 }}>
                Our mission
              </p>
              <h2 style={{ fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 800, color: "#fff", letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 24 }}>
                Better tools for every student.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, fontSize: 15 }}>
                <p>
                  At CollegeSwipe, we believe every student — regardless of zip code or family income — deserves clarity on where they stand and confidence in where they&apos;re applying.
                </p>
                <p>
                  We cut through the noise with a swipe interface that brings the best of consumer apps to a process that has been stuck in 1995.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="text-center mb-16">
          <h2 style={{ fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 800, color: "#fff", letterSpacing: "-1.2px", marginBottom: 12 }}>
            How it works
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", maxWidth: 480, margin: "0 auto", lineHeight: 1.65, fontSize: 16 }}>
            Three steps to your perfect college list.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.05)", borderRadius: 20, overflow: "hidden" }}>
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-10 transition-colors duration-300"
                style={{ background: "#02040A" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#0B1020" }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#02040A" }}
              >
                <div className="mb-6">
                  <Icon size={48} color="#6B9FFF" strokeWidth={1.5} />
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 8 }}>
                  Step 0{index + 1}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: "-0.4px", marginBottom: 10 }}>
                  {service.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.42)", lineHeight: 1.7, fontSize: 14 }}>
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
