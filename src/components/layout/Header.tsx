'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import MobileNav from './MobileNav';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-100 h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? 'bg-brand-dark/95 backdrop-blur-[10px] border-b border-white/6'
            : 'bg-brand-dark'
        }`}
      >
        <div className="container-page w-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-white font-bold text-xl tracking-tight flex items-center gap-2"
          >
            <span className="text-brand-blue text-2xl">◆</span>
            {siteConfig.name}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-brand-muted hover:text-brand-blue px-4 py-2 text-[15px] font-medium transition-colors duration-200 rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Page content spacer */}
      <div className="h-[72px]" />

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
