import { Card, CardContent } from "../components/ui/card"
import { Shield, Smartphone, Search, TrendingUp, DollarSign, Clock } from "lucide-react"

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "We deliver high-quality websites that meet industry standards and exceed client expectations.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "All our websites are designed with mobile users in mind, ensuring perfect performance across all devices.",
    },
    {
      icon: Search,
      title: "SEO-Friendly",
      description:
        "Built-in SEO optimization to help your website rank higher in search results and attract more visitors.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Our websites grow with your business, easily accommodating new features and increased traffic.",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description:
        "Competitive pricing without compromising on quality, making professional web development accessible.",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times without sacrificing quality, getting your website live as soon as possible.",
    },
  ]

  return (
    <section id="why-choose-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Why Choose <span className="text-primary">Hexpeak</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We combine technical expertise with creative vision to deliver exceptional web solutions that drive business
            growth and user engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <CardContent className="p-8 text-center">
                <reason.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
