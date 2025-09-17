import { Navigation } from "../components/navigation"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"

export const metadata = {
  title: "Contact Hexpeak - Get Your Custom Website Quote | Web Development Consultation",
  description:
    "Ready to transform your business with a custom website? Contact Hexpeak for professional web development services. Get a free consultation and quote for your construction, healthcare, or startup website project.",
  keywords:
    "contact web developer, website quote, web development consultation, custom website inquiry, construction website quote, healthcare web development contact, startup website consultation, professional web services contact",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to elevate your business with a custom website? Let's discuss your project and create a digital
              solution that drives results for your industry.
            </p>
          </div>
        </div> */}
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
