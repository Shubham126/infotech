'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from "../../../public/logo.png";

// Import navigation icons
import homeIcon from "../../../public/homeIcon.png";
import aboutIcon from "../../../public/aboutIcon.png";
import servicesIcon from "../../../public/servicesIcon.png";
import pricingIcon from "../../../public/pricingIcon.png";
import faqIcon from "../../../public/faqIcon.png";

type Item = { 
  name: string; 
  href: string; 
  icon: any; // StaticImageData
};

const navItems: Item[] = [
  { name: 'Home', href: '/', icon: homeIcon },
  { name: 'About Us', href: '/about', icon: aboutIcon },
  { name: 'Our Services', href: '/services', icon: servicesIcon },
  { name: 'Pricing', href: '/pricing', icon: pricingIcon },
  { name: 'FAQ', href: '/faq', icon: faqIcon },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          {/* Left: logo */}
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="Company Home" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Company logo"
                width={36}
                height={36}
                priority
              />
              <div className="leading-tight">
                <span className="block text-lg font-semibold tracking-wide">COMPANY</span>
                <span className="block text-xs text-neutral-500">business tagline</span>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map(({ name, href }) => {
              const active = pathname === href;
              return (
                <li key={name}>
                  <Link
                    href={href}
                    className={`text-sm transition-colors ${
                      active ? 'text-rose-600' : 'text-neutral-700 hover:text-neutral-900'
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/quote"
              className="rounded-full bg-rose-600 px-5 py-2.5 text-sm font-medium text-white shadow-[0_6px_20px_rgba(244,63,94,0.4)] transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400"
            >
              Get A Quote
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex items-center rounded p-2 text-neutral-700 hover:bg-neutral-100 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile drawer + overlay (outside header so it covers body) */}
      <div
        className={`fixed inset-0 z-[60] md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        role={open ? 'dialog' : undefined}
        aria-modal={open ? true : undefined}
      >
        {/* Backdrop */}
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Right-side panel */}
        <div
          className={`absolute right-0 top-0 h-svh w-80 max-w-[85%] overflow-y-auto bg-rose-50 p-5 shadow-xl transition-transform duration-300 ease-in-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-6 flex items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <Image src={logo} alt="Company logo" width={32} height={32} />
              <div className="leading-tight">
                <div className="text-base font-semibold">COMPANY</div>
                <div className="text-base text-neutral-500">business tagline</div>
              </div>

            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded p-1 text-neutral-700 hover:bg-neutral-100"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>

          <ul className="space-y-4">
            {navItems.map(({ name, href, icon }) => {
              const active = pathname === href;
              return (
                <li key={name}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-[15px] font-semibold ${
                      active 
                        ? 'bg-white text-rose-600 shadow-sm' 
                        : 'text-neutral-900 hover:bg-white hover:shadow-sm'
                    }`}
                  >
                    <Image 
                      src={icon} 
                      alt={`${name} icon`}
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                    <span>{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-8">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-rose-600 px-5 py-3 text-center text-sm font-medium text-white shadow-[0_6px_20px_rgba(244,63,94,0.4)] transition hover:bg-rose-700"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
