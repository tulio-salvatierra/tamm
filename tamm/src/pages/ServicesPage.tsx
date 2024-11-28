import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import FloatingCallButton from "@/components/floatingCallButton";
import FloatingBookNowButton from "@/components/floatingBookNowButton";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <Services />
      <FloatingCallButton />
      <FloatingBookNowButton />
      <Footer />
    </>
  );
}
