import { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ui/contact-form";
import { services, serviceCategories, getServicesByCategory } from "@/lib/data/services";

export const metadata: Metadata = {
  title: 'CS Services - Company Registration, NCLT, Compliance & More',
  description: 'Comprehensive Company Secretary services including company registration, NCLT matters, annual compliance, trademark registration, and corporate law solutions.',
  keywords: 'company secretary services, company registration, NCLT, annual compliance, trademark, corporate law, ROC filing',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive Company Secretary and compliance services for all your business needs"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services" }
        ]}
      />

      <Section>
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Services Content */}
          <div className="lg:col-span-3">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Professional CS Services for Your Business Growth
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We provide end-to-end Company Secretary services to ensure your business stays compliant 
                with all regulatory requirements. Our team of qualified CS professionals has extensive 
                experience in handling complex corporate matters, from simple registrations to intricate 
                NCLT proceedings.
              </p>
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
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar - Sticky Enquire Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ContactForm 
                title="Enquire Now"
                className="mb-8"
              />
              
              {/* Quick Service Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular Services</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1">
                    {services.slice(0, 8).map((service) => (
                      <a
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="block px-6 py-2 text-sm text-gray-600 hover:text-[#3AA6FF] hover:bg-gray-50 transition-colors"
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}