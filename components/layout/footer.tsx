// components/layout/footer.tsx
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  ArrowRight,
} from "lucide-react";

const services = [
  { name: "Website Development", href: "/services/website-development" },
  { name: "Performance Marketing", href: "/services/performance-marketing" },
  { name: "Social Media Management", href: "/services/social-media-management" },
  { name: "Influencer Marketing", href: "/services/influencer-marketing" },
  { name: "SEO & Content", href: "/services/seo" },
  { name: "Branding & Creatives", href: "/services/branding" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blogs" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/proshalatech", icon: Linkedin },
  { name: "Instagram", href: "https://www.instagram.com/proshalatech", icon: Instagram },
  { name: "Twitter", href: "https://twitter.com/proshalatech", icon: Twitter },
  { name: "Facebook", href: "https://www.facebook.com/proshalatech", icon: Facebook },
];

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-900">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <Image
                src="/Proshala-logo.png"
                alt="Proshala"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="font-bold text-xl">Proshala</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Results driven digital marketing agency based in Delhi NCR. From freelancer
              in 2019 to digial marketing agency delivering measurable growth through
              performance marketing, web development and creative excellence.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#FACC15] mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <div>Delhi NCR, India</div>
                  <div>Serving Nationwide</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#FACC15]" />
                <a
                  href="tel:+919999774046"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  +91-9999774046
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#FACC15]" />
                <a
                  href="mailto:info@proshala.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  info@proshala.com
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-gray-400 hover:bg-[#FACC15] hover:text-black transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center text-sm text-gray-400 hover:text-[#FACC15] transition-colors"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links column */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-gray-400 hover:text-[#FACC15] transition-colors"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter column */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-white">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get insights on digital marketing, growth strategies, and industry updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-[#FACC15] focus:outline-none focus:ring-2 focus:ring-[#FACC15]/20"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-lg bg-[#FACC15] px-4 py-2.5 font-semibold text-black hover:bg-[#EAB308] transition-all"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>

            {/* Business hours */}
            <div className="mt-6 rounded-lg bg-gray-900 border border-gray-800 p-4">
              <h4 className="text-sm font-semibold text-white mb-2">Business Hours</h4>
              <div className="space-y-1 text-xs text-gray-400">
                <div>Mon - Fri: 9:00 AM - 7:00 PM</div>
                <div>Sat: 10:00 AM - 4:00 PM</div>
                <div>Sun: Closed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-900">
        <div className="mx-auto max-w-7xl px-5 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Proshala. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-500 hover:text-[#FACC15] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-500 hover:text-[#FACC15] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-sm text-gray-500 hover:text-[#FACC15] transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
