import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Why from "@/components/Why";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <Hero />
      <About />
      <Why />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
