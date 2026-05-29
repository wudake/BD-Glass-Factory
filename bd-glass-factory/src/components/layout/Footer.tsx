import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">
              {siteConfig.name}
            </h5>
            <p className="text-brand-muted text-sm leading-relaxed">
              {siteConfig.fullName}. Professional glass manufacturer specializing in
              tempered, insulating, laminated and craft glass since {siteConfig.founded}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2.5">
              {siteConfig.nav
                .filter((item) => item.label !== 'Home')
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-brand-muted hover:text-brand-blue text-sm transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h5 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Products
            </h5>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/products/tempered-glass"
                  className="text-brand-muted hover:text-brand-blue text-sm transition-colors duration-200"
                >
                  Tempered Glass
                </Link>
              </li>
              <li>
                <Link
                  href="/products/insulating-glass"
                  className="text-brand-muted hover:text-brand-blue text-sm transition-colors duration-200"
                >
                  Insulating Glass
                </Link>
              </li>
              <li>
                <Link
                  href="/products/laminated-glass"
                  className="text-brand-muted hover:text-brand-blue text-sm transition-colors duration-200"
                >
                  Laminated Glass
                </Link>
              </li>
              <li>
                <Link
                  href="/products/craft-glass"
                  className="text-brand-muted hover:text-brand-blue text-sm transition-colors duration-200"
                >
                  Craft Glass
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-brand-muted text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                <span>{siteConfig.address.en}</span>
              </li>
              <li className="flex items-center gap-3 text-brand-muted text-sm">
                <Phone size={16} className="shrink-0 text-brand-blue" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-brand-blue transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-brand-muted text-sm">
                <Mail size={16} className="shrink-0 text-brand-blue" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-brand-blue transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/6">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-brand-muted">
          <span>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </span>
          <span>{siteConfig.fullName}</span>
        </div>
      </div>
    </footer>
  );
}
