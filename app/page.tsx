import Hero from "./hero/Hero";
import Products from "./products/Products";
import About from "./about/About";
import Gallery from "./gallery/Gallery";
import Testimonials from "./testimonials/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col space-y-[15vh]">
      <Hero />
      <Products />
      <About />
      <Gallery />
      <Testimonials />
    </main>
  );
}
