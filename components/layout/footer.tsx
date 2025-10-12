import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageSquare, Facebook, Twitter, Linkedin, Instagram, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { serviceCategories } from "@/lib/data/services";


export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="relative w-full h-16">
                  <Image
                    src="/LOGO.png"
                    alt="CS Praveen Kumar Logo"
                    width={100}
                    height={100}
                    className="rounded-lg object-contain"
                  />
                </div>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                M/s Praveen K & Associates - Your trusted partner for Company Secretary & compliance services. 
                We provide comprehensive professional solutions for businesses across India.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-3 text-[#3AA6FF] mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <div>D-7/296, 2nd Floor, Sector-6</div>
                    <div>Rohini, New Delhi - 110086</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-[#3AA6FF]" />
                  <div className="text-sm space-y-1">
                    <div>
                      <a href="tel:+918800343499" className="hover:text-white transition-colors">
                        +91 8800343499
                      </a>
                    </div>
                    <div>
                      <a href="tel:+919868428811" className="hover:text-white transition-colors">
                        +91 9868428811
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-3 text-[#3AA6FF]" />
                  <span className="text-sm">
                    <a 
                      href="https://wa.me/919811657065" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      +91 9811657065 (WhatsApp)
                    </a>
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-[#3AA6FF]" />
                  <span className="text-sm">
                    <a href="mailto:contact@cspkindia.com" className="hover:text-white transition-colors">
                      contact@cspkindia.com
                    </a>
                  </span>
                </div>
              </div>
            </div>


            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <div className="space-y-3">
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
                <Link href="/services" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Our Services
                </Link>
                <Link href="/blogs" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Blogs & Articles
                </Link>
                <Link href="/career" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Career Opportunities
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Rate Us
                </Link>
              </div>
            </div>


            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
              <div className="space-y-3">
                <a 
                  href="https://incometaxindia.gov.in/pages/pan.aspx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors text-sm group"
                >
                  <span>PAN</span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://incometaxindia.gov.in/Pages/tan-tds.aspx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors text-sm group"
                >
                  <span>TAN</span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://eportal.incometax.gov.in/iec/foservices/#/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors text-sm group"
                >
                  <span>Income Tax E-Filing</span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://www.mca.gov.in/content/mca/global/en/home.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors text-sm group"
                >
                  <span>MCA</span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://www.rbi.org.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors text-sm group"
                >
                  <span>RBI</span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <Link 
                  href="/disclaimer" 
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Disclaimer
                </Link>
              </div>
            </div>


            {/* Popular Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Popular Services</h3>
              <div className="space-y-3">
                <Link href="/services/private-limited-company" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Private Limited Company
                </Link>
                <Link href="/services/opc-registration" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  One Person Company
                </Link>
                <Link href="/services/llp-registration" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  LLP Registration
                </Link>
                <Link href="/services/annual-compliance" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Annual Compliance
                </Link>
                <Link href="/services/trademark" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Trademark Registration
                </Link>
                <Link href="/services/secretarial-audit" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Secretarial Audit
                </Link>
              </div>
            </div>


            {/* Business Hours & Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Professional Information</h3>
              
              {/* Business Hours */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Business Hours</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>Monday - Saturday: 10:00 AM - 7:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>


              {/* Professional Credentials */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Credentials</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>• ICSI Qualified Company Secretary</div>
                  <div>• 7+ Years Professional Experience</div>
                  <div>• Pan India Service Coverage</div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-3">Social Media</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Meta (Facebook)"
                    title="Meta (Facebook)"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="X (Twitter)"
                    title="X (Twitter)"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 M/s Praveen K & Associates. All rights reserved. Developed By <a href="https://www.proshala.com" className="text-blue-500 hover:text-blue-400 transition-colors">Proshala Tech</a>
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
