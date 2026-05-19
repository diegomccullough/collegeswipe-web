"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "👆",
    title: "Swipe Deck",
    description:
      "A Tinder-style card interface for discovering colleges. Each card shows the school name, location, acceptance rate, average GPA, and your personalized match label (Reach, Target, or Safety).",
    gradient: "linear-gradient(135deg, #F59E0B, #F43F5E)",
    badge: null,
  },
  {
    icon: "📊",
    title: "Admissions Chances Calculator",
    description:
      "Enter your GPA and test scores and instantly see a personalized probability for each school — visualized clearly so you understand where you stand.",
    gradient: "linear-gradient(135deg, #6B9FFF, #A855F7)",
    badge: null,
  },
  {
    icon: "⚖️",
    title: "Compare Mode",
    description:
      "Pick two or more saved schools and compare them side-by-side on acceptance rate, tuition, size, location, and more.",
    gradient: "linear-gradient(135deg, #D8B4FE, #7DD3FC)",
    badge: null,
  },
  {
    icon: "🔍",
    title: "Explore Lists",
    description:
      "Browse curated lists: Ivy League, HBCUs, Public Ivies, Best Value Schools, Top Engineering Programs, and more. Tap any card to swipe it into your deck.",
    gradient: "linear-gradient(135deg, #F472B6, #EF4444)",
    badge: null,
  },
  {
    icon: "💸",
    title: "ScholarshipSwipe",
    description:
      "Swipe through 10,000+ scholarships matched to your major, GPA, background, and location. Never miss a deadline again.",
    gradient: "linear-gradient(135deg, #A855F7, #7C3AED)",
    badge: "PREMIUM",
  },
  {
    icon: "👫",
    title: "Friend System",
    description:
      "See where your friends are applying and compare lists. Celebrate acceptances together.",
    gradient: "linear-gradient(135deg, #22C55E, #3B82F6)",
    badge: "COMING SOON",
  },
];

export default function FeaturesPage() {
  return (
    <div style={{ background: "#02040A", minHeight: "100vh" }}>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="mb-4 uppercase tracking-widest"
            style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.5px" }}
          >
            Full feature set
          </p>
          <h1
            className="mb-4"
            style={{
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-1.5px",
              lineHeight: 1.08,
            }}
          >
            Everything CollegeSwipe does
          </h1>
          <p
            className="mx-auto"
            style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", maxWidth: 480, lineHeight: 1.6 }}
          >
            Six powerful tools designed to simplify every step of the college search.
          </p>
        </motion.div>
      </section>

      {/* Feature grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl overflow-hidden"
              style={{ background: "#0B1020", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="h-1.5" style={{ background: f.gradient }} />
              <div className="p-7">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {f.icon}
                  </div>
                  {f.badge && (
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: f.badge === "PREMIUM"
                          ? "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(124,58,237,0.2))"
                          : "rgba(255,255,255,0.08)",
                        color: f.badge === "PREMIUM" ? "#A855F7" : "rgba(255,255,255,0.5)",
                        border: f.badge === "PREMIUM"
                          ? "1px solid rgba(168,85,247,0.3)"
                          : "1px solid rgba(255,255,255,0.12)",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {f.badge}
                    </span>
                  )}
                </div>
                <h3 className="mb-2" style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.58)", lineHeight: 1.65 }}>
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #6B7EC4, #764BA2, #E96D8D)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, color: "#fff", letterSpacing: "-1px" }}
          >
            Ready to start swiping?
          </h2>
          <p className="mb-8" style={{ fontSize: 17, color: "rgba(255,255,255,0.8)" }}>
            Download CollegeSwipe free on iOS.
          </p>
          <a
            href="https://apps.apple.com/app/id6756989742"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-bold transition-all duration-200"
            style={{ background: "#fff", color: "#764BA2", fontSize: 16 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on App Store
          </a>
        </motion.div>
      </section>
    </div>
  );
}
