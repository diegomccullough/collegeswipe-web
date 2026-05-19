import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the college matching work?",
    answer:
      "CollegeSwipe uses your GPA, test scores, intended major, and location to rank colleges by fit. Each card is labeled Reach, Target, or Safety based on real admissions data. The more you swipe, the better your deck gets.",
  },
  {
    question: "Is it really free?",
    answer:
      "Yes — CollegeSwipe is completely free to download and use. Swipe colleges, save your matches, and see your Reach, Target, and Safety breakdown at no cost. No credit card required.",
  },
  {
    question: "What is ScholarshipSwipe?",
    answer:
      "ScholarshipSwipe lets you swipe through 10,000+ scholarships matched to your profile — your major, GPA, background, and location. Swipe right to save, left to pass. Deadlines are tracked automatically.",
  },
  {
    question: "How accurate is the admissions chances calculator?",
    answer:
      "Our calculator uses historical admissions data, GPA ranges, and test score distributions from each school. It gives you a percentage estimate based on where you stand relative to accepted students. It's a guide, not a guarantee — but it's a lot better than guessing.",
  },
  {
    question: "Is CollegeSwipe available on Android?",
    answer:
      "CollegeSwipe is currently iOS only. Android is on our roadmap — join the waitlist on the homepage and we'll notify you when it launches.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-32 px-6 pb-80 relative">
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="font-serif mb-4"
            style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, color: "#fff", letterSpacing: "-1.5px", lineHeight: 1.08 }}
          >
            Frequently asked questions
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", maxWidth: 480, margin: "0 auto", lineHeight: 1.65, fontSize: 16 }}>
            Everything you need to know about CollegeSwipe.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 py-0 my-0">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl px-6"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <AccordionTrigger
                className="text-left text-base font-medium hover:no-underline py-5"
                style={{ color: "#fff" }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className="pb-5 leading-relaxed text-sm"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
