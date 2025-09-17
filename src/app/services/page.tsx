import { Navigation } from "../components/navigation"
import { ServicesSection } from "../components/services-section"
import { Footer } from "../components/footer"

export const metadata = {
  title: "Web Development Services | Custom Websites, E-commerce & Digital Solutions - Hexpeak",
  description:
    "Comprehensive web development services including custom website design, e-commerce development, mobile app development, SEO optimization, and digital marketing. Specialized solutions for construction, healthcare, and startup industries.",
  keywords:
    "web development services, custom website development, e-commerce solutions, mobile app development, SEO services, digital marketing, construction website services, healthcare web development, startup web solutions, responsive web design, website maintenance, web consulting",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development and digital solutions tailored to your industry needs. From custom websites
              to complex web applications, we deliver excellence in every project.
            </p>
          </div>
        </div> */}
        <ServicesSection />
      </div>
      <Footer />
    </main>
  )
}
