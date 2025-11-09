// app/contact/page.tsx
import { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Zap,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Proshala - Digital Marketing Agency Delhi NCR | Get in Touch",
  description:
    "Contact Proshala for digital marketing, performance marketing, website development services in Delhi NCR. Free strategy call available. Email: hello@proshala.com",
  keywords:
    "contact Proshala, digital marketing agency Delhi NCR, performance marketing consultation, web development Delhi, get in touch",
  openGraph: {
    title: "Contact Proshala - Digital Marketing Agency Delhi NCR",
    description: "Get in touch for digital marketing and web development services.",
    type: "website",
  },
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Delhi NCR, India", "Serving Nationwide"],
    description: "Remote-first with on-site meetings",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91-9999774046"],
    description: "Mon-Fri 9AM-7PM IST",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@proshala.com"],
    description: "Response within 24 hours",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    description: "Sunday: Closed",
  },
];

const services = [
  "Website Development",
  "Performance Marketing",
  "Social Media Management",
  "SEO & Content Strategy",
  "Branding & Design",
  "Influencer Marketing",
];

const whyChoose = [
  {
    icon: Zap,
    title: "Fast Response",
    description: "Strategy call within 24 hours of inquiry",
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "No hidden fees or bloated retainers",
  },
  {
    icon: Shield,
    title: "Proven Results",
    description: "150+ successful campaigns since 2020",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #FACC15 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto max-w-7xl px-5 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FACC15]/20 text-[#FACC15] text-sm font-semibold mb-4 uppercase tracking-wide">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Let us Build Something{" "}
              <span className="text-[#FACC15]">Great Together</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Book a free 30-minute strategy call. No fluff, just honest
              recommendations on how we can help you scale.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Contact Form/Info */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Proshala</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  A results driven digital marketing agency helping brands across
                  Delhi NCR grow through performance marketing, web development and
                  creative execution. Founded in 2020, we have delivered 150+ projects
                  for startups, e-commerce brands and enterprises.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Whether you need a high converting website, Google Ads campaigns
                  with measurable ROAS, or a full-stack social media strategy—we
                  bring data-backed execution and transparent reporting.
                </p>
              </div>

              {/* Contact Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6 hover:border-[#FACC15] transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#FACC15]/20 text-[#FACC15]">
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <div key={idx} className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {info.title === "Phone" ? (
                              <a
                                href={`tel:${detail}`}
                                className="hover:text-[#FACC15] transition-colors"
                              >
                                {detail}
                              </a>
                            ) : info.title === "Email" ? (
                              <a
                                href={`mailto:${detail}`}
                                className="hover:text-[#FACC15] transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </div>
                        ))}
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 italic">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map/Location Visual */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <div className="bg-gray-100 dark:bg-gray-900 p-8 text-center">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-[#FACC15]" />
                  <h3 className="text-xl font-bold mb-2">Delhi NCR</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Remote-first agency serving clients across India
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    On-site meetings available in Delhi, Noida, Gurgaon
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact CTA */}
              <div className="rounded-2xl bg-gradient-to-br from-[#FACC15] to-[#EAB308] p-8 text-black">
                <h3 className="text-xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="mb-6 text-gray-900">
                  Schedule a free strategy call and get actionable recommendations
                  on scaling your business.
                </p>

                <div className="space-y-3 mb-6">
                  <a
                    href="tel:+919999774046"
                    className="flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-semibold text-white hover:bg-gray-900 transition-all"
                  >
                    <Phone className="h-4 w-4" />
                    Call: +91-9999774046
                  </a>

                  <a
                    href="mailto:info@proshala.com"
                    className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black hover:bg-gray-100 transition-all"
                  >
                    <Mail className="h-4 w-4" />
                    info@proshala.com
                  </a>
                </div>

                <p className="text-xs text-gray-900 text-center">
                  Available Mon-Fri, 9AM-7PM IST
                </p>
              </div>

              {/* Why Choose */}
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-6">
                <h4 className="text-lg font-bold mb-6">Why Proshala?</h4>
                <div className="space-y-4">
                  {whyChoose.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#FACC15]/20 text-[#FACC15]">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-1">{item.title}</h5>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services List */}
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-6">
                <h4 className="text-lg font-bold mb-4">Our Services</h4>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <div className="h-2 w-2 rounded-full bg-[#FACC15]" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#FACC15] hover:underline"
                  >
                    View All Services
                    <Send className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Stats */}
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-6">
                <h4 className="text-lg font-bold mb-4">By the Numbers</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-[#FACC15]">150+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Projects Delivered
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#FACC15]">80+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Happy Clients
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#FACC15]">6+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Years in Business
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Quick answers about our process, pricing, and how we work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: "How much do your services cost?",
                a: "Pricing varies by scope—website development starts at ₹50K, performance marketing retainers from ₹25K/month. We'll provide a detailed quote after the strategy call.",
              },
              {
                q: "Do you work with startups?",
                a: "Yes! Over 50% of our clients are funded startups. We understand tight budgets and rapid timelines—so we optimize for speed and scrappy execution.",
              },
              {
                q: "What's your process?",
                a: "Discovery call → Strategy doc → Proposal → Kickoff → Weekly sprints with transparent dashboards. We don't believe in black-box agencies.",
              },
              {
                q: "How long does a project take?",
                a: "Website: 3-6 weeks. PPC campaigns: Live in 1 week. Social media: 2 weeks for strategy + content. Timelines depend on scope and client feedback speed.",
              },
              {
                q: "Do you sign NDAs?",
                a: "Absolutely. We sign mutual NDAs before sharing any client data or proprietary strategies. Your IP and confidentiality are protected.",
              },
              {
                q: "Can we schedule an in-person meeting?",
                a: "Yes, for Delhi NCR clients. We're remote-first but available for on-site meetings, workshops, or brand photoshoots when needed.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-6 hover:border-[#FACC15] transition-all"
              >
                <h3 className="font-bold mb-3">{faq.q}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="text-center mt-12">
            <div className="inline-block rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 p-8 max-w-2xl">
              <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Schedule a call and we will walk you through our process, pricing, and
                how we can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="inline-flex items-center justify-center rounded-full bg-[#FACC15] px-8 py-3 font-bold text-black hover:bg-[#EAB308] transition-all"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
                <a
                  href="mailto:hello@proshala.com"
                  className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 px-8 py-3 font-bold hover:bg-gray-100 dark:hover:bg-gray-900 transition-all"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
