import {
  ratchet5Hz,
  face_detector,
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
    name: "Magnetically-Driven Colloid Interactions Inducing Ratchet Rotation at the Microscales",
    description: "Developed a microscale ratchet system ( 10μm) surrounded by 1.25μm paramagnetic colloids. When exposed to an oscillating magnetic field, the colloids form rotating pairs whose interactions with the ratchet structure induce net rotational motion. The work explores indirect actuation mechanisms through collective colloidal behavior, with potential applications in microfluidics and soft microrobotics.",
    image: ratchet5Hz,
   },
  {
    name: "Face detector",
    description: "A simple real-time face detection application using OpenCV and Haar Cascade classifier.",
    image: face_detector,
    link: 'https://github.com/YerayCruz/face-detector',

  }
];

export { experiences, portfolio };

