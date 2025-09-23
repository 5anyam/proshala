import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, FileText, CheckCircle, Users, HelpCircle, ArrowRight, Info } from "lucide-react";
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
    title: `${service.title} - ${service.category} | CS Praveen Kumar`,
    description: service.longDesc,
    keywords: `${service.title}, ${service.category}, company secretary services, CS services, CS Praveen Kumar`,
    openGraph: {
      title: `${service.title} - CS Praveen Kumar`,
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

  // Updated JSON-LD schema without pricing information
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.longDesc,
    provider: {
      '@type': 'Organization',
      name: 'CS Praveen Kumar',
      url: 'https://cspraveenkumar.in',
    },
    category: service.category,
    serviceType: 'Company Secretary Services',
    areaServed: 'India'
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
            {/* Service Introduction */}
            <Card className="border-l-4 border-[#3AA6FF]">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Professional {service.title} Services
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  CS Praveen Kumar provides comprehensive {service.title.toLowerCase()} services to businesses across India. 
                  Our experienced team ensures complete regulatory compliance and professional handling of all requirements.
                </p>
              </CardContent>
            </Card>

            {/* Service Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="mr-2 h-5 w-5 text-[#3AA6FF]" />
                  Service Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{service.longDesc}</p>
              </CardContent>
            </Card>

            {/* Key Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-[#3AA6FF]" />
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-gray-600">Expert Professional Handling</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-gray-600">Complete Regulatory Compliance</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-gray-600">Timely Processing</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-gray-600">Transparent Communication</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-gray-600">Post-Service Support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-gray-600">Professional Documentation</span>
                    </div>
                  </div>
                </div>
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
                  <ul className="space-y-3">
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
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.documents.map((doc, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Process Steps */}
            {service.process && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-[#3AA6FF]" />
                    Our Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-[#3AA6FF] text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Step {index + 1}</h4>
                          <p className="text-gray-600 text-sm">{step}</p>
                        </div>
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
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
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
            {/* Service Information */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Service Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {service.timeline && (
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-[#3AA6FF]" />
                      <span className="text-sm font-medium">Processing Time</span>
                    </div>
                    <span className="text-sm text-gray-600">{service.timeline}</span>
                  </div>
                )}
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-sm font-medium">Service Type</span>
                  <span className="text-sm text-gray-600">{service.category}</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-sm font-medium">Coverage</span>
                  <span className="text-sm text-gray-600">Pan India</span>
                </div>
                
                <div className="pt-4 space-y-3">
                  <Button className="w-full bg-[#3AA6FF] hover:bg-[#2690E6] text-white" asChild>
                    <Link href="/contact">
                      Get Information
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Contact us for detailed information about this service
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Professional Consultation */}
            <Card className="bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Need Professional Guidance?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Our experienced CS professionals are here to guide you through the process and answer all your questions.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Free Initial Consultation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Expert Professional Advice</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Complete Process Guidance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <ContactForm 
              title="Request Information" 
              showServices={false}
              className="border-0 shadow-md"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
