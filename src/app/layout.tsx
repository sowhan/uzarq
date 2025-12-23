import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "uzarq | AI Systems That Create Operating Advantage",
  description:
    "We help businesses turn AI into a practical operating advantage. Audit, train, and build AI systems that remove bottlenecks and unlock growth.",
  keywords: [
    "AI consulting",
    "AI automation",
    "business operations",
    "AI systems",
    "workflow automation",
  ],
  openGraph: {
    title: "uzarq | AI Systems That Create Operating Advantage",
    description:
      "We help businesses turn AI into a practical operating advantage. Audit, train, and build AI systems that remove bottlenecks and unlock growth.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "uzarq | AI Systems That Create Operating Advantage",
    description:
      "We help businesses turn AI into a practical operating advantage.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
