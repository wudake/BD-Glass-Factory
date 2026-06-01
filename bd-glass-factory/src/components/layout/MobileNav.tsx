'use client';

import { useEffect, useCallback } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Close on ESC key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-200 bg-black/50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar Drawer */}
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`fixed top-0 right-0 z-300 h-full w-72 sm:w-80 bg-brand-dark transform transition-transform duration-350 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          paddingTop: 'calc(72px + env(safe-area-inset-top))',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-gray-light">
          <span className="text-white font-bold text-lg">{siteConfig.name}</span>
          {/* Close button — 48×48 touch target */}
          <button
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center text-white rounded-md"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col px-4 py-4 gap-1" role="navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="text-brand-muted hover:text-brand-blue hover:bg-brand-gray px-4 py-3 text-lg font-medium rounded-md transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-brand-gray-light"
          style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="btn-primary w-full text-center"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </>
  );
}
