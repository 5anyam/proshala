"use client";

import { Metadata } from "next";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const services = [
  "Company Registration",
  "NCLT Matters", 
  "Annual Compliance",
  "Trademark Registration",
  "Conversion Services",
  "Strike Off Services",
  "Secretarial Audit",
  "Other Services"
];

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9876543210", "+91 9876543211"],
    description: "Mon-Sat 9:00 AM to 7:00 PM"
  },
  {
    icon: Mail,
    title: "Email", 
    details: ["contact@cspkindia.in", "info@cspkindia.in"],
    description: "We'll respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["123 Business Hub, Andheri East", "Mumbai, Maharashtra 400069"],
    description: "Visit us during business hours"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 7:00 PM", "Saturday: 9:00 AM - 5:00 PM"],
    description: "Sunday: Closed"
  }
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In production, this would send an actual email
      console.log("Contact form submission:", formData);
      
      toast.success("Thank you for your inquiry! We'll get back to you soon - हम आपसे जल्द ही संपर्क करेंगे");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our CS experts for professional guidance and consultation"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact" }
        ]}
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get Professional CS Guidance
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our team of qualified Company Secretaries is ready to assist you with all your 
              compliance and regulatory needs. Reach out to us for expert guidance and 
              personalized solutions for your business.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <div key={idx} className="text-gray-600 mb-1">{detail}</div>
                      ))}
                      <p className="text-sm text-gray-500 mt-2">{info.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="mt-6">
              <CardContent className="p-0">
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p>Interactive map would be embedded here</p>
                    <p className="text-sm">Google Maps integration</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours - 
                  हम 24 घंटे में जवाब देंगे
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange("name")}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange("phone")}
                        placeholder="+91 9876543210"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange("email")}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={handleInputChange("company")}
                        placeholder="Your company name (optional)"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Required</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the service you need" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange("message")}
                      placeholder="Please describe your requirements in detail..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#3AA6FF] hover:bg-[#2690E6] text-white"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick answers to common questions about our CS services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              question: "How quickly can you incorporate my company?", 
              answer: "Most company registrations are completed within 15-20 working days, depending on the type and complexity."
            },
            {
              question: "What are your fees for annual compliance?",
              answer: "Our fees vary based on company type and complexity. Contact us for a customized quote based on your specific requirements."
            },
            {
              question: "Do you handle NCLT matters across India?",
              answer: "Yes, we handle NCLT matters across all major cities in India with our network of qualified professionals."
            },
            {
              question: "Can you help with urgent ROC filings?",
              answer: "Yes, we offer urgent filing services with additional fees. Most urgent filings can be completed within 2-3 working days."
            }
          ].map((faq, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}