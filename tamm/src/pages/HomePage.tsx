import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Why from "@/components/Why";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import AboutSVG from "./../assets/about.svg";
import FloatingCallButton from "@/components/floatingCallButton";
import FloatingBookNowButton from "@/components/floatingBookNowButton";
import Pricing from "@/components/Pricing";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Tamm Cleaning Services | Move-In & Home Cleaning in Chicago | house
          cleaning service Chicago, maid service in Chicago, residential
          cleaning Chicago, deep cleaning services Chicago, apartment cleaning
          Chicago
        </title>
        <meta
          name="description"
          content="Experience top-quality home cleaning and move-in services in Chicago. Our professional team ensures a sparkling, welcoming space tailored to your needs. Keywords: house cleaning service Chicago, maid service in Chicago, residential cleaning Chicago, deep cleaning services Chicago, apartment cleaning Chicago."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Tamm Cleaning Services | Move-In & Home Cleaning in Chicago | house cleaning service Chicago, maid service in Chicago, residential cleaning Chicago, deep cleaning services Chicago, apartment cleaning Chicago"
        />
        <meta
          property="og:description"
          content="Tamm Cleaning Services delivers reliable, customized home cleaning and move-in solutions to help Chicago residents enjoy a spotless and stress-free home. Keywords: house cleaning service Chicago, maid service in Chicago, residential cleaning Chicago, deep cleaning services Chicago, apartment cleaning Chicago."
        />
      </Helmet>

      <Header />
      <Hero />

      <CTA />
      <div
        style={{
          backgroundImage: `url(${AboutSVG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <About />
        <Pricing />
        <Why />
        <FAQ />
        <Contact />
      </div>
      <FloatingCallButton />
      <FloatingBookNowButton />
      <Footer />
    </>
  );
}
