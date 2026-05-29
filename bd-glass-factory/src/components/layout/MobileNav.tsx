'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-200 bg-black/50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-300 h-full w-72 bg-brand-dark transform transition-transform duration-350 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/6">
          <span className="text-white font-bold text-lg">{siteConfig.name}</span>
          <button onClick={onClose} className="text-white p-1" aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="text-brand-muted hover:text-brand-blue hover:bg-brand-gray px-4 py-3 text-base font-medium rounded-md transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 mt-6">
          <Link
            href="/contact"
            onClick={onClose}
            className="btn-primary w-full text-center"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </>
  );
}
