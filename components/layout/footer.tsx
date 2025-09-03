import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/lib/data/services";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-2xl font-bold">CSPKIndia</span>
              </Link>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Your trusted partner for CS & compliance services. We provide comprehensive legal and regulatory solutions for growing businesses across India.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-[#3AA6FF]" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-[#3AA6FF]" />
                  <span>contact@cspkindia.in</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-[#3AA6FF]" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
                <Link href="/services" className="block text-gray-400 hover:text-white transition-colors">Our Services</Link>
                <Link href="/blogs" className="block text-gray-400 hover:text-white transition-colors">Blogs</Link>
                <Link href="/career" className="block text-gray-400 hover:text-white transition-colors">Career</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <div className="space-y-2">
                {serviceCategories.slice(0, 6).map((category) => (
                  <Link 
                    key={category} 
                    href="/services" 
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates on compliance and regulatory changes.
              </p>
              <div className="space-y-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="w-full bg-[#3AA6FF] hover:bg-[#2690E6] text-white">
                  Subscribe
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CSPKIndia. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}