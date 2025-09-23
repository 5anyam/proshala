import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ServiceCard } from "@/components/ui/service-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services, serviceCategories, getServicesByCategory } from "@/lib/data/services";
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Users, 
  Shield, 
  FileText,
  Building2,
  Scale,
  RefreshCw,
  CheckCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: 'Professional CS Services - CS Praveen Kumar | Company Secretary & Compliance',
  description: 'Comprehensive Company Secretary services including company registration, NCLT matters, annual compliance, trademark registration, and corporate law solutions by CS Praveen Kumar.',
  keywords: 'company secretary services, company registration, NCLT, annual compliance, trademark, corporate law, ROC filing, CS Praveen Kumar',
};

const whyChooseFeatures = [
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Extensive experience in Company Secretary services"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Qualified CS professionals with proven track record"
  },
  {
    icon: Shield,
    title: "100% Compliance",
    description: "Perfect regulatory compliance across all services"
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "On-time completion with proactive updates"
  }
];

const serviceStats = [
  {
    number: "500+",
    label: "Clients Served",
    description: "Businesses across various industries"
  },
  {
    number: "22+",
    label: "Services",
    description: "Comprehensive CS service portfolio"
  },
  {
    number: "10+",
    label: "Years",
    description: "Professional experience in CS domain"
  },
  {
    number: "100%",
    label: "Success Rate",
    description: "Perfect compliance track record"
  }
];

const industryExpertise = [
  "Manufacturing Companies",
  "Technology Startups", 
  "Healthcare Organizations",
  "Financial Services",
  "Educational Institutions",
  "NGOs and Trusts",
  "Trading Companies",
  "Service Providers"
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Professional CS Services"
        description="Comprehensive Company Secretary and compliance services for businesses across India"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services" }
        ]}
      />

      <Section>
        <Container>
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Services Content */}
            <div className="lg:col-span-3">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Professional Company Secretary Services by CS Praveen Kumar
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                  <p>
                    CS Praveen Kumar provides comprehensive Company Secretary services to businesses across India, 
                    ensuring complete regulatory compliance and professional corporate governance. Our team of 
                    qualified CS professionals has extensive experience in handling complex corporate matters, 
                    from simple business registrations to intricate NCLT proceedings.
                  </p>
                  <p>
                    We specialize in providing end-to-end solutions for company incorporation, annual compliances, 
                    corporate restructuring, and specialized approvals. Our client-centric approach ensures 
                    personalized service delivery with complete transparency and timely execution.
                  </p>
                  <p>
                    With over 10+ years of experience in the CS domain, we have successfully served 500+ clients 
                    across various industries, maintaining a perfect track record of regulatory compliance and 
                    professional service delivery.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Why Choose CS Praveen Kumar?
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {whyChooseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Categories */}
              <div className="space-y-12">
                {serviceCategories.map((category) => {
                  const categoryServices = getServicesByCategory(category);
                  return (
                    <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')}>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b-2 border-[#3AA6FF] pb-2">
                        {category}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {categoryServices.map((service) => (
                          <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.shortDesc}
                            href={`/services/${service.slug}`}
                            category={service.category}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Professional Approach */}
              <div className="mt-16 bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Professional Approach</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Documentation</h4>
                    <p className="text-gray-600 text-sm">Complete and accurate documentation for all regulatory requirements</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Compliance</h4>
                    <p className="text-gray-600 text-sm">Ensuring 100% regulatory compliance across all service deliveries</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Support</h4>
                    <p className="text-gray-600 text-sm">Continuous support and guidance throughout the service lifecycle</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Informational */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Information Card */}
                <Card className="bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] text-white">
                  <CardHeader>
                    <CardTitle className="text-white">Get Professional Consultation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-blue-100 text-sm">
                      Contact our experienced CS professionals for personalized guidance and detailed information about our services.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-3" />
                        <span>+91 9876543210</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 mr-3" />
                        <span>contact@cspraveenkumar.in</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-3" />
                        <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
                      </div>
                    </div>

                    <Button asChild variant="secondary" className="w-full bg-white text-[#3AA6FF] hover:bg-gray-100">
                      <Link href="/contact">
                        Contact Us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Service Statistics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Our Track Record</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {serviceStats.map((stat, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <div>
                          <div className="text-2xl font-bold text-[#3AA6FF]">{stat.number}</div>
                          <div className="text-sm font-medium text-gray-900">{stat.label}</div>
                          <div className="text-xs text-gray-500">{stat.description}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Industry Expertise */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Industry Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      We serve businesses across various industries:
                    </p>
                    <div className="space-y-2">
                      {industryExpertise.map((industry, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          <span>{industry}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Services Quick Links */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Popular Services</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-1">
                      {services.slice(0, 8).map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="block px-6 py-2 text-sm text-gray-600 hover:text-[#3AA6FF] hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          {service.title}
                        </Link>
                      ))}
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
                        <Award className="h-4 w-4 text-[#3AA6FF] mr-2" />
                        <span className="text-gray-600">Qualified Company Secretary</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="h-4 w-4 text-[#3AA6FF] mr-2" />
                        <span className="text-gray-600">ICSI Registered Professional</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-[#3AA6FF] mr-2" />
                        <span className="text-gray-600">10+ Years Experience</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#3AA6FF] mr-2" />
                        <span className="text-gray-600">Pan India Service Coverage</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
