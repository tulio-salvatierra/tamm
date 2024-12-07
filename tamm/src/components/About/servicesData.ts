// servicesData.js

type servicesData = {
  title: string;
  description: string;
  link: string;
  price: string;
  note?: string;
};

export const servicesData = [
  {
    title: "Regular Cleaning",
    description:
      "Keep your home sparkling with our routine cleaning services tailored to your schedule.",
    link: "/services/chicago/regular-cleaning",
    price: "From $150",
    note: "Prices may vary depending on job conditions.",
  },
  {
    title: "Deep Cleaning",
    description:
      "A thorough, top-to-bottom cleaning to refresh and renew your entire home.",
    link: "/services/chicago/deep-cleaning",
    price: "From $300",
    note: "Prices may vary depending on job conditions.",
  },
  {
    title: "Move-In/Move-Out Cleaning",
    description:
      "Make moving easier with a comprehensive cleaning service that prepares or refreshes your space.",
    link: "/services/chicago/move-in-move-out",
    price: "From $250",
    note: "Prices may vary depending on job conditions.",
  },
  {
    title: "Office Cleaning",
    description:
      "Create a welcoming and productive work environment with our professional office cleaning.",
    link: "/services/chicago/office-cleaning",
    price: "From $200",
    note: "Prices may vary depending on job conditions.",
  },
  {
    title: "Post-Construction Cleaning",
    description:
      "Clear away dust and debris after a renovation or construction project, leaving your space polished.",
    link: "/services/chicago/post-construction",
    price: "From $350",
    note: "Prices may vary depending on job conditions.",
  },
  {
    title: "Apartment Cleaning",
    description:
      "Keep your apartment fresh, organized, and inviting with our specialized cleaning services designed for smaller living spaces.",
    link: "/services/chicago/apartment-cleaning",
    price: "From $200",
    note: "Prices may vary depending on job conditions.",
  },
];
