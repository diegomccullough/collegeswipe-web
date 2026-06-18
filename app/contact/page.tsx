import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CONTACT_FORM_EMBED_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact Us — CollegeSwipe",
  description: "Get in touch with the CollegeSwipe team. We'd love to hear from you.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: "#02040A" }}>
      <Header />

      <section className="pt-32 pb-12 px-6 text-center relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none opacity-10"
          style={{ background: "linear-gradient(135deg, #6B9FFF, #764BA2)" }}
        />
        <div className="relative">
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Get in touch
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-1.5px",
              lineHeight: 1.08,
              marginBottom: 16,
            }}
          >
            Contact Us
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", maxWidth: 480, margin: "0 auto" }}>
            Have a question, feedback, or partnership idea? Send us a message below.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <iframe
              src={CONTACT_FORM_EMBED_URL}
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact CollegeSwipe"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
