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
      {/* CTA + footer share one screen on desktop; stack naturally on mobile */}
      <div className="flex flex-col md:h-screen">
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
