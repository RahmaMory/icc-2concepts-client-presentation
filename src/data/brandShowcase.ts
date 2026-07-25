export type ShowcaseBrand = {
  id: string;
  name: string;
  category: string;
  mark: string;
  /**
   * Add a real logo path later, for example:
   * logo: "/assets/brands/2-concepts.svg"
   * When logo is omitted, the styled text mark is shown.
   */
  logo?: string;
};

// Temporary portfolio marks for the moving strips.
// Replace `mark` with real `logo` paths when the approved assets arrive.
export const showcaseBrands: ShowcaseBrand[] = [
  {
    id: "2-concepts",
    name: "2 Concepts",
    category: "Architecture & Engineering",
    mark: "2C",
  },
  {
    id: "modubuild",
    name: "ModuBuild",
    category: "Construction & Interiors",
    mark: "MB",
  },
  {
    id: "cairo-medical",
    name: "Cairo Medical",
    category: "Healthcare Experience",
    mark: "CM",
  },
  {
    id: "masar",
    name: "MASAR",
    category: "Legal Technology",
    mark: "M",
  },
  {
    id: "ica",
    name: "IO Code Academy",
    category: "Education Platform",
    mark: "ICA",
  },
  {
    id: "jaguar-gym",
    name: "Jaguar GYM",
    category: "Fitness Management",
    mark: "JG",
  },
  {
    id: "icc",
    name: "IO Code Company",
    category: "Digital Solutions",
    mark: "ICC",
  },
  {
  id: "kasr-elsalam",
  name: "Kasr Elsalam",
  category: "Restaurant Experience",
  mark: "KS",
},
];
