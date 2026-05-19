"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

const featureCards = [
  {
    title: "Swipe to Discover",
    description: "Swipe right to save, left to pass. Every card shows acceptance rate, avg GPA, and your match score — personalized to your profile.",
    screenshot: "/images/screenshot-swipe.png",
    label: "Swipe",
    labelColor: "#F59E0B",
    glow: "drop-shadow(0 0 50px rgba(245,158,11,0.20))",
  },
  {
    title: "Your Matches",
    description: "See your Reach, Target, and Safety schools ranked by fit, with real admission chances calculated from your GPA and scores.",
    screenshot: "/images/screenshot-matches.png",
    label: "Matches",
    labelColor: "#22C55E",
    glow: "drop-shadow(0 0 50px rgba(168,85,247,0.20))",
  },
  {
    title: "Build Your List",
    description: "Lock in your final college list with avg GPA, tuition, and acceptance rates. Share your roster with parents and counselors.",
    screenshot: "/images/screenshot-list.png",
    label: "My List",
    labelColor: "#A855F7",
    glow: "drop-shadow(0 0 50px rgba(107,159,255,0.20))",
  },
]

const features = [
  "Personalized college matches",
  "Reach / Target / Safety labels",
  "10,000+ scholarships",
  "Side-by-side compare mode",
  "Deadline tracking",
  "Free to start",
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 px-6 relative overflow-hidden">
      {/* Background watermark text — Fix 4: z-0 so phones sit above it */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-center pointer-events-none" style={{ zIndex: 0 }}>
        <span
          className="font-bold text-center text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] leading-none tracking-tighter whitespace-nowrap select-none"
          style={{ color: "rgba(107,159,255,0.03)" }}
        >
          DISCOVER
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 10 }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="font-serif mb-4 text-balance"
            style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#fff", letterSpacing: "-1.5px", lineHeight: 1.08 }}
          >
            Discover your perfect college match.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.75, fontSize: 16, maxWidth: 480, margin: "0 auto" }}>
            Swipe through personalized college cards, track admissions chances, compare side-by-side, and manage every deadline — all in one app.
          </p>
        </motion.div>

        {/* Fix 4 + 7: Feature phones — 280px desktop, 260px mobile, per-card glow */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              {/* Fix 4: Phone container — w-[260px] mobile, w-[280px] desktop, colored glow */}
              <div
                className="relative w-[260px] md:w-[320px] mx-auto mb-8"
                style={{ filter: card.glow }}
              >
                {/* Screenshot fills phone body */}
                <div style={{ position: "absolute", inset: 0, zIndex: 5, overflow: "hidden", borderRadius: "13%" }}>
                  <img
                    src={card.screenshot}
                    alt={card.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  />
                </div>

                {/* Fix 4: Phone frame at z-10, screen blend punches through black */}
                <img
                  src="/images/iphone-frame.png"
                  alt=""
                  className="w-full h-auto relative"
                  style={{ zIndex: 10, mixBlendMode: "screen" }}
                />
              </div>

              {/* Label */}
              <span
                className="inline-block mb-3"
                style={{ padding: "3px 12px", borderRadius: 999, fontSize: 11, fontWeight: 700, color: card.labelColor, background: `${card.labelColor}14`, border: `1px solid ${card.labelColor}30` }}
              >
                {card.label}
              </span>

              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: "-0.4px", marginBottom: 8 }}>
                {card.title}
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 260 }}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature checklist */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-3 rounded-xl"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #6B9FFF, #A855F7)", boxShadow: "0 2px 8px rgba(107,159,255,0.3)" }}
              >
                <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}>{feature}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
