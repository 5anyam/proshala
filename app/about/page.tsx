// app/about/page.tsx
import { Metadata } from "next";
import { Calendar, TrendingUp, Users, Target, Award, Zap, Heart, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Proshala - Digital Marketing Agency Delhi NCR | Our Story",
  description:
    "Founded in 2020, Proshala is a leading digital marketing agency in Delhi NCR. From a college freelancer in 2019 to a full-service agency—helping 80+ brands grow through performance marketing and web development.",
  keywords:
    "about Proshala, digital marketing agency Delhi, agency story, team, founder, Delhi NCR marketing, performance marketing experts",
};

const stats = [
  { icon: Calendar, number: "2020", label: "Founded" },
  { icon: Users, number: "80+", label: "Clients Served" },
  { icon: TrendingUp, number: "150+", label: "Projects Delivered" },
  { icon: Award, number: "10+", label: "Team Members" },
];

const timeline = [
  {
    year: "2019",
    title: "The Beginning",
    description:
      "Started as a freelance web developer during college, building websites for local businesses across Delhi NCR. First client was a PhD Thesis Writing Service Company in Rohini.",
  },
  {
    year: "Jan 2020",
    title: "Proshala Launch",
    description:
      "Founded Proshala as a full-service digital marketing agency. Pivoted to remote operations during COVID and expanded service offerings to performance marketing.",
  },
  {
    year: "2021",
    title: "Team Growth",
    description:
      "Expanded to a team of 3—added performance marketing, social media management and SEO capabilities. Delivered first e-commerce project with 3x ROI.",
  },
  {
    year: "2022",
    title: "50+ Projects Milestone",
    description:
      "Crossed 50 projects across education, e-commerce and healthcare. Established SOPs and built internal project management systems for scalability.",
  },
  {
    year: "2023",
    title: "Enterprise Clientele",
    description:
      "Onboarded first enterprise clients in fintech and SaaS. Launched influencer marketing vertical with 100+ creator partnerships.",
  },
  {
    year: "2024",
    title: "Scale & Expansion",
    description:
      "Crossed ₹1Cr revenue milestone. Team grew to 15+ members. Launched dedicated branding and creative studio.",
  },
  {
    year: "2025",
    title: "Innovation & SaaS",
    description:
      "Built internal SaaS tools for client reporting and campaign automation. Focused on AI-driven marketing strategies for hyper-targeted campaigns.",
  },
];

const values = [
  {
    icon: Target,
    title: "Data-First",
    description:
      "Every campaign is backed by analytics, A/B testing and clear performance metrics—no vanity metrics, only revenue impact.",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "Rapid prototyping and agile execution—from concept to launch in weeks, not months. Built for startups and scale-ups.",
  },
  {
    icon: Heart,
    title: "Transparency",
    description:
      "Weekly dashboards, monthly reviews, and real-time access to campaign performance. You own your data, always.",
  },
  {
    icon: Shield,
    title: "Long-term Partnerships",
    description:
      "We're not a vendor—we're an extension of your team. Average client retention: 2+ years with consistent growth YoY.",
  },
];

const services = [
  "Website Development",
  "Performance Marketing",
  "Social Media Management",
  "Influencer Marketing",
  "SEO & Content",
  "Branding & Creatives",
  "Email & Automation",
  "Analytics & Reporting",
];

export default function AboutPage() {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#FACC15]/20 text-[#FACC15] text-sm font-semibold mb-4 uppercase tracking-wide">
                Since 2020
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                From College Dorm to{" "}
                <span className="text-[#FACC15]">Full-Service Agency</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Started as a freelance web developer in 2019, Proshala is now a
                full service digital marketing agency helping 80+ brands across Delhi
                NCR grow through performance marketing, web development and creative
                excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-[#FACC15] px-8 py-4 font-bold text-black hover:bg-[#EAB308] transition-all hover:scale-105"
                >
                  Work With Us
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center rounded-full border-2 border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-black transition-all"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FACC15] text-black mb-4">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Proshala team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-semibold">
                  Building strategies that drive real business growth
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Why We Exist
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Most agencies talk about brand awareness and engagement. We talk
                about revenue, CAC, LTV and ROAS—because that is what actually
                matters to your business.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Proshala was born out of frustration with opaque pricing, bloated
                retainers and campaigns optimized for vanity metrics instead of
                business outcomes. We are a team of builders and operators who have
                scaled businesses from zero to millions and now we apply that
                playbook to yours.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Whether you are a funded startup, e-commerce brand, or established
                enterprise. we bring full-funnel marketing execution backed by
                transparent reporting and strategic thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Our <span className="text-[#FACC15]">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From freelance hustle to agency scale 6 years of growth, learning and
              client success.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />

            {timeline.map((item, index) => (
              <div key={index} className="relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-[#FACC15] border-4 border-white dark:border-gray-900" />
                <div className="rounded-xl bg-white dark:bg-black p-6 border border-gray-200 dark:border-gray-800 hover:border-[#FACC15] transition-colors">
                  <span className="text-sm font-bold text-[#FACC15]">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              How We <span className="text-[#FACC15]">Work</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our principles guide every campaign, every client relationship and
              every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#FACC15]/20 text-[#FACC15] mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              What We <span className="text-[#FACC15]">Do</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Full-funnel digital marketing from strategy to execution.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((service, index) => (
              <span
                key={index}
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:border-[#FACC15] hover:bg-[#FACC15]/5 transition-all text-sm font-medium"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full bg-[#FACC15] px-8 py-4 font-bold text-black hover:bg-[#EAB308] transition-all hover:scale-105"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                Meet the <span className="text-[#FACC15]">Team</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                We are a team of 15+ marketers, developers, designers and strategists
                who have worked at startups, agencies and in house teams across
                e-commerce, SaaS and fintech.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                Everyone at Proshala has shipped real campaigns, built real products,
                or scaled real businesses. so we bring operator mindset to every
                client engagement.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-[#FACC15] font-semibold hover:underline"
              >
                Join the team →
              </Link>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Proshala team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#FACC15] to-[#EAB308]">
        <div className="container mx-auto max-w-4xl px-5 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
            Lets Build Something Great
          </h3>
          <p className="text-lg text-gray-900 mb-8 max-w-2xl mx-auto">
            Book a free strategy call and see how we can help you scale no fluff,
            just honest recommendations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-black px-8 py-4 font-bold text-white hover:bg-gray-900 transition-all hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
