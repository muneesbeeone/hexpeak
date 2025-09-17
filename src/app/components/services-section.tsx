"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Globe, Paintbrush, Building, Stethoscope, Rocket, ArrowRight, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"
// import { FloatingElements } from "./floating-elements"

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const services = [
    {
      icon: Globe,
      title: "Business Landing Pages",
      description:
        "Professional landing pages designed to showcase your business and convert visitors into customers. Perfect for any industry - from local services to global enterprises. Fast-loading, mobile-responsive, and SEO-optimized.",
      features: ["High-Converting Design", "Mobile-First Approach", "SEO Optimization", "Fast Loading Speed"],
    },
    {
      icon: Building,
      title: "Construction Company Landing Pages",
      description:
        "Specialized landing pages for construction companies, contractors, architects, and building services. Showcase your projects and expertise with professional construction landing pages that generate leads.",
      features: ["Project Showcases", "Service Highlights", "Quote Request Forms", "Before/After Galleries"],
    },
    {
      icon: Stethoscope,
      title: "Healthcare Landing Pages",
      description:
        "Professional landing pages for medical clinics, hospitals, healthcare providers, and medical practices. HIPAA-compliant designs that build trust and attract new patients.",
      features: [
        "Appointment Booking Integration",
        "Service Information Pages",
        "Patient Testimonials",
        "Medical Compliance",
      ],
    },
    {
      icon: Rocket,
      title: "Startup Landing Pages",
      description:
        "Dynamic landing pages for startups and emerging businesses. Create a strong first impression to attract investors, customers, and talent with modern startup landing pages that tell your story.",
      features: ["Product Showcases", "Investor-Ready Design", "Growth Metrics Display", "Call-to-Action Optimization"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Landing Pages",
      description:
        "High-converting product and service landing pages that drive sales. Perfect for promoting specific products, seasonal campaigns, or new service launches with compelling e-commerce designs.",
      features: ["Product Highlights", "Sales Optimization", "Payment Integration", "Customer Reviews"],
    },
    {
      icon: Paintbrush,
      title: "Personal Brand Landing Pages",
      description:
        "Professional personal landing pages for entrepreneurs, freelancers, consultants, and professionals. Build your personal brand online with landing pages that showcase your expertise and attract opportunities.",
      features: [
        "Portfolio Integration",
        "Professional Bio Sections",
        "Contact & Booking Forms",
        "Social Media Integration",
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card/20 to-background relative overflow-hidden"
    >
      {/* <FloatingElements /> */}

      <div className="absolute top-20 left-10 w-32 h-32 gradient-glow rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 gradient-glow rounded-full opacity-15 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up animate-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance animate-scale-in animate-in">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty animate-slide-in-left animate-in"
            style={{ animationDelay: "0.2s" }}
          >
            We create stunning landing pages for every type of business and personal brand. Whether you're a
            construction company, healthcare provider, startup, or established enterprise, we build landing pages that
            showcase your business online and drive real results. From concept to conversion, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="gradient-card border-border hover:border-primary/50 transition-all duration-500 hover-lift hover-glow group animate-on-scroll relative overflow-hidden  translate-y-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 gradient-shimmer  group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="relative z-10">
                <service.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse-slow" />
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm group-hover:text-foreground transition-colors duration-300"
                      style={{ transitionDelay: `${featureIndex * 0.05}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <div className="gradient-border rounded-md">
                    <Button
                      variant="outline"
                      className="w-full group/btn bg-transparent btn-magnetic hover-glow border-0"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-all duration-300" />
                    </Button>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
