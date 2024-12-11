// servicesData.js

type problemData = {
  title: string;
  description: string;
  link: string;
  price: string;
  note?: string;
};

export const problemData = [
  {
    id: 1,
    title: "No Real Break After Work",
    description:
      "You want to relax, but you’re greeted by a messy home that quietly adds to your stress.",
  },
  {
    id: 2,
    title: "Lingering Allergies and Irritations",
    description:
      "Dust and allergens keep you sneezing, sniffling, and feeling worn down instead of refreshed.",
  },
  {
    id: 3,
    title: "Time Slipping Away",
    description:
      "With so many other demands, cleaning never makes the cut, leaving you feeling behind and overwhelmed.",
  },
  {
    id: 4,
    title: "Motivation Takes a Hit",
    description:
      "A messy environment drains your focus and energy, making it tougher to get things done or truly enjoy your free time.",
  },
];
