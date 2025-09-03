import { Metadata } from "next";
import { Download, Award, Users, Clock, Trophy } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'About CSPKIndia - Leading Company Secretary Firm',
  description: 'Learn about CSPKIndia, a leading Company Secretary firm with 10+ years of experience in providing comprehensive CS and compliance services across India.',
  keywords: 'about CSPKIndia, company secretary firm, CS services, compliance experts, corporate law',
};

const stats = [
  { icon: Users, number: "500+", label: "Happy Clients" },
  { icon: Trophy, number: "10+", label: "Years Experience" },
  { icon: Award, number: "100%", label: "Success Rate" },
  { icon: Clock, number: "24/7", label: "Support" }
];

const timeline = [
  {
    year: "2014",
    title: "Company Founded",
    description: "Started with a vision to provide quality CS services to growing businesses"
  },
  {
    year: "2017",
    title: "Team Expansion",
    description: "Expanded team with qualified CS professionals and legal experts"
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Adopted digital processes for faster and more efficient service delivery"
  },
  {
    year: "2024",
    title: "Market Leader",
    description: "Established as a leading CS firm with 500+ satisfied clients across India"
  }
];

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in every service we provide, ensuring 100% accuracy and compliance."
  },
  {
    title: "Integrity", 
    description: "We maintain the highest standards of integrity and transparency in all our business dealings."
  },
  {
    title: "Innovation",
    description: "We continuously innovate our processes to provide efficient and modern solutions."
  },
  {
    title: "Client Focus",
    description: "Our clients are at the center of everything we do. Their success is our success."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About CSPKIndia"
        description="Your trusted partner for comprehensive Company Secretary and compliance services"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About" }
        ]}
      />

      {/* Company Overview */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Leading CS Firm Since 2014
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              CSPKIndia is a premier Company Secretary firm established with the mission to provide comprehensive 
              compliance and legal services to businesses across India. With over a decade of experience, we have 
              successfully served 500+ clients ranging from startups to established corporations.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our team of qualified Company Secretaries and legal experts ensures that your business stays 
              compliant with all regulatory requirements while you focus on growth and innovation. We pride 
              ourselves on delivering accurate, timely, and cost-effective solutions.
            </p>
            <Button size="lg" asChild className="bg-[#3AA6FF] hover:bg-[#2690E6] text-white">
              <Link href="/cspkindia-profile.pdf" target="_blank">
                <Download className="mr-2 h-5 w-5" />
                Download Firm Profile
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

      {/* Mission & Vision */}
      <Section className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted Company Secretary firm in India by providing comprehensive, 
                accurate, and timely compliance services that enable businesses to operate with 
                confidence and focus on their core objectives. We aim to simplify complex regulatory 
                requirements and make compliance hassle-free for our clients.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become India's leading CS firm known for excellence, innovation, and client 
                satisfaction. We envision a future where every business, regardless of size, 
                has access to professional CS services that ensure complete regulatory compliance 
                and support sustainable growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Company Values */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These values guide everything we do and define how we serve our clients
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

      {/* Company Timeline */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A decade of growth, innovation, and client success
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">CS</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">CS Professional {index + 1}</h3>
                <p className="text-[#3AA6FF] font-medium mb-3">Managing Partner</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Qualified Company Secretary with 10+ years of experience in corporate compliance, 
                  NCLT matters, and regulatory affairs. Specializes in complex corporate restructuring 
                  and merger & acquisition transactions.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}