"use client"

import type React from "react"
import { useState } from "react"
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    // Fix 5: sticky top-0, always-on glassmorphism
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(2,4,10,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" onClick={handleLogoClick} className="flex items-center gap-2.5 cursor-pointer" style={{ textDecoration: "none" }}>
            <img
              src="/images/logo.webp"
              alt="CollegeSwipe"
              className="w-8 h-8 rounded-xl"
              style={{ boxShadow: "0 0 0 1px rgba(107,159,255,0.15), 0 2px 8px rgba(0,0,0,0.3)" }}
            />
            <span style={{ fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: "-0.3px" }}>
              CollegeSwipe
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: "Features", id: "features" },
              { label: "About", id: "how-it-works" },
              { label: "Pricing", id: "pricing" },
              { label: "Reviews", id: "testimonials" },
              { label: "FAQ", id: "faq" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className="cursor-pointer transition-all duration-150"
                style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.55)", padding: "6px 12px", borderRadius: 8, textDecoration: "none" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "rgba(255,255,255,0.9)"; el.style.background = "rgba(255,255,255,0.05)" }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "rgba(255,255,255,0.55)"; el.style.background = "transparent" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-1">
            <a
              href="https://apps.apple.com/app/id6756989742"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-0 rounded-full pl-5 pr-1 py-1 transition-all duration-300 group overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(107,159,255,0.15), rgba(168,85,247,0.15))", border: "1px solid rgba(107,159,255,0.25)", textDecoration: "none" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(107,159,255,0.45)"; el.style.boxShadow = "0 0 20px rgba(107,159,255,0.15)" }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(107,159,255,0.25)"; el.style.boxShadow = "none" }}
            >
              <span style={{ fontSize: 13, fontWeight: 600, color: "#fff", paddingRight: 12, position: "relative", zIndex: 10 }}>
                Download App
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center relative z-10" style={{ background: "rgba(107,159,255,0.2)" }}>
                <ArrowRight className="w-4 h-4 group-hover:opacity-0 absolute transition-opacity duration-300 text-white" />
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white" />
              </span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden transition-colors duration-300"
            style={{ color: "#fff" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav
            className="md:hidden mt-4 pb-4 flex flex-col gap-4 pt-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            {[
              { label: "Features", id: "features" },
              { label: "About", id: "how-it-works" },
              { label: "Pricing", id: "pricing" },
              { label: "Reviews", id: "testimonials" },
              { label: "FAQ", id: "faq" },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className="cursor-pointer transition-colors"
                style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, textDecoration: "none" }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <a
                href="https://apps.apple.com/app/id6756989742"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-0 rounded-full pl-5 pr-1 py-1 w-fit"
                style={{ background: "linear-gradient(135deg, rgba(107,159,255,0.15), rgba(168,85,247,0.15))", border: "1px solid rgba(107,159,255,0.25)", textDecoration: "none" }}
              >
                <span style={{ fontSize: 13, fontWeight: 600, color: "#fff", paddingRight: 12 }}>Download App</span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(107,159,255,0.2)" }}>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
