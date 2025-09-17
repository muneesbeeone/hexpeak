"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Johnson Construction",
    role: "CEO",
    content:
      "Hexpeak created an amazing landing page for our construction business. Our lead generation increased by 300% within the first month!",
    rating: 5,
    image: "/professional-woman-ceo.png",
  },
  {
    name: "Dr. Michael Chen",
    company: "Chen Medical Practice",
    role: "Medical Director",
    content:
      "The landing page they built for our medical practice is both professional and conversion-focused. Patient inquiries have doubled since launch.",
    rating: 5,
    image: "/professional-doctor.jpg",
  },
  {
    name: "Emily Rodriguez",
    company: "FitLife Gym",
    role: "Owner",
    content:
      "Outstanding work! Our fitness landing page perfectly captures our brand and has significantly improved our membership sign-ups.",
    rating: 5,
    image: "/fitness-business-owner.jpg",
  },
  {
    name: "James Wilson",
    company: "Wilson Legal Services",
    role: "Partner",
    content:
      "Hexpeak delivered a sophisticated landing page that reflects our law firm's professionalism. Client consultations have increased by 250%.",
    rating: 5,
    image: "/professional-lawyer.png",
  },
  {
    name: "Lisa Thompson",
    company: "Thompson Catering",
    role: "Founder",
    content:
      "The landing page exceeded our expectations. It's beautiful, fast, and has helped us book 40% more events this year.",
    rating: 5,
    image: "/catering-business-owner.jpg",
  },
  {
    name: "David Park",
    company: "Park Tech Solutions",
    role: "CTO",
    content:
      "Professional, responsive, and results-driven. Our B2B landing page has generated more qualified leads than any other marketing channel.",
    rating: 5,
    image: "/tech-executive.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Don't just take our word for it. See how our landing pages have transformed businesses across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8 hover:border-primary/40 transition-all duration-500 hover:transform hover:scale-105 animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-300 mb-6 text-lg leading-relaxed">"{testimonial.content}"</blockquote>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-primary text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 text-lg">Ready to join our satisfied clients?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  )
}
