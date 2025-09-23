"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    hasDropdown: true,
    dropdownItems: [
      {
        category: "Registration Services",
        items: [
          { name: "One Person Company (OPC)", href: "/services/opc-registration" },
          { name: "Private Limited Company", href: "/services/private-limited-company" },
          { name: "Public Limited Company", href: "/services/public-limited-company" },
          { name: "Section 8 Company (NGO)", href: "/services/section-8-company" },
          { name: "Subsidiary of Foreign Company", href: "/services/subsidiary-company" },
          { name: "LLP Registration", href: "/services/llp-registration" }
        ]
      },
      {
        category: "Strike Off Services",
        items: [
          { name: "Strike Off of Company", href: "/services/company-strike-off" },
          { name: "Strike Off of LLP", href: "/services/llp-strike-off" }
        ]
      },
      {
        category: "NCLT Matters",
        items: [
          { name: "Merger and Amalgamation", href: "/services/merger-amalgamation" },
          { name: "De-merger", href: "/services/demerger" },
          { name: "Revival of Strike Off Company", href: "/services/company-revival" },
          { name: "Compounding of Offence", href: "/services/compounding-offence" }
        ]
      },
      {
        category: "Conversion Services",
        items: [
          { name: "LLP to Company Conversion", href: "/services/llp-to-company" },
          { name: "Private to Public Company", href: "/services/private-to-public" },
          { name: "Public to Private Company", href: "/services/public-to-private" },
          { name: "Company to LLP Conversion", href: "/services/company-to-llp" },
          { name: "Unregistered to Company", href: "/services/unregistered-to-company" }
        ]
      },
      {
        category: "Compliance & Others",
        items: [
          { name: "Regional Director Approvals", href: "/services/rd-approvals" },
          { name: "Secretarial Audit", href: "/services/secretarial-audit" },
          { name: "Trademark Registration", href: "/services/trademark" },
          { name: "Annual Compliance", href: "/services/annual-compliance" },
          { name: "Dormant Company Services", href: "/services/dormant-company" }
        ]
      }
    ]
  },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#1E3A8A] text-white py-2 text-sm border-b border-blue-700">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center hover:text-blue-200 transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center hover:text-blue-200 transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@cspraveenkumar.in</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-blue-200">Professional CS & Compliance Services Since 2018</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main navbar */}
      <nav className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b" : "bg-white border-b border-gray-100"
      )}>
        <Container>
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-full h-12">
                <Image
                  src="/LOGO.png"
                  alt="CS Praveen Kumar Logo"
                  width={100}
                  height={100}
                  className="rounded-lg h-16 w-full"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                >
                  <Link
                    href={item.href}
                    className="flex items-center text-gray-700 hover:text-[#3AA6FF] transition-colors font-medium py-2"
                    onClick={() => !item.hasDropdown && handleLinkClick()}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className={cn(
                        "h-4 w-4 ml-1 transition-transform duration-200",
                        activeDropdown === item.name ? "rotate-180" : ""
                      )} />
                    )}
                  </Link>

                  {/* Responsive Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-screen max-w-4xl bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                          {item.dropdownItems?.map((category, index) => (
                            <div key={index} className="space-y-3">
                              <h3 className="text-sm font-semibold text-[#3AA6FF] uppercase tracking-wide border-b border-gray-100 pb-2">
                                {category.category}
                              </h3>
                              <ul className="space-y-2">
                                {category.items.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <Link
                                      href={subItem.href}
                                      className="block text-sm text-gray-600 hover:text-[#3AA6FF] hover:bg-blue-50 rounded px-3 py-2 transition-all cursor-pointer"
                                      onClick={handleLinkClick}
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        {/* CTA in Dropdown */}
                        <div className="mt-6 pt-4 border-t border-gray-100">
                          <div className="bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-lg p-4 text-white text-center">
                            <p className="text-sm mb-2">Need Professional Guidance?</p>
                            <Button size="sm" variant="secondary" asChild className="bg-white text-[#3AA6FF] hover:bg-gray-100">
                              <Link href="/contact" onClick={handleLinkClick}>
                                Contact Us
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button & Mobile menu button */}
            <div className="flex items-center space-x-4">
              <Button 
                asChild 
                className="hidden lg:inline-flex bg-[#3AA6FF] hover:bg-[#2690E6] text-white shadow-md"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden pb-4 border-t bg-white">
              <div className="pt-4 space-y-2 max-h-96 overflow-y-auto">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-[#3AA6FF] hover:bg-gray-50 rounded-md transition-colors font-medium"
                      onClick={() => !item.hasDropdown && setIsOpen(false)}
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                    </Link>
                    
                    {/* Mobile Dropdown */}
                    {item.hasDropdown && (
                      <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-4">
                        {item.dropdownItems?.map((category, index) => (
                          <div key={index} className="py-2">
                            <p className="text-xs font-semibold text-[#3AA6FF] uppercase tracking-wide mb-2">
                              {category.category}
                            </p>
                            {category.items.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-[#3AA6FF] hover:bg-gray-50 rounded transition-colors cursor-pointer"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4 border-t border-gray-100">
                  <Button 
                    asChild 
                    className="w-full bg-[#3AA6FF] hover:bg-[#2690E6] text-white"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
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
