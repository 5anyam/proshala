import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, FileText, CheckCircle, Users, HelpCircle, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/contact-form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getServiceBySlug, services } from "@/lib/data/services";
import Link from "next/link";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} - ${service.category} | CSPKIndia`,
    description: service.longDesc,
    keywords: `${service.title}, ${service.category}, company secretary services, CS services`,
    openGraph: {
      title: `${service.title} - CSPKIndia`,
      description: service.longDesc,
      type: 'article',
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.longDesc,
    provider: {
      '@type': 'Organization',
      name: 'CSPKIndia',
      url: 'https://cspkindia.in',
    },
    category: service.category,
    offers: {
      '@type': 'Offer',
      price: service.ourFees || 'Contact for quote',
      priceCurrency: 'INR',
      availability: 'InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <PageHeader
        title={service.title}
        description={service.shortDesc}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title }
        ]}
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-[#3AA6FF]" />
                  Service Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{service.longDesc}</p>
              </CardContent>
            </Card>

            {/* Eligibility */}
            {service.eligibility && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-[#3AA6FF]" />
                    Eligibility & When Needed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.eligibility.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Documents Required */}
            {service.documents && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-[#3AA6FF]" />
                    Documents Required
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.documents.map((doc, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Process Steps */}
            {service.process && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#3AA6FF]" />
                    Process Steps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-[#3AA6FF] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-600 pt-1">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="mr-2 h-5 w-5 text-[#3AA6FF]" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    {service.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Service Details */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Service Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {service.timeline && (
                  <div className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-[#3AA6FF]" />
                      <span className="text-sm font-medium">Timeline</span>
                    </div>
                    <span className="text-sm text-gray-600">{service.timeline}</span>
                  </div>
                )}
                
                {service.govtFees && (
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-sm font-medium">Govt. Fees</span>
                    <span className="text-sm text-gray-600">{service.govtFees}</span>
                  </div>
                )}
                
                {service.ourFees && (
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-sm font-medium">Our Fees</span>
                    <span className="text-sm font-semibold text-[#3AA6FF]">{service.ourFees}</span>
                  </div>
                )}
                
                <Button className="w-full bg-[#3AA6FF] hover:bg-[#2690E6] text-white" asChild>
                  <Link href="/contact">
                    Get Started Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <ContactForm title="Quick Enquiry" />
          </div>
        </div>
      </Section>
    </>
  );
}