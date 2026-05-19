"use client"
import { useEffect, useState } from "react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("stats-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [isVisible])

  const stats = [
    { value: "1,020+", label: "Colleges in database", gradient: "linear-gradient(135deg, #6B9FFF, #A855F7)" },
    { value: "10,000+", label: "Scholarships available", gradient: "linear-gradient(135deg, #F59E0B, #F43F5E)" },
    { value: "3 min", label: "Average setup time", gradient: "linear-gradient(135deg, #D8B4FE, #7DD3FC)" },
    { value: "$0", label: "Cost to start", gradient: "linear-gradient(135deg, #22C55E, #3B82F6)" },
  ]

  return (
    <section
      id="stats-section"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "#050810" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <p
                className="font-light mb-2 leading-none"
                style={{
                  fontSize: "clamp(40px, 6vw, 64px)",
                  background: stat.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 300,
                  letterSpacing: "-2px",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  fontWeight: 600,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
