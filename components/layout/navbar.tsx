"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@cspkindia.in</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Trusted CS & Compliance Partner</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main navbar */}
      <nav className={cn(
        "sticky top-0 z-50 transition-all duration-300 navbar-bg",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      )}>
        <Container>
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">CSPKIndia</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#3AA6FF] transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile menu button */}
            <div className="flex items-center space-x-4">
              <Button 
                asChild 
                className="hidden md:inline-flex bg-[#3AA6FF] hover:bg-[#2690E6] text-white"
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t">
              <div className="pt-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:text-[#3AA6FF] hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-2">
                  <Button 
                    asChild 
                    className="w-full bg-[#3AA6FF] hover:bg-[#2690E6] text-white"
                  >
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </nav>
    </>
  );
}