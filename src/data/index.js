import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Software Developer Jr.",
    company_name: "Konfío",
    date: "2021 - 2022",
    details: [
      "Developed backend solutions using <span style='color: white;'>JavaScript (Node.js), AWS (Lambda, S3)</span> for automated data extraction.",
      "Implemented <span style='color: white;'>REST APIs</span> and optimized web scraping techniques using <span style='color: white;'>Cheerio and Axios</ span>.",
    ],
  },
];

const portfolio = [
  {
    name: "Visually Understanding Algorithms",
    description:
      "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.",
    image: algorithms,
  },
];

export { experiences, portfolio };

