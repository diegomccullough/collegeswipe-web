"use client"

import Link from "next/link"

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Download", href: "https://apps.apple.com/app/id6756989742" },
  ],
  company: [
    { label: "About", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    {
      label: "Contact",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSfa1bM4aGaDHJca19oqvKXXrVg4EFDu0arRGbilfcws6UmIZw/viewform",
      external: true,
    },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <div className="relative">
      {/* Large background text */}
      <div
        className="absolute -top-[15vw] left-0 right-0 flex items-end justify-center overflow-visible pointer-events-none z-10"
      >
        <h2
          className="font-bold text-center tracking-tighter whitespace-nowrap leading-[0.85]"
          style={{
            fontSize: "clamp(80px, 20vw, 22vw)",
            color: "#6B9FFF",
            opacity: 0.05,
          }}
        >
          COLLEGESWIPE
        </h2>
      </div>

      <footer
        id="contact"
        className="relative z-20 py-16 px-6"
        style={{
          background: "#02040A",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-2">
              <Link href="/" className="flex items-center gap-2.5 mb-4" style={{ textDecoration: "none" }}>
                <img
                  src="/images/logo.webp"
                  alt="CollegeSwipe"
                  className="w-8 h-8 rounded-xl"
                  style={{ boxShadow: "0 0 0 1px rgba(107,159,255,0.15), 0 2px 8px rgba(0,0,0,0.3)" }}
                />
                <span style={{ fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: "-0.3px" }}>CollegeSwipe</span>
              </Link>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", marginBottom: 20, lineHeight: 1.65, maxWidth: 240 }}>
                Built for students who deserve better tools.
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: XIcon, href: "#" },
                  { Icon: InstagramIcon, href: "#" },
                  { Icon: LinkedInIcon, href: "#" },
                ].map(({ Icon, href }, i) => (
                  <Link
                    key={i}
                    href={href}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150"
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.4)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = "rgba(255,255,255,0.2)"
                      el.style.color = "rgba(255,255,255,0.8)"
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = "rgba(255,255,255,0.08)"
                      el.style.color = "rgba(255,255,255,0.4)"
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 16 }}>
                Product
              </h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.15s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 16 }}>
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, i) => (
                  <li key={i}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.15s" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.15s" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 16 }}>
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.15s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
              © {new Date().getFullYear()} CollegeSwipe. All rights reserved.
            </p>
            <div className="flex gap-6">
              {[
                { label: "Safety", color: "#22C55E" },
                { label: "Target", color: "#3B82F6" },
                { label: "Reach", color: "#EF4444" },
              ].map((p) => (
                <span
                  key={p.label}
                  style={{ fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 999, color: p.color, background: `${p.color}12`, border: `1px solid ${p.color}25` }}
                >
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
