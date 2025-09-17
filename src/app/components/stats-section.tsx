import { TrendingUp, Users, Award, Clock } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average Conversion Increase",
      description: "Our landing pages boost conversions significantly",
    },
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Businesses trust us with their online presence",
    },
    {
      icon: Award,
      number: "98%",
      label: "Client Satisfaction Rate",
      description: "Consistently delivering exceptional results",
    },
    {
      icon: Clock,
      number: "5-7",
      label: "Days Average Delivery",
      description: "Fast turnaround without compromising quality",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Proven <span className="text-primary">Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Our track record speaks for itself. See the impact we've made for businesses across all industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8 hover:border-primary/40 transition-all duration-300">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-primary mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
