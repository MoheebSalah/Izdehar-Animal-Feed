import Hero from "./hero/Hero";
import Products from "./products/Products";
import About from "./about/About";
import Gallery from "./gallery/Gallery";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact/Contact";
import CTA from "./cta/CTA";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col space-y-[15vh]">
      <Hero />
      <Products />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      {/* CTA + footer share one screen on desktop; stack naturally on mobile.
          As the footer scrolls into view its blocks rise up into place (see
          Footer.tsx); the wrapper clips anything offset past its edges. */}
      <div className="relative flex flex-col overflow-hidden md:h-screen">
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
