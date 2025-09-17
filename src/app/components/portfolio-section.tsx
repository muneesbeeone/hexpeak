"use client"

import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

export function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: "BuildCorp Landing Page",
      category: "Construction",
      description:
        "High-converting landing page for construction company featuring lead capture forms and service highlights.",
      image: "/modern-construction-company-website-with-dark-them.jpg",
      tags: ["Landing Page", "Lead Generation", "Mobile-First"],
    },
    {
      title: "MediCare Clinic Landing",
      category: "Healthcare",
      description: "Professional medical landing page with appointment booking CTA and patient testimonials.",
      image: "/professional-medical-clinic-website-with-blue-acce.jpg",
      tags: ["Healthcare", "Conversion Focused", "HIPAA Compliant"],
    },
    {
      title: "TechStart Launch Page",
      category: "Startup",
      description: "Dynamic startup landing page with investor pitch elements and product demo integration.",
      image: "/modern-startup-website-with-innovative-design.jpg",
      tags: ["Startup", "Product Launch", "Analytics"],
    },
    {
      title: "LegalPro Services Landing",
      category: "Legal",
      description: "Professional law firm landing page with consultation booking and case study highlights.",
      image: "/professional-law-firm-website-with-dark-elegant-de.jpg",
      tags: ["Legal Services", "Trust Building", "SEO Optimized"],
    },
    {
      title: "FoodieHub Restaurant Landing",
      category: "Restaurant",
      description: "Appetizing restaurant landing page with online ordering integration and menu showcase.",
      image: "/restaurant-website.png",
      tags: ["Restaurant", "Online Ordering", "Local SEO"],
    },
    {
      title: "FitLife Gym Landing",
      category: "Fitness",
      description: "Energetic fitness landing page with membership signup and class schedule integration.",
      image: "/modern-fitness-gym-website-with-dynamic-design.jpg",
      tags: ["Fitness", "Membership", "Mobile Responsive"],
    },
    {
      title: "EcoClean Services Landing",
      category: "Home Services",
      description: "Clean and professional landing page for cleaning services with instant quote calculator.",
      image: "/professional-cleaning-services-landing-page.jpg",
      tags: ["Home Services", "Quote Calculator", "Local Business"],
    },
    {
      title: "PersonalBrand Portfolio",
      category: "Personal",
      description: "Elegant personal branding landing page for professionals and freelancers.",
      image: "/elegant-personal-portfolio-landing-page.jpg",
      tags: ["Personal Brand", "Portfolio", "Professional"],
    },
    {
      title: "TechConsult B2B Landing",
      category: "B2B Services",
      description: "Corporate landing page for tech consulting with case studies and lead qualification forms.",
      image: "/corporate-tech-consulting-landing-page.jpg",
      tags: ["B2B", "Consulting", "Lead Qualification"],
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
    <section ref={sectionRef} id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in-up animate-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance animate-scale-in animate-in">
             <span className="text-primary animate-shimmer">Our</span> Portfolio
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty animate-slide-in-left animate-in"
            style={{ animationDelay: "0.2s" }}
          >
            Discover our high-converting landing pages designed for businesses across all industries. Each project
            showcases our expertise in creating focused, conversion-optimized pages that drive results.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-500 hover-lift hover-glow group overflow-hidden animate-on-scroll relative translate-y-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none" />

              {/* Responsive Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-110 group-hover:rotate-1 transition-all duration-500"
                  priority={index < 3} // prioritize first 3 images for LCP
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 btn-magnetic"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Landing Page
                  </Button>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-medium group-hover:text-primary/80 transition-colors duration-300">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/20 text-white text-xs rounded-md border border-primary/30 hover:bg-primary/30 hover:scale-105 transition-all duration-300 cursor-default"
                      style={{ transitionDelay: `${tagIndex * 0.05}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
