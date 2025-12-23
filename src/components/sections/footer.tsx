"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative py-12 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center overflow-hidden h-20 w-56 relative">
              <Image
                src="/logo-new.png"
                alt="UZARQ"
                fill
                className="object-cover scale-[1.8]"
              />
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="#how-it-works"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#process"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              Process
            </Link>
            <Link
              href="#faq"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#book"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Uzarq Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
