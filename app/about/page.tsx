import { Metadata } from "next";
import { Download, Award, Users, Clock, Trophy, Building2, Scale, FileText } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'About CS Praveen Kumar - Leading Company Secretary Firm | Praveen K & Associates',
  description: 'Learn about Praveen K & Associates, a leading Company Secretary firm founded in 2018 by Mr. Praveen Kumar, providing comprehensive CS and compliance services across India.',
  keywords: 'about CS Praveen Kumar, Praveen K Associates, company secretary firm, CS services, compliance experts, corporate governance',
};

const stats = [
  { icon: Users, number: "500+", label: "Happy Clients" },
  { icon: Trophy, number: "7+", label: "Years Experience" },
  { icon: Award, number: "100%", label: "Success Rate" },
  { icon: Clock, number: "24/7", label: "Support" }
];

const timeline = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Praveen K & Associates was founded by Mr. Praveen Kumar with a vision to provide quality CS services to growing businesses"
  },
  {
    year: "2020",
    title: "Team Expansion", 
    description: "Expanded team with qualified CS professionals, Chartered Accountants, and Advocates for comprehensive services"
  },
  {
    year: "2022",
    title: "Digital Transformation",
    description: "Adopted digital processes for faster and more efficient service delivery across India"
  },
  {
    year: "2025",
    title: "Established Leader",
    description: "Recognized as a leading CS firm serving clients across diverse industries with expertise in corporate governance"
  }
];

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in every service we provide, ensuring 100% accuracy and compliance with all regulatory requirements."
  },
  {
    title: "Integrity", 
    description: "We maintain the highest standards of integrity and transparency in all our business dealings and client relationships."
  },
  {
    title: "Innovation",
    description: "We continuously innovate our processes to provide efficient and modern solutions for complex corporate challenges."
  },
  {
    title: "Trust",
    description: "Building longstanding relationships with our clients through reliable, ethical, and efficient professional services."
  }
];

const serviceAreas = [
  {
    icon: FileText,
    title: "Secretarial Services",
    description: "Comprehensive company secretarial services for all regulatory compliance needs"
  },
  {
    icon: Building2,
    title: "Corporate Advisory",
    description: "Strategic corporate advisory and management consultancy services"
  },
  {
    icon: Scale,
    title: "Legal Compliance",
    description: "Expert guidance in Direct & Indirect Tax Laws, IPR, and regulatory matters"
  }
];

const industries = [
  "Manufacturing", "Construction", "Insurance", "Banking", "Power", "Textiles",
  "Retail", "Commodities", "Healthcare", "Hospitality", "Media", "Information Technology"
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Praveen K & Associates"
        description="Leading Company Secretary firm providing comprehensive professional services since 2018"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About" }
        ]}
      />

      {/* Company Overview - Using exact content from document */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Leading CS Firm Since 2018
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Praveen K & Associates is a leading Company Secretary firm founded in 2018 by Mr. Praveen Kumar. 
              It provides comprehensive professional services which include Secretarial Services, Corporate Advisory, 
              Management Consultancy, Financial Management etc. to a large and wide variety of clients throughout India.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our clients include listed and non-listed companies and cover a broad spectrum of industries ranging 
              from manufacturing, construction, insurance, banking, power, textiles, retail, commodities, healthcare, 
              hospitality, media and information technology.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We are a team of young professionals, committed to provide quality professional services in a 
              time-bound manner and build a longstanding relationship with our clients.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We are an established firm of Practicing Company Secretaries providing various professional services 
              to both public and private companies. We are acknowledged experts in all areas of company secretarial 
              practice, Merger and Acquisitions, Intellectual Property Rights (IPR), Direct and Indirect Tax Laws. 
              Our team consists of Company Secretaries and other Professional Associates such as Chartered Accountants, and Advocates.
            </p>
            <Button size="lg" asChild className="bg-[#3AA6FF] hover:bg-[#2690E6] text-white">
              <Link href="/contact">
                <Download className="mr-2 h-5 w-5" />
                Get Professional Consultation
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Mission & Vision - Using exact content from document */}
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8 border-l-4 border-[#3AA6FF]">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to deliver trusted, ethical, and efficient corporate governance and compliance 
                solutions that empower businesses to operate with transparency, integrity, and legal confidence. 
                We strive to be a reliable partner to our clients, ensuring seamless adherence to statutory 
                requirements while fostering sustainable growth and stakeholder trust.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8 border-l-4 border-[#2690E6]">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative corporate governance partner, recognized for excellence 
                in compliance, strategic advisory, and ethical business practices — enabling organizations to 
                thrive in a transparent, responsible, and sustainable corporate environment.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Service Areas */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are acknowledged experts in all areas of company secretarial practice, providing comprehensive solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {serviceAreas.map((service, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Our Expertise Areas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-sm font-medium text-gray-700">Merger & Acquisitions</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-sm font-medium text-gray-700">Intellectual Property Rights (IPR)</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-sm font-medium text-gray-700">Direct & Indirect Tax Laws</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-sm font-medium text-gray-700">Corporate Governance</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-sm font-medium text-gray-700">Management Consultancy</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Company Values */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These values guide everything we do and define how we serve our clients with integrity and professionalism
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">{value.title.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Industries We Serve - Using exact list from document */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We serve clients across diverse industries, from listed to non-listed companies
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-[#3AA6FF] rounded-full mx-auto mb-2"></div>
              <span className="text-sm font-medium text-gray-700">{industry}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Company Timeline */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seven years of growth, innovation, and client success since 2018
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-center mb-8 last:mb-0">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-full flex items-center justify-center text-white font-bold text-lg mr-8">
                {item.year}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by qualified Company Secretaries with extensive experience in corporate law and compliance
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="text-center p-8 border-l-4 border-[#3AA6FF]">
            <CardContent className="p-0">
              <div className="w-32 h-32 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-3xl">PK</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Mr. Praveen Kumar</h3>
              <p className="text-[#3AA6FF] font-medium mb-4">Founder & Managing Partner</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Qualified Company Secretary and the visionary founder of Praveen K & Associates. With extensive 
                experience in corporate compliance, governance, and strategic advisory, Mr. Praveen Kumar leads 
                our team of young professionals committed to delivering quality services in a time-bound manner.
              </p>
              <div className="text-sm text-gray-500">
                <p>Company Secretary • Corporate Law Expert • Strategic Advisor</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Description - Using exact content from document */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Professional Team</h3>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Our team consists of Company Secretaries and other Professional Associates such as 
                Chartered Accountants and Advocates. We are a team of young professionals committed 
                to providing quality professional services in a time-bound manner and building longstanding 
                relationships with our clients.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
