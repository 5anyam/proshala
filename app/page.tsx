import Link from "next/link";
import { ArrowRight, Shield, Clock, Users, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { ContactForm } from "@/components/ui/contact-form";
import { CTA } from "@/components/ui/cta";
import { getFeaturedServices } from "@/lib/data/services";

const usps = [
  {
    icon: Shield,
    title: "Expert ROC Compliance",
    description: "Complete ROC filings, annual returns, and statutory compliance with 100% accuracy"
  },
  {
    icon: Clock,
    title: "NCLT Matters",
    description: "Specialized handling of mergers, amalgamations, and revival cases before NCLT"
  },
  {
    icon: Users,
    title: "IPR Protection",
    description: "Comprehensive trademark registration and intellectual property rights services"
  },
  {
    icon: CheckCircle,
    title: "Annual Filings",
    description: "Timely completion of all annual compliance requirements for your business"
  }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Tech Innovations Pvt Ltd",
    rating: 5,
    testimonial: "CSPKIndia helped us with our company registration and annual compliance. Their team is professional and always delivers on time. Highly recommended for any CS services."
  },
  {
    name: "Priya Sharma",
    company: "Green Earth NGO",
    rating: 5,
    testimonial: "Excellent service for our Section 8 company registration. They guided us through the entire process and made it hassle-free. Very knowledgeable team."
  },
  {
    name: "Amit Patel",
    company: "Digital Solutions LLP",
    rating: 5,
    testimonial: "We've been working with CSPKIndia for our LLP compliance for over 2 years. Their expertise in regulatory matters is outstanding. Great value for money."
  }
];

export default function HomePage() {
  const featuredServices = getFeaturedServices();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3AA6FF] via-[#2690E6] to-[#1a7cc7] text-white py-20 lg:py-32">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Trusted CS & Compliance Partner for 
                <span className="block text-[#E6F3FF]">Growing Businesses</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Expert Company Secretary services for registration, compliance, NCLT matters, and intellectual property rights. 
                Get professional guidance from qualified CS professionals with 10+ years of experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-white text-[#3AA6FF] hover:bg-gray-100 font-semibold">
                  <Link href="/contact">
                    Request Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-[#3AA6FF]">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <ContactForm 
                title="Request a Callback - हम आपसे जल्द ही संपर्क करेंगे"
                showServices={false}
                className="bg-white/10 backdrop-blur-md border-white/20 text-white"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* USPs Section */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CSPKIndia?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive CS services with expert guidance, timely delivery, and complete transparency in all our processes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <usp.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{usp.title}</h3>
              <p className="text-gray-600 leading-relaxed">{usp.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Services */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Featured Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From company registration to annual compliance, we offer complete CS solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDesc}
              href={`/services/${service.slug}`}
              category={service.category}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" asChild className="bg-[#3AA6FF] hover:bg-[#2690E6] text-white">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our CS services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              company={testimonial.company}
              rating={testimonial.rating}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Ready to Get Started?"
        description="Contact us today for expert CS services and compliance solutions. Let us handle your regulatory requirements while you focus on growing your business."
        primaryButton={{
          text: "Get Free Consultation",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Download Firm Profile",
          href: "/cspkindia-profile.pdf"
        }}
      />
    </>
  );
}