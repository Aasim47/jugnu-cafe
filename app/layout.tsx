import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jugnu Cafe — A Cozy Glowing Evening Escape | Khetrajpur, Sambalpur",
  description:
    "Experience warm fairy light ambience, curated food & drinks at Jugnu Cafe — Sambalpur's most aesthetic hangout. Book a table or order via WhatsApp.",
  keywords: [
    "Jugnu Cafe",
    "cafe Sambalpur",
    "best cafe Odisha",
    "Khetrajpur cafe",
    "aesthetic cafe Sambalpur",
    "fairy lights cafe",
    "book table cafe Sambalpur",
  ],
  openGraph: {
    title: "Jugnu Cafe — Where Every Glow Tells a Story",
    description:
      "A cozy glowing escape with fairy lights, great food & Instagram-worthy vibes. Located in Khetrajpur, Sambalpur, Odisha.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport = {
  themeColor: "#f59e0b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cafe-dark text-cafe-cream antialiased font-body">
        {children}
      </body>
    </html>
  );
}
