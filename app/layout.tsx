import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "./components/SmoothScroll";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";

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
      <body className="min-h-full">
        {/* Disable the browser's scroll restoration BEFORE hydration, so a fast
            (production) reload never restores the previous scroll position — the
            page always opens at the top. */}
        <Script id="scroll-restoration" strategy="beforeInteractive">
          {`if ('scrollRestoration' in history) history.scrollRestoration = 'manual';`}
        </Script>
        <SmoothScroll>
          <LoadingScreen />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
