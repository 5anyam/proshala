import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageSquare, Building2, Users, Shield } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const metadata: Metadata = {
  title: 'Contact Us - CS Praveen Kumar | Professional Company Secretary Services',
  description: 'Get in touch with CS Praveen Kumar for professional Company Secretary services. Located in Delhi with expert CS consultation and compliance solutions.',
  keywords: 'contact CS Praveen Kumar, company secretary Delhi, CS services contact, professional consultation',
};


const contactInfo = [
  {
    icon: Building2,
    title: "Office Address",
    details: [
      "M/s Praveen K & Associates",
      "(Company Secretaries)",
      "D-7/296, 2nd Floor, Sector-6",
      "Rohini, New Delhi - 110086"
    ],
    description: "Visit us during business hours for consultation"
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91 8800343499", "+91 9868428811"],
    description: "Available Mon-Sat 10:00 AM to 7:00 PM"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    details: ["+91 9811657065"],
    description: "Quick responses on WhatsApp"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@cspkindia.com"],
    description: "We'll respond within 24 hours"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Saturday: 10:00 AM - 7:00 PM"
    ],
    description: "Sunday: Closed"
  }
];


const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Qualified Company Secretaries with 7+ years experience"
  },
  {
    icon: Shield,
    title: "100% Compliance",
    description: "Perfect track record in regulatory compliance"
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "On-time delivery with proactive updates"
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Always available for urgent consultations"
  }
];


const serviceAreas = [
  "Company Registration & Incorporation",
  "NCLT Matters & Corporate Restructuring", 
  "Annual Compliance & ROC Filings",
  "Trademark Registration & IPR",
  "Conversion Services",
  "Strike Off Services",
  "Secretarial Audit",
  "Regional Director Approvals"
];


export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact M/s Praveen K & Associates"
        description="Get professional consultation and services from experienced professionals"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact" }
        ]}
      />


      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                M/s Praveen K & Associates
              </h2>
              <p className="text-lg text-gray-600 mb-2">(Company Secretaries)</p>
              <p className="text-lg text-gray-600 mb-2">(Peer Reviewed)</p>
              <p className="text-gray-600 leading-relaxed">
                With over 7+ years of experience in Company Secretary services, we provide comprehensive 
                professional solutions for all your compliance and regulatory needs. Our team of qualified 
                professionals ensures 100% compliance and timely service delivery across India.
              </p>
            </div>


            {/* Contact Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-3">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <div key={idx} className="text-gray-600 mb-1 text-sm">
                          {info.title === "Phone Numbers" || info.title === "WhatsApp" ? (
                            <a 
                              href={`tel:${detail}`} 
                              className="hover:text-[#3AA6FF] transition-colors cursor-pointer"
                            >
                              {detail}
                            </a>
                          ) : info.title === "Email" ? (
                            <a 
                              href={`mailto:${detail}`} 
                              className="hover:text-[#3AA6FF] transition-colors cursor-pointer"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </div>
                      ))}
                      <p className="text-xs text-gray-500 mt-2 italic">{info.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>


            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-[#3AA6FF]" />
                  Our Location - Delhi
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-b-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-[#3AA6FF]" />
                    <p className="font-medium text-lg mb-2">Rohini, New Delhi</p>
                    <p className="text-sm">D-7/296, 2nd Floor, Sector-6</p>
                    <p className="text-sm">Rohini, New Delhi - 110086</p>
                    <p className="text-xs text-gray-500 mt-3">Google Maps integration available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>


          {/* Sidebar Information */}
          <div className="space-y-6">
            {/* Quick Contact CTA */}
            <Card className="bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Need Immediate Consultation?</h3>
                <p className="text-blue-100 text-sm mb-6">
                  Contact our CS experts directly for professional guidance and quick solutions.
                </p>
                
                <div className="space-y-3 mb-6">
                  <Button 
                    asChild 
                    variant="secondary" 
                    className="w-full bg-white text-[#3AA6FF] hover:bg-gray-100"
                  >
                    <a href="tel:+918800343499" className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Call: +91 8800343499
                    </a>
                  </Button>
                  
                  <Button 
                    asChild 
                    variant="secondary" 
                    className="w-full bg-white text-[#3AA6FF] hover:bg-gray-100"
                  >
                    <a 
                      href="https://wa.me/919811657065" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      WhatsApp: +91 9811657065
                    </a>
                  </Button>
                </div>
                
                <p className="text-xs text-blue-100 text-center">
                  Available Mon-Sat, 9:00 AM - 6:00 PM
                </p>
              </CardContent>
            </Card>


            {/* Why Choose Us */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Why Choose CS Praveen Kumar?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-[#3AA6FF]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>


            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Our Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {serviceAreas.map((service, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#3AA6FF] rounded-full mr-3 flex-shrink-0"></div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/services">View All Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>


            {/* Professional Credentials */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Professional Credentials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-[#3AA6FF] mr-2" />
                    <span className="text-gray-600">ICSI Qualified Company Secretary</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-[#3AA6FF] mr-2" />
                    <span className="text-gray-600">7+ Years Professional Experience</span>
                  </div>
                  <div className="flex items-center">
                    <Building2 className="h-4 w-4 text-[#3AA6FF] mr-2" />
                    <span className="text-gray-600">500+ Successful Cases</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-[#3AA6FF] mr-2" />
                    <span className="text-gray-600">100% Compliance Track Record</span>
                  </div>
                </div>
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
            Quick answers to common questions about our CS services and consultation process
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              question: "How can I schedule a consultation?", 
              answer: "We're available Mon-Sat, 10:00 AM - 7:00 PM for immediate consultation."
            },
            {
              question: "Do you provide services across India?",
              answer: "Yes, we provide Company Secretary services across India. While our office is in Delhi, we handle matters whole India through our professional network."
            },
            {
              question: "What are your consultation charges?",
              answer: "Initial consultation is free for new clients. For detailed service charges, please contact us directly as fees vary based on service complexity and requirements."
            },
            {
              question: "How quickly can you start working on my case?",
              answer: "We can start immediately after initial consultation and documentation. Most services begin within 1-2 working days of receiving complete requirements."
            },
            {
              question: "Do you handle urgent compliance matters?",
              answer: "Yes, we handle urgent ROC filings and compliance matters. Contact us immediately for time-sensitive cases - we provide expedited services when needed."
            },
            {
              question: "Can I visit your office for consultation?",
              answer: "Absolutely! Our office is located in Rohini, Delhi. Please call ahead to schedule an appointment to ensure our CS team is available for your consultation."
            }
          ].map((faq, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
            </Card>
          ))}
        </div>


        {/* Contact CTA */}
        <div className="text-center mt-12">
          <Card className="inline-block p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our CS experts are ready to provide personalized guidance for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#3AA6FF] hover:bg-[#2690E6]">
                <a href="tel:+918800343499">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://wa.me/919811657065" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
