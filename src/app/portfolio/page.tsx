import { Navigation } from "../components/navigation"
import { PortfolioSection } from "../components/portfolio-section"
import { Footer } from "../components/footer"

export const metadata = {
  title: "Portfolio - Web Development Projects | Construction, Healthcare & Startup Websites - Hexpeak",
  description:
    "Explore our portfolio of successful web development projects. View custom websites, e-commerce solutions, and digital platforms we've created for construction companies, medical clinics, healthcare providers, and innovative startups.",
  keywords:
    "web development portfolio, website examples, construction website portfolio, healthcare web design examples, startup website showcase, custom web development projects, e-commerce website examples, responsive design portfolio",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our successful web development projects across various industries. Each project showcases our
              commitment to quality, innovation, and client satisfaction.
            </p>
          </div>
        </div> */}
        <PortfolioSection />
      </div>
      <Footer />
    </main>
  )
}
