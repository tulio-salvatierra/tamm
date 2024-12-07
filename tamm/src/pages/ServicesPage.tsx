import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import FloatingCallButton from "@/components/floatingCallButton";
import FloatingBookNowButton from "@/components/floatingBookNowButton";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>
          Tamm Cleaning Services | Our Services | house cleaning service
          Chicago, maid service in Chicago, residential cleaning Chicago, deep
          cleaning services Chicago, apartment cleaning Chicago
        </title>
        <meta
          name="description"
          content="Discover our full range of cleaning solutions, including home cleaning, move-in services, and specialty deep cleaning options. Keywords: house cleaning service Chicago, maid service in Chicago, residential cleaning Chicago, deep cleaning services Chicago, apartment cleaning Chicago."
        />
        <meta
          property="og:title"
          content="Tamm Cleaning Services | Our Services | house cleaning service Chicago, maid service in Chicago, residential cleaning Chicago, deep cleaning services Chicago, apartment cleaning Chicago"
        />
        <meta
          property="og:description"
          content="Explore Tamm Cleaning Services' extensive offerings, from residential upkeep to intensive deep cleans, all tailored to Chicago residents. Keywords: house cleaning service Chicago, maid service in Chicago, residential cleaning Chicago, deep cleaning services Chicago, apartment cleaning Chicago."
        />
      </Helmet>

      <Header />
      <Services />
      <FloatingCallButton />
      <FloatingBookNowButton />
      <Footer />
    </>
  );
}
