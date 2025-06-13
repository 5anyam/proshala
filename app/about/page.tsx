
import Image from 'next/image';

export default function AboutUs() {
  return (
    <main className="bg-gray-50 py-16 px-6 md:px-6 lg:px-8">
      <section className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-700">
          At <strong>Proshala</strong>, we’re a results-driven Ed‑Tech agency committed to propelling learners toward success with personalized guidance, quality study materials, and unwavering mentorship.
        </p>
      </section>

      <section className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-2">
        {/* Vision */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To democratize education by making high-quality learning accessible and affordable to students across India — empowering them to build meaningful careers.
          </p>
        </div>
        {/* Mission */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To support students at each stage of their journey with innovative digital tools, structured study plans, and personal mentorship that fosters growth and confidence.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-16 space-y-12">
        {/* Services */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">What We Do</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>🎯 Customized career counseling and assessment sessions</li>
            <li>📚 Curated study material, mock tests, and exam strategies</li>
            <li>👨‍🏫 One-on-one mentorship and peer study groups</li>
            <li>🏆 Progress tracking and performance analytics</li>
          </ul>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Core Values</h3>
          <div className="space-y-4 text-gray-700">
            <p><strong>Integrity:</strong> Transparent guidance, honest feedback, and ethical practices.</p>
            <p><strong>Empathy:</strong> We listen to students struggles and tailor solutions that resonate.</p>
            <p><strong>Innovation:</strong> We keep our tools and methods up to date to match learner needs.</p>
            <p><strong>Excellence:</strong> We set high standards and celebrate progress every step of the way.</p>
          </div>
        </div>

        {/* Team (placeholder images) */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Meet the Team</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Replace src and names with real team data */}
            {['Founder', 'Mentor', 'Designer', 'Tech Lead'].map((role, i) => (
              <div key={i} className="text-center">
                <Image
                  src={`/team/member${i + 1}.jpg`}
                  alt={role}
                  width={120}
                  height={120}
                  className="rounded-full object-cover mx-auto"
                />
                <p className="mt-2 font-medium">{role} Name</p>
                <p className="text-sm text-gray-500">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mt-16 bg-blue-50 border-l-4 border-blue-400 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Why Choose Proshala?</h3>
        <p className="text-blue-900 text-lg leading-relaxed">
          We are more than a platform we are your career companion. With tailored support, community-driven engagement, and data-based insights, we help you not just learn—but thrive.
        </p>
      </section>

      <section className="max-w-3xl mx-auto mt-12 text-center">
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
