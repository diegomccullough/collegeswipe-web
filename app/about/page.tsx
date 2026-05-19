"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div style={{ background: "#02040A", minHeight: "100vh" }}>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none opacity-15"
          style={{ background: "linear-gradient(135deg, #764BA2, #6B9FFF)" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <p
            className="mb-4 uppercase tracking-widest"
            style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.5px" }}
          >
            Our story
          </p>
          <h1
            className="mb-5"
            style={{
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-1.5px",
              lineHeight: 1.08,
              maxWidth: 640,
              margin: "0 auto 20px",
            }}
          >
            Built for students who deserve better tools.
          </h1>
          <p
            className="mx-auto"
            style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", maxWidth: 560, lineHeight: 1.7 }}
          >
            CollegeSwipe was born from a simple frustration: the college search process is broken,
            overwhelming, and favors students who can afford expensive counselors.
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6" style={{ background: "#0B1020" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6" style={{ fontSize: 28, fontWeight: 700, color: "#fff" }}>
              Our mission
            </h2>
            <div className="space-y-4" style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
              <p>
                Every year, millions of high school students navigate one of the most consequential decisions
                of their lives with inadequate tools. Spreadsheets, scattered browser tabs, and anxiety.
              </p>
              <p>
                We believe every student — regardless of zip code or family income — deserves clarity on
                where they stand, and confidence in where they&apos;re applying.
              </p>
              <p>
                CollegeSwipe brings the best parts of modern consumer apps (fast, visual, addictive in a
                good way) to a process that has been stuck in 1995.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6" style={{ background: "#02040A" }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
            style={{ fontSize: 28, fontWeight: 700, color: "#fff" }}
          >
            What we stand for
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "Speed",
                description: "Decisions in seconds, not hours. No more endless browsing.",
                gradient: "linear-gradient(135deg, #F59E0B, #F43F5E)",
              },
              {
                icon: "🎯",
                title: "Clarity",
                description: "Honest reach, target, and safety labels based on real data.",
                gradient: "linear-gradient(135deg, #6B9FFF, #A855F7)",
              },
              {
                icon: "🤝",
                title: "Access",
                description: "Free forever for core features. Great tools shouldn't be gatekept.",
                gradient: "linear-gradient(135deg, #22C55E, #3B82F6)",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card rounded-3xl p-7"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {v.icon}
                </div>
                <h3 className="mb-2" style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>
                  {v.description}
                </p>
                <div className="mt-4 h-0.5 w-12 rounded-full" style={{ background: v.gradient }} />
              </motion.div>
            ))}
          </div>
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
            Join us.
          </h2>
          <p className="mb-8" style={{ fontSize: 17, color: "rgba(255,255,255,0.8)" }}>
            Download CollegeSwipe free on iOS today.
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
