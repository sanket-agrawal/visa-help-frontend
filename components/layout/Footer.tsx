import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-sm font-semibold">
              QueueCut
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Book salon slots, join live queues,
              and avoid unnecessary waiting.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold">
              Product
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/salons" className="hover:text-gray-900">
                  Find Salons
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-gray-900">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/for-salon-owners" className="hover:text-gray-900">
                  For Salon Owners
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold">
              Legal
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/privacy" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} QueueCut. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
