import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — BDGLASS",
  description: "The page you are looking for does not exist. Browse our glass products or contact us for a quote.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-brand-dark mb-2">404</h1>
        <p className="text-brand-muted-dark text-body-lg mb-8">
          Page not found — the page you are looking for does not exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/products" className="btn-outline border-brand-dark text-brand-dark">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
