// components/layout/navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, Fragment } from "react";
import { Popover, Dialog, Disclosure, Transition } from "@headlessui/react";
import { Menu, X, ChevronDown } from "lucide-react";

// Proshala services structure
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      {
        category: "Core Services",
        items: [
          { name: "Website Development", href: "/services/website-development" },
          { name: "Performance Marketing", href: "/services/performance-marketing" },
          { name: "Social Media Management", href: "/services/social-media-management" },
        ],
      },
      {
        category: "Marketing & Growth",
        items: [
          { name: "Influencer Marketing", href: "/services/influencer-marketing" },
          { name: "SEO & Content", href: "/services/seo" },
          { name: "Branding & Creatives", href: "/services/branding" },
        ],
      },
      {
        category: "Specialized",
        items: [
          { name: "Email & Automation", href: "/services/automation" },
          { name: "Analytics & Reporting", href: "/services/analytics" },
          { name: "CRO & Landing Pages", href: "/services/cro" },
        ],
      },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-lg bg-white/90 dark:bg-black/90 border-b border-[#FACC15]/40 shadow-lg"
          : "bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-7xl px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Proshala Home" className="flex items-center gap-2">
          <Image
            src="/Proshala-logo.png"
            alt="Proshala"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="font-bold text-lg text-gray-900 dark:text-white">Proshala</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) =>
            item.hasDropdown ? (
              <Popover key={item.name} className="relative">
                {({ open, close }: { open: boolean; close: () => void }): JSX.Element => (
                  <>
                    <Popover.Button
                      className={[
                        "px-3 py-2 rounded-md outline-none inline-flex items-center gap-1",
                        "hover:bg-[#FACC15]/20 focus:ring-2 focus:ring-[#FACC15]",
                        "text-gray-900 dark:text-white font-medium transition-colors",
                        open ? "bg-[#FACC15]/20" : "",
                      ].join(" ")}
                    >
                      {item.name}
                      <ChevronDown
                        className={[
                          "h-4 w-4 transition-transform",
                          open ? "rotate-180" : "",
                        ].join(" ")}
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[720px] rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f0f] shadow-xl z-50">
                        <div className="grid grid-cols-3 gap-1 p-4">
                          {item.dropdownItems?.map((category, i) => (
                            <div key={i} className="space-y-2">
                              <h3 className="text-xs font-bold text-[#FACC15] uppercase tracking-wide px-3 py-1">
                                {category.category}
                              </h3>
                              <ul className="space-y-1">
                                {category.items.map((subItem) => (
                                  <li key={subItem.href}>
                                    <Link
                                      href={subItem.href}
                                      className="block px-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-[#FACC15]/20 transition-colors"
                                      onClick={() => close()}
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* CTA in dropdown */}
                        <div className="border-t border-gray-200 dark:border-gray-800 p-4 bg-gradient-to-r from-[#FACC15]/10 to-[#EAB308]/10">
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 text-center">
                            Need a custom solution?
                          </p>
                          <Link
                            href="/contact"
                            className="block text-center rounded-full bg-[#FACC15] px-4 py-2 text-sm font-semibold text-black hover:bg-[#EAB308] transition"
                            onClick={() => close()}
                          >
                            Get in Touch
                          </Link>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md hover:bg-[#FACC15]/20 focus:outline-none focus:ring-2 focus:ring-[#FACC15] text-gray-900 dark:text-white font-medium transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#FACC15] px-6 py-2.5 font-semibold text-black hover:bg-[#EAB308] transition-all hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-1">
          <button
            onClick={(): void => setMobileOpen(true)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-[#FACC15]/20 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog open={mobileOpen} onClose={setMobileOpen} className="relative z-50 lg:hidden">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="mx-auto max-w-lg p-4">
            <Dialog.Panel className="mt-3 rounded-2xl bg-white dark:bg-[#0f0f0f] shadow-xl ring-1 ring-black/5 dark:ring-white/10">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={(): void => setMobileOpen(false)}
                >
                  <Image
                    src="/Proshala-logo.png"
                    alt="Proshala"
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                  <span className="font-bold">Proshala</span>
                </Link>
                <button
                  onClick={(): void => setMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-[#FACC15]/20 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Menu content */}
              <div className="px-4 py-3 space-y-1">
                {navigation.map((item) =>
                  item.hasDropdown ? (
                    <Disclosure key={item.name}>
                      {({ open }: { open: boolean }): JSX.Element => (
                        <div className="border border-gray-200 dark:border-gray-800 rounded-md">
                          <Disclosure.Button className="w-full text-left px-3 py-2 font-medium hover:bg-[#FACC15]/20 flex items-center justify-between rounded-md">
                            {item.name}
                            <ChevronDown
                              className={[
                                "h-4 w-4 transition-transform",
                                open ? "rotate-180" : "",
                              ].join(" ")}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel as="div">
                            <div className="p-2 space-y-2">
                              {item.dropdownItems?.map((category, i) => (
                                <div key={i}>
                                  <p className="text-xs font-bold text-[#FACC15] uppercase px-2 py-1">
                                    {category.category}
                                  </p>
                                  <ul className="space-y-1">
                                    {category.items.map((subItem) => (
                                      <li key={subItem.href}>
                                        <Link
                                          href={subItem.href}
                                          className="block rounded-md px-2 py-1.5 text-sm hover:bg-[#FACC15]/20"
                                          onClick={(): void => setMobileOpen(false)}
                                        >
                                          {subItem.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </div>
                      )}
                    </Disclosure>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 hover:bg-[#FACC15]/20"
                      onClick={(): void => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                )}

                {/* Mobile CTA */}
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="block text-center rounded-full bg-[#FACC15] px-6 py-3 font-semibold text-black hover:bg-[#EAB308]"
                    onClick={(): void => setMobileOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </header>
  );
}
