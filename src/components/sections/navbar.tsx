"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center overflow-hidden h-16 w-48 relative flex-shrink-0">
          <Image
            src="/logo-new.png"
            alt="UZARQ"
            fill
            className="object-cover scale-[1.8]"
            priority
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link
            href="#how-it-works"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#process"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Process
          </Link>
          <Link
            href="#faq"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            FAQ
          </Link>
        </div>
        <Link
          href="#book"
          className="bg-white text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-all duration-300 flex-shrink-0"
        >
          Book an AI Audit
        </Link>
      </div>
    </motion.nav>
  );
}
