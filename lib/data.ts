import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import vocaboImg from "@/public/vocabo.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Software Engineer, Compute & Cultivate",
    location: "Remote, UK",
    description: `•  Lead the design and development of high-performance web applications using React, Tailwind CSS, and Next.js, focusing on optimizing user experience and enhancing front-end aesthetics and functionality
      •  Oversee the architecture and implementation of mobile applications leveraging React Native and Expo, ensuring seamless cross-platform compatibility and high-quality user interfaces
      •  Drive the integration of React and Next.js in building SEO-optimized, server-side rendered applications, resulting in a 30% increase in user engagement metrics
      •  Collaborate closely with product teams and stakeholders to deliver tailored solutions in web and mobile development, meeting precise business needs and customer expectations`,
    icon: React.createElement(FaReact),
    date: "Apr 2024 - Present",
  },
  {
    title: "Senior Software Engineer, Perlego",
    location: "London, UK",
    description: `•  Effectively collaborated with a cross-functional team to successfully deliver projects on time and within budget
      •  Mentoring and coaching junior software engineers to foster their growth and development in technical skills and product knowledge
      •  Doing regular code-reviews in order to deploy quality code
      •  Added features like Read-aloud to the React based reader platform that increased subscription by 32% and raised user's CLTV by 30%
      •  Helped migration to a new deployment strategy using AWS tools to accelerate efficiency
      •  Enhancing the security of the server requests using encryption that helped prevent illegal downloading of books, upholding publisher contracts
      •  Designed microservices using Lambda, Node.JS, MySQL, Redis, ECS, S3, SNS and SQS
      •  Collaborating with product managers and designers to understand requirements and translate them into technical solutions`,
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 - Mar 2024",
  },
  {
    title: "Tech Lead, SopraSteria",
    location: "Toulouse, France",
    description: `•  Facilitating cross-cultural communication between the French and Indian teams to ensure smooth collaboration
      •  Managing project timelines and ensuring deliverables are met on time for clients like Airbus, ST Microelectronics and more
      •  Worked extensively on fine tuning the complex SQL queries and database performance resulting in a notable 40% reduction in page-load time
      •  Implemented NodeJS microservices from scratch while migrating windows-app to web-app`,
    icon: React.createElement(CgWorkAlt),
    date: "May 2019 - Dec 2021",
  },
  {
    title: "Software Engineer, SopraSteria",
    location: "Noida, India",
    description: `•  Leading team on some modules of the application
    •  Gathering the requirements with the on-shore team
    •  Implementation of new functionalities in the applications`,
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2013 - May 2019",
  },
  {
    title: "Bachelor of Technology",
    location: "Delhi, India",
    description: `Bachelor of Technology degree in Electonics & Communication from Guru Gobind Singh Indraprastha University, Delhi`,
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2008 - Dec 2012",
  },
] as const;

export const projectsData = [
  {
    title: "Vocabo",
    description: `A React-Typescript based language learning extension for Chrome and Firefox that helps reinforce vocabulary retention.

      This extension pins newly learned words and their meanings in your language, displaying them randomly on web pages to enhance your learning.`,
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: vocaboImg,
  },
] as const;

export const skillsData = [
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "SQL",
  "NoSQL",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "AWS",
  "Expo",
  "Express",
  "Redux",
  "Git",
  "Styled components",
  "HTML",
  "Python",
  "Fast API",
  "Framer Motion",
  "Blueprint JS",
] as const;
