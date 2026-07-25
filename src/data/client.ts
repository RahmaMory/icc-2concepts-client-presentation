import type { ClientConfig } from "../types";

// ============================================================
// EDIT ONLY THIS FILE FOR EACH NEW CLIENT COPY.
// Replace the client information, prices, images, and ready-made links.
// ============================================================
export const client: ClientConfig = {
  clientName: "CCCCCCCC",
  industry: "Food & Restaurants",
eyebrow: "ICC • DIGITAL SOLUTIONS & SOFTWARE DEVELOPMENT",

headline:
  "We transform ideas into powerful digital experiences built for real business growth.",

intro:
  "From premium websites and business systems to mobile applications and AI solutions, ICC creates tailored technology that helps brands stand out, operate smarter, and move forward with confidence.",// Main theme color. accentRgb must be the same color as RGB numbers.
accent: "#2583FF",
accentRgb: "37, 131, 255",

  proposal: {
    title: "Proposal & Commercial Offer",
    description:
      "Review the project scope, included features, investment, delivery time, and commercial terms.",
    // Paste a Gamma embed URL or use a local file such as /proposal.pdf
url: "https://gamma.app/embed/Tiba-Syrian-Restaurant-bk9r0fpqvypmah8",
    price: "20,000 EGP",
    delivery: "3 weeks",
    scope: ["Responsive website", "Menu presentation", "Direct contact actions"],
  },

  mainDemo: {
    title: "Your Custom Website Preview",
    description:
      "Open the ready-made website concept prepared for this client and explore it interactively.",
    // Paste the Vercel link sent by the website designer.
    url: "https://example.vercel.app/",
    image: "/assets/projects/client-demo.png",
  },

  related: [
    {
      id: "urban-bite",
      title: "Urban Bite",
      category: "Restaurant Experience",
      description: "A bold food brand experience focused on menu discovery and direct ordering.",
      url: "https://rahmamory.github.io/catrserv-restaurant-website/",
      image: "/assets/projects/related-01.png",
      logoText: "UB",
    },
    {
      id: "table-story",
      title: "Table Story",
      category: "Dining & Reservations",
      description: "A refined restaurant presentation with clear reservations and visual storytelling.",
      url: "https://example-two.vercel.app/",
      image: "/assets/projects/related-02.png",
      logoText: "TS",
    },
    {
      id: "daily-crave",
      title: "Daily Crave",
      category: "Fast Casual Brand",
      description: "A fast, mobile-first experience designed around offers and quick customer actions.",
      url: "https://example-three.vercel.app/",
      image: "/assets/projects/related-03.png",
      logoText: "DC",
    },
  ],

  companyWebsite: "https://www.icc-collab.com/",
  social: {
    instagram: "https://www.instagram.com/io_code_company/",
    facebook: "https://www.facebook.com/profile.php?id=61587705431716",
    linkedin: "https://www.linkedin.com/company/io-code-collaboration-icc/about/",
    whatsapp: "https://wa.me/201031158933",
  },
};
