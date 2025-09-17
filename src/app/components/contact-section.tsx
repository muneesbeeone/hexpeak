"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to launch your landing page? Contact us today for a free consultation and let&apos;s discuss how we can
            help showcase your business online with a high-converting landing page.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let&apos;s Create Your Landing Page</h3>
              <p className="text-muted-foreground mb-8">
                We specialize in creating premium landing pages that convert visitors into customers. Whether you need a
                business landing page, personal portfolio, or service showcase, we&apos;re here to help you establish a
                powerful online presence.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/20 p-3 rounded-lg border border-primary/30">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email Us</h4>
                  <p className="text-muted-foreground">muneesmmm@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/20 p-3 rounded-lg border border-primary/30">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Call Us</h4>
                  <p className="text-muted-foreground">+91 9645 732 562</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/20 p-3 rounded-lg border border-primary/30">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Visit Us</h4>
                  <p className="text-muted-foreground">
                    Thiruvegappura
                    <br />
                    Palakkad, Kerala 679304
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-white mb-3">Why Choose Hexpeak?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 24-48 hour response time</li>
                <li>• Custom landing page designs</li>
                <li>• Mobile-responsive development</li>
                <li>• SEO-optimized for better visibility</li>
                <li>• Free consultation and quote</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-white">Get Your Landing Page Quote</CardTitle>
              <p className="text-sm text-muted-foreground">
                Tell us about your project and we&apos;ll get back to you within 24 hours
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-input border-border text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-input border-border text-white"
                      placeholder="your.email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-input border-border text-white"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-input border-border min-h-[120px] text-white"
                    placeholder="Tell us about your business and what type of landing page you need..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 "
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Get My Quote
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="text-green-400 text-sm text-center bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                    Thank you! We&apos;ve received your inquiry and will get back to you within 24 hours with a custom quote.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="text-red-400 text-sm text-center bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                    Sorry, there was an error sending your message. Please try emailing us directly at hello.hexpeak.com
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
