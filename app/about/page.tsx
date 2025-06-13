// app/about-us/page.tsx

import Image from 'next/image';

export default function AboutUs() {
  return (
    <main className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-700">
          Since 2020, <strong>Proshala</strong> has been empowering brands with performance-driven digital marketing services. From startups to enterprises, we craft strategies that convert and campaigns that captivate.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-2">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To become a trusted growth partner for businesses by delivering innovative digital solutions that drive measurable success.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To provide tailored marketing strategies using SEO, paid ads, content, and branding — helping clients build presence, authority, and sales online.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="max-w-4xl mx-auto mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>📈 SEO (Search Engine Optimization)</li>
          <li>💰 Paid Advertising (Google Ads, Meta Ads, LinkedIn)</li>
          <li>🎨 Branding & Design Services</li>
          <li>📱 Social Media Marketing & Management</li>
          <li>📝 Content Creation (Copywriting, Blogs, Reels)</li>
          <li>🌐 Website Development & Landing Pages</li>
        </ul>
      </section>

      {/* Core Values */}
      <section className="max-w-4xl mx-auto mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div><strong>Transparency:</strong> Clear communication at every step.</div>
          <div><strong>Results:</strong> ROI-focused strategies and reporting.</div>
          <div><strong>Innovation:</strong> Staying ahead with trends & tech.</div>
          <div><strong>Client-First:</strong> We grow only when our clients do.</div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-5xl mx-auto mt-16 bg-white rounded-xl shadow-md p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Meet Our Team</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {['Founder', 'Media Head', 'SEO Lead', 'Creative Director'].map((role, i) => (
            <div key={i} className="text-center">
              <Image
                src={`/team/member${i + 1}.jpg`} // Replace with real paths
                alt={role}
                width={120}
                height={120}
                className="rounded-full object-cover mx-auto"
              />
              <p className="mt-2 font-medium">{role}</p>
              <p className="text-sm text-gray-500">Team Proshala</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Brands Choose Us */}
      <section className="max-w-3xl mx-auto mt-16 bg-blue-50 border-l-4 border-yellow-400 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Why Brands Choose Proshala?</h3>
        <p className="text-blue-900 text-lg leading-relaxed">
          We’re not just a marketing agency — we’re a growth partner. Whether it’s scaling ad campaigns or building your brand from scratch, we’re obsessed with driving real results.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto mt-12 text-center">
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-yellow-500 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
        >
          Let's Work Together
        </a>
      </section>
    </main>
  );
}
