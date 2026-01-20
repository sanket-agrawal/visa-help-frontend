import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold text-gray-900"
        >
          QueueCut
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/salons"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Salons
          </Link>

          <Link
            href="/how-it-works"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            How it Works
          </Link>

          <Link
            href="/for-salon-owners"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            For Salon Owners
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Sign in
          </Link>

          <Button>
            Book Slot
          </Button>
        </div>
      </nav>
    </header>
  );
}
