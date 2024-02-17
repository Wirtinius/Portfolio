import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  django,

  
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  innodev,
  color,
  KMG,
  carrent,
  jobit,
  tripguide,
  threejs,

  citix,
  mingle,
  qush
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fast Learner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Artel",
    icon: color,
    iconBg: "#383E56",
    date: "Nov 2023 - Jan 2024",
    points: [
      "Developed Backend architecture, implementing Django for authentication and authorization with JWT tokens. Integrated React.js for Frontend development to create a seamless user experience.",
      "Designed and executed CRUD operations for portfolios, ensuring validation rules and conducting unit tests.",
      "Configured PostgreSQL database and implemented operations for events, profiles, and teams; connected Frontend with APIs, managing secure storage and retrieval of access tokens."
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Innodev Technologies",
    icon: innodev,
    iconBg: "#E6DEDD",
    date: "July 2023 - Sep 2024",
    points: [
      "Engineered a robust server application using Django, adhering to REST architectural principles for a special event with over 3000 users.",
      "Implemented trained modules to facilitate facial swaps and enhance photos.",
      "Expertly deployed and configured the application with nginx and Gunicorn, efficiently handling over 500 users concurrently during face swapping and image enhancement processes."
    ],
  },
  {
    title: "Backend Developer",
    company_name: "KMG-Kumkol",
    icon: KMG,
    iconBg: "white",
    date: "April 2023 - July 2023",
    points: [
      "Contributed to the development of a customer-utilized platform, utilizing Docker and Docker Compose, along with configuring Postgresql and writing simple APIs.",
      "Resolved critical bugs in the application related to sending information via Excel, employing the tkinter and openpyxl libraries, and utilizing the Masonite framework to meet project requirements.",
      "Collaborated effectively and maintained clear communication with team members, ensuring successful achievement of project goals and deliverables."
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Solvation for Citix",
    description:
      "A platform for the street dashboard that indicates the presence or absence of people and shuts down when empty. Includes a voice detector for bus route planning.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "openAI API",
        color: "pink-text-gradient",
      },
    ],
    image: citix,
    source_code_link: "https://github.com/Wirtinius/Hackaton",
  },
  {
    name: "Qush",
    description:
      "Sport web application enabling football field owners to post their fields for rent. Clients can then book specific times, pay, and secure their rental.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: qush,
    source_code_link: "https://github.com/Wirtinius",
  },
  {
    name: "Mingle",
    description:
      "A dating app that enables users to locate and connect for dates. Features include chat, dating requests, user location, filtering, and more.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: mingle,
    source_code_link: "https://github.com/Wirtinius/Mingle",
  },
];

export { services, technologies, experiences, testimonials, projects };
