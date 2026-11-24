export type Professional = {
  id: number;
  slug: string;
  name: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  completedJobs: number;
  experience: number;
  icon: string;
};

export const professionals: Professional[] = [
  {
    id: 1,
    slug: "hana-cleaning",
    name: "Hana Cleaning",
    location: "Addis Ababa",
    description: "Home and office cleaning services.",
    price: 500,
    rating: 4.8,
    completedJobs: 126,
    experience: 4,
    icon: "👩",
  },
  {
    id: 2,
    slug: "bright-home-care",
    name: "Bright Home Care",
    location: "Bole",
    description: "Deep cleaning and regular home cleaning.",
    price: 700,
    rating: 4.9,
    completedJobs: 184,
    experience: 5,
    icon: "👩‍🔧",
  },
  {
    id: 3,
    slug: "cleanpro-ethiopia",
    name: "CleanPro Ethiopia",
    location: "Yeka",
    description: "Residential and commercial cleaning.",
    price: 600,
    rating: 4.7,
    completedJobs: 98,
    experience: 3,
    icon: "👨",
  },
  {
    id: 4,
    slug: "addis-clean",
    name: "Addis Clean",
    location: "Kirkos",
    description: "Affordable home cleaning services.",
    price: 450,
    rating: 4.6,
    completedJobs: 76,
    experience: 2,
    icon: "🧹",
  },
];