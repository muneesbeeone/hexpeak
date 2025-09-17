import { Button } from "../components/ui/button"
import { ArrowRight, Code, Palette, Zap } from "lucide-react"
import Link from "next/link"
import { ThreeBackground } from "./three-background"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-hero">
      <ThreeBackground />

      <div className="absolute inset-0 gradient-glow opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-50" />

      <div className="absolute top-20 left-10 animate-float hover-glow">
        <Code className="h-8 w-8 text-primary/30 transition-all duration-300 hover:text-primary/60 hover:scale-125" />
      </div>
      <div className="absolute top-40 right-20 animate-float animate-pulse-slow" style={{ animationDelay: "1s" }}>
        <Palette className="h-6 w-6 text-primary/20 transition-all duration-300 hover:text-primary/50 hover:rotate-12" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float animate-glow" style={{ animationDelay: "2s" }}>
        <Zap className="h-10 w-10 text-primary/25 transition-all duration-300 hover:text-primary/60 hover:scale-110" />
      </div>
      <div className="absolute top-60 left-1/2 animate-float" style={{ animationDelay: "0.5s" }}>
        <div className="w-4 h-4 bg-primary/20 rounded-full animate-pulse-slow" />
      </div>
      <div className="absolute bottom-60 right-10 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="w-6 h-6 bg-primary/15 rounded-full animate-glow" />
      </div>

      <div className="relative z-10 text-center max-w-4xl py-20  md:py-0 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold md:mt-0 mb-6 text-balance">
            <span className="text-foreground">Elite</span> <span className="gradient-text">Websites</span>{" "}
            <span className="text-foreground">That Dominate Markets</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty animate-slide-in-left"
            style={{ animationDelay: "0.2s" }}
          >
            Transform your digital presence into a competitive advantage. We engineer high-performance websites that
            don&apos;t just convert—they dominate. For ambitious brands ready to outperform competitors and capture market
            share through superior digital experiences.
          </p>


          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-right"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="text-lg px-8 py-6 group btn-magnetic hover-lift gradient-primary text-background font-semibold"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-all duration-300" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <div className="gradient-border rounded-lg">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-transparent hover-glow btn-magnetic border-0"
                >
                  View Our Portfolio
                </Button>
              </div>
            </Link>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="space-y-2 hover-lift">
              <div className="text-3xl font-bold text-primary animate-pulse-slow">98%</div>
              <div className="text-sm text-muted-foreground">Client Retention Rate</div>
            </div>
            <div className="space-y-2 hover-lift" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl font-bold text-primary animate-pulse-slow">5x</div>
              <div className="text-sm text-muted-foreground">Average Revenue Growth</div>
            </div>
            <div className="space-y-2 hover-lift" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-primary animate-pulse-slow">24/7</div>
              <div className="text-sm text-muted-foreground">Premium Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
