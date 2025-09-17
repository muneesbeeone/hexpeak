import { Navigation } from "./components/navigation"
import { HeroSection } from "./components/hero-section"
import { StatsSection } from "./components/stats-section"
import { AboutSection } from "./components/about-section"
import { ServicesSection } from "./components/services-section"
import { ProcessSection } from "./components/process-section"
import { WhyChooseUsSection } from "./components/why-choose-us-section"
import { PortfolioSection } from "./components/portfolio-section"
import { TestimonialsSection } from "./components/testimonials-section"
import { FAQSection } from "./components/faq-section"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"

export const metadata = {
  title: "Hexpeak - Premium Landing Page Development | Convert Visitors to Customers",
  description:
    "Professional landing page development for every business type. Boost conversions with custom-designed, mobile-responsive landing pages. Specializing in business, personal, and e-commerce landing pages with proven results.",
  keywords:
    "landing page development, conversion optimization, business landing pages, web design, lead generation, mobile responsive design, custom landing pages, professional web development",
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
