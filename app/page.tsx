import Hero from "./hero/Hero";
import Products from "./products/Products";
import About from "./about/About";

export default function Home() {
  return (
    <main className="flex flex-col space-y-[15vh]">
      <Hero />
      <Products />
      <About />
    </main>
  );
}
