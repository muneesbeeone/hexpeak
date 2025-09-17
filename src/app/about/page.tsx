import { Navigation } from "../components/navigation"
import { AboutSection } from "../components/about-section"
import { WhyChooseUsSection } from "../components/why-choose-us-section"
import { Footer } from "../components/footer"

export const metadata = {
  title: "About Hexpeak - Expert Web Development Team | Our Story & Mission",
  description:
    "Learn about Hexpeak's journey in web development. Our experienced team creates innovative digital solutions for construction companies, healthcare providers, and startups. Discover our mission, values, and commitment to excellence.",
  keywords:
    "about hexpeak, web development team, company history, web design experts, digital agency story, professional web developers, construction web specialists, healthcare website experts",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
        <WhyChooseUsSection />
      </div>
      <Footer />
    </main>
  )
}
