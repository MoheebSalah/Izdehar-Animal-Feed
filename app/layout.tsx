import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const palestine = localFont({
  src: "../public/fonts/alfont_com_Palestine-Regular.ttf",
  variable: "--font-palestine",
  display: "swap",
});

const neoSans = localFont({
  src: "../public/fonts/alfont_com_NeoSansArabic.ttf",
  variable: "--font-neo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ازدهار للأعلاف",
  description: "علف فلسطيني من الأرض لأصحابها",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${palestine.variable} ${neoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
