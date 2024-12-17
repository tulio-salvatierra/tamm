import Main from "./../../assets/services/services.jpeg";
import Residential from "./../../assets/services/residential.jpeg";
import Commercial from "./../../assets/services/commercial.jpeg";
import Apartment from "./../../assets/services/residential.jpeg";
import AboutSVG from "./../../assets/about.svg";

export const servicesData = [
  {
    sectionType: "intro",
    title: "Our Services",
    description: `At TAMM Cleaning Services, we provide top-tier residential and commercial cleaning solutions across Chicago and nearby areas. From deep cleans for homes and apartments to routine maintenance and office cleaning, we’re here to make your space spotless. Our professional team uses eco-friendly products to ensure a healthier, more inviting environment tailored to your needs.`,
    image: Main,
    background: AboutSVG,
  },
  {
    sectionType: "residential",
    title: "Residential Cleaning Services",
    description: `Enjoy a clean and comfortable home with our residential cleaning services. Whether it’s a one-time deep clean, routine maintenance, or post-construction cleanup, our team handles every detail with care. We focus on high-traffic areas, hard-to-reach spots, and use eco-friendly products to protect your family and pets.`,
    items: [
      "Deep Cleaning",
      "Regular Maintenance Cleaning",
      "Move-In/Move-Out Cleaning",
      "Post-Construction Cleaning",
    ],
    image: Residential,
  },
  {
    sectionType: "apartment",
    title: "Apartment Cleaning Services",
    description: `Small spaces deserve big attention. Our apartment cleaning services are designed to make your living area spotless, organized, and inviting. Whether you need a regular clean or a deep clean, we specialize in transforming apartments into fresh, comfortable homes with minimal disruption to your schedule.`,
    items: [
      "Routine Cleaning",
      "Deep Cleaning for Apartments",
      "Move-In/Move-Out Apartment Cleaning",
      "Post-Construction Apartment Cleanup",
    ],
    image: Apartment,
  },
  {
    sectionType: "commercial",
    title: "Commercial Cleaning Services",
    description: `A clean workspace boosts productivity and professionalism. At TAMM Cleaning Services, we offer flexible and reliable commercial cleaning to keep your office, retail store, or commercial property spotless. From routine cleaning to specialized deep cleans, we minimize disruption to your business while delivering outstanding results.`,
    items: [
      "Office Cleaning",
      "Retail Store Cleaning",
      "Restroom Sanitation",
      "Carpet and Upholstery Cleaning",
    ],
    image: Commercial,
  },
  {
    sectionType: "why-choose",
    title: "Why Choose TAMM Cleaning Services?",
    description: `Choosing TAMM Cleaning Services means choosing quality, reliability, and eco-conscious cleaning tailored to your needs. Send us your details for a personalized quote and enjoy our welcome discount!`,
    items: [
      "Experienced and Trusted Team: Our professionals deliver exceptional results with care and efficiency.",
      "Eco-Friendly Products: Safe for your space, your family, and the environment.",
      "Flexible Scheduling: We work around your schedule for total convenience.",
      "Satisfaction Guaranteed: We’re not happy until you are completely satisfied.",
    ],
    showContactForm: true,
  },
];
