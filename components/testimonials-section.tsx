"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const testimonials = [
  {
    name: "Jaylen M.",
    role: "High school senior, Atlanta GA",
    content: "I had no idea where to even start with college apps. CollegeSwipe showed me 3 safety schools I actually liked in the first 10 minutes. It felt like it actually knew me.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Sofia R.",
    role: "First-gen student, Miami FL",
    content: "My parents never went to college so I had zero guidance. This app gave me a real list of reach, target, and safety schools based on my actual GPA. Game changer.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Ethan K.",
    role: "Junior, Chicago IL",
    content: "The ScholarshipSwipe feature is insane. I found 4 scholarships I was actually eligible for in one session. Nothing else I tried came close.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

const testimonials2 = [
  {
    name: "Priya N.",
    role: "High school senior, Austin TX",
    content: "Every other college search tool just showed me a list. CollegeSwipe felt like Tinder for colleges — I was actually excited to open it. Ended up with a list I'm genuinely happy about.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Marcus T.",
    role: "Senior, Detroit MI",
    content: "I was overwhelmed by Common App before I used this. Now I have 8 schools I like, ranked by match. I know exactly where I'm applying and why.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Aaliyah W.",
    role: "First-gen junior, New Orleans LA",
    content: "Being first-gen, I didn't know the difference between a reach and safety school. Now I do. CollegeSwipe explained it through the cards — I didn't even need to read a guide.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]
const duplicatedTestimonials2 = [...testimonials2, ...testimonials2, ...testimonials2]

export function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollRef2 = useRef<HTMLDivElement>(null)

  // Original initialization logic — unchanged
  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef2.current) {
        scrollRef2.current.scrollLeft = scrollRef2.current.scrollWidth / 3
      }
      setIsInitialized(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Original row 1 scroll animation — unchanged
  useEffect(() => {
    if (isPaused || !isInitialized || !scrollRef.current) return

    const scrollContainer = scrollRef.current
    let animationFrameId: number
    let isActive = true

    const scroll = () => {
      if (!isActive || !scrollContainer) return
      scrollContainer.scrollLeft += 1
      const maxScroll = scrollContainer.scrollWidth / 3
      if (scrollContainer.scrollLeft >= maxScroll) {
        scrollContainer.scrollLeft = 0
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => {
      isActive = false
      cancelAnimationFrame(animationFrameId)
    }
  }, [isPaused, isInitialized])

  // Original row 2 scroll animation — unchanged
  useEffect(() => {
    if (isPaused || !isInitialized || !scrollRef2.current) return

    const scrollContainer = scrollRef2.current
    let animationFrameId: number
    let isActive = true

    const scroll = () => {
      if (!isActive || !scrollContainer) return
      scrollContainer.scrollLeft -= 1
      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => {
      isActive = false
      cancelAnimationFrame(animationFrameId)
    }
  }, [isPaused, isInitialized])

  return (
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden">
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="font-serif"
            style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#fff", letterSpacing: "-1.5px", lineHeight: 1.08 }}
          >
            What students say
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, marginTop: 12 }}>
            Real students, real college lists.
          </p>
        </div>

        <div className="space-y-6">
          {/* Row 1 — scrolls left */}
          <div className="relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-12 pointer-events-none z-10"
              style={{ background: "linear-gradient(to right, #02040A, transparent)" }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-12 pointer-events-none z-10"
              style={{ background: "linear-gradient(to left, #02040A, transparent)" }}
            />
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              style={{ scrollBehavior: "auto" }}
            >
              {duplicatedTestimonials.map((t, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-[400px] rounded-2xl py-6 px-6"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold"
                      style={{ background: "linear-gradient(135deg, #6B9FFF, #A855F7)", color: "#fff" }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.65, fontSize: 14, flex: 1 }}>
                      &ldquo;{t.content}&rdquo;
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{t.name}</p>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-12 pointer-events-none z-10"
              style={{ background: "linear-gradient(to right, #02040A, transparent)" }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-12 pointer-events-none z-10"
              style={{ background: "linear-gradient(to left, #02040A, transparent)" }}
            />
            <div
              ref={scrollRef2}
              className="flex gap-6 overflow-x-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              style={{ scrollBehavior: "auto" }}
            >
              {duplicatedTestimonials2.map((t, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-[400px] rounded-2xl py-6 px-6"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold"
                      style={{ background: "linear-gradient(135deg, #F59E0B, #F43F5E)", color: "#fff" }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.65, fontSize: 14, flex: 1 }}>
                      &ldquo;{t.content}&rdquo;
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{t.name}</p>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
