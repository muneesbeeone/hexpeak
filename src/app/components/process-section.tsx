"use client"

import { Card, CardContent } from "../components/ui/card"
import { MessageSquare, Palette, Code, Rocket, Search, TestTube, BarChart3, Headphones } from "lucide-react"
import { useEffect, useRef } from "react"

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const steps = [
    {
      icon: MessageSquare,
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business, target audience, and goals to create the perfect landing page strategy.",
      duration: "1-2 days",
    },
    {
      icon: Search,
      step: "02",
      title: "Research & Analysis",
      description:
        "We analyze your competitors, research your target market, and identify the best conversion strategies for your industry.",
      duration: "1-2 days",
    },
    {
      icon: Palette,
      step: "03",
      title: "Design & Mockups",
      description:
        "Our designers create stunning mockups that align with your brand and are optimized for conversions.",
      duration: "2-3 days",
    },
    {
      icon: Code,
      step: "04",
      title: "Development & Integration",
      description:
        "We build your landing page with clean code, ensuring it's fast, responsive, and SEO-optimized with all necessary integrations.",
      duration: "3-4 days",
    },
    {
      icon: TestTube,
      step: "05",
      title: "Testing & Optimization",
      description:
        "We thoroughly test your landing page across all devices and browsers, optimizing for speed and performance.",
      duration: "1-2 days",
    },
    {
      icon: Rocket,
      step: "06",
      title: "Launch & Deployment",
      description: "We launch your landing page on your preferred platform and ensure everything is working perfectly.",
      duration: "1 day",
    },
    {
      icon: BarChart3,
      step: "07",
      title: "Analytics & Tracking",
      description:
        "We set up comprehensive analytics and conversion tracking to monitor your landing page's performance.",
      duration: "1 day",
    },
    {
      icon: Headphones,
      step: "08",
      title: "Ongoing Support",
      description:
        "We provide continuous support, maintenance, and optimization to ensure your landing page keeps performing.",
      duration: "Ongoing",
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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in animate-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From concept to launch and beyond, we follow a comprehensive 8-step process to deliver landing pages that
            exceed expectations and drive exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-500 hover-lift group relative overflow-hidden animate-on-scroll translate-y-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                {step.step}
              </div>

              <CardContent className="p-8 relative z-10">
                <step.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{step.description}</p>
                <div className="text-xs text-black font-medium bg-white px-3 py-1 rounded-full inline-block">
                  {step.duration}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/50 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Our comprehensive 8-step process ensures you get a professional landing page that drives results,
              delivered on time and within budget with ongoing support.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:transform hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
