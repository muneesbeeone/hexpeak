"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What types of landing pages do you create?",
    answer:
      "We create landing pages for every type of business - from construction and healthcare to restaurants, fitness centers, legal services, and personal brands. Each landing page is custom-designed to match your industry and target audience.",
  },
  {
    question: "How long does it take to build a landing page?",
    answer:
      "Most landing pages are completed within 5-7 business days. This includes design, development, content optimization, and mobile responsiveness. Rush projects can be accommodated for an additional fee.",
  },
  {
    question: "Do you provide content writing services?",
    answer:
      "Yes! We include SEO-optimized copywriting as part of our landing page service. Our content is designed to convert visitors into customers while improving your search engine rankings.",
  },
  {
    question: "Are your landing pages mobile-responsive?",
    answer:
      "All our landing pages are fully responsive and optimized for mobile devices. With over 60% of web traffic coming from mobile, this is a standard feature in all our projects.",
  },
  {
    question: "Do you offer ongoing maintenance and updates?",
    answer:
      "Yes, we provide ongoing maintenance packages that include content updates, security monitoring, performance optimization, and technical support to keep your landing page running smoothly.",
  },
  {
    question: "Can you integrate forms and lead capture systems?",
    answer:
      "Definitely! We integrate contact forms, lead capture systems, email marketing tools, and analytics tracking to help you convert visitors and measure your landing page&apos;s performance.",
  },
  {
    question: "What&apos;s included in your landing page service?",
    answer:
      "Our service includes custom design, responsive development, SEO optimization, contact forms, analytics setup, performance optimization, and one month of free support after launch.",
  },
  {
    question: "Do you work with existing branding?",
    answer:
      "Yes! We can work with your existing brand guidelines, logos, and color schemes. If you don&apos;t have established branding, we can also help create a cohesive visual identity for your landing page.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-gray-900/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Get answers to common questions about our landing page development services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-gray-900/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white pr-4 group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                    )}
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 text-lg">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
