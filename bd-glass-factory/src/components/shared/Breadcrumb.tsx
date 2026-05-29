import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-1 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRight size={14} className="text-brand-muted mx-0.5" />
            )}
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="text-brand-muted hover:text-brand-gold transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  index === items.length - 1
                    ? 'text-brand-dark font-medium'
                    : 'text-brand-muted'
                }
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
