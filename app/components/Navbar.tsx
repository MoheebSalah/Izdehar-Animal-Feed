"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

const links = [
  { label: "من نحن", target: "#about" },
  { label: "منتجاتنا", target: "#products" },
  { label: "عملاؤنا", target: "#testimonials" },
  { label: "تواصل معنا", target: "#contact" },
];

export default function Navbar() {
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Hide the whole navbar once the footer scrolls into view.
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const go = (target: string) => {
    setOpen(false);
    lenis?.scrollTo(target, { offset: -90 });
  };

  return (
    <>
      {/* Tap-away backdrop for the mobile menu — kept OUTSIDE the header, whose
          translate transform would otherwise make `fixed` resolve against it
          instead of the viewport (so it would only cover the nav strip). */}
      {open && (
        <button
          type="button"
          aria-hidden
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 cursor-default md:hidden"
        />
      )}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        hidden
          ? "pointer-events-none -translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 md:px-10 md:py-6">
        {/* Right side (RTL): desktop links box */}
        <div className="hidden items-center gap-6 rounded-xl bg-white px-6 py-3 shadow-[0_10px_40px_rgba(0,15,7,0.08)] md:flex">
          {links.map((l) => (
            <button
              key={l.target}
              type="button"
              onClick={() => go(l.target)}
              className="cursor-pointer font-neo text-[1rem] leading-[1.4] text-text transition-colors hover:text-primary"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right side (RTL): mobile burger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
          aria-expanded={open}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[0.3rem] rounded-xl bg-white shadow-[0_10px_40px_rgba(0,15,7,0.08)] md:hidden"
        >
          <span
            className={`h-[0.15rem] w-[1.4rem] rounded-full bg-text transition-all duration-300 ${
              open ? "translate-y-[0.45rem] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[0.15rem] w-[1.4rem] rounded-full bg-text transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[0.15rem] w-[1.4rem] rounded-full bg-text transition-all duration-300 ${
              open ? "-translate-y-[0.45rem] -rotate-45" : ""
            }`}
          />
        </button>

        {/* Left side (RTL): logo */}
        <img
          src="/svgs/navLogo.svg"
          alt="ازدهار للأعلاف"
          className="h-[2rem] w-auto md:h-[2.5rem]"
        />
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`absolute right-6 top-[4.5rem] origin-top-right transition-all duration-300 md:hidden ${
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="flex w-[13rem] flex-col overflow-hidden rounded-2xl bg-white py-2 shadow-[0_10px_40px_rgba(0,15,7,0.12)]">
          {links.map((l) => (
            <button
              key={l.target}
              type="button"
              onClick={() => go(l.target)}
              className="cursor-pointer px-6 py-3 text-right font-neo text-[1.1rem] leading-[1.4] text-text transition-colors hover:bg-text/5 hover:text-primary"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      </header>
    </>
  );
}
