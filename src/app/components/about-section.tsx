import { Card, CardContent } from "../components/ui/card"
import { Target, Eye, Award, Users, Code, Zap } from "lucide-react"
import { InteractiveSphere } from "./interactive-sphere"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            About <span className="text-primary">Hexpeak</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Leading web development agency specializing in custom digital solutions for construction companies,
            healthcare providers, medical clinics, and innovative startups. We combine technical expertise with industry
            knowledge to deliver exceptional web experiences that drive business growth.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <InteractiveSphere />
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Years of Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">3</div>
            <div className="text-sm text-muted-foreground">Industry Specializations</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300">
            <CardContent className="p-8 text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower construction companies, healthcare providers, and startups with cutting-edge web solutions
                that drive growth, enhance user experience, and establish a dominant digital presence in their
                industries.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300">
            <CardContent className="p-8 text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the premier web development partner for specialized industries, recognized for innovative
                solutions, exceptional quality, and deep understanding of construction, healthcare, and startup
                ecosystems.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300">
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Specialized knowledge in construction industry workflows, healthcare compliance requirements, and
                startup growth strategies, combined with modern web technologies and best practices.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-12">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Code className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Technical Excellence</h4>
              <p className="text-muted-foreground text-sm">
                Modern web technologies, clean code practices, and scalable architecture for long-term success.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Industry Focus</h4>
              <p className="text-muted-foreground text-sm">
                Deep understanding of construction, healthcare, and startup industries with tailored solutions.
              </p>
            </div>
            <div className="text-center">
              <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Results-Driven</h4>
              <p className="text-muted-foreground text-sm">
                Performance optimization, SEO excellence, and conversion-focused design for measurable business impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
