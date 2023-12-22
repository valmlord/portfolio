import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaPhp } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import taskifyImg from "@/public/taskify.png";
import hippoImg from "@/public/hippo-icons.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Self-study education",
    location: "Saint-Petersburg, Russia",
    description:
      "My hobby of programming has become a dedicated pursuit, deepening my understanding and engagement with web development and computer science.",
    icon: React.createElement(LuGraduationCap),
    date: "since 2017",
  },
  {
    title: "PHP developer",
    location: "Saint-Petersburg, Russia",
    description:
      "As a PHP WordPress developer, I’ve expanded my skills to full-stack development and gained proficiency in Laravel and Yii frameworks.",
    icon: React.createElement(FaPhp),
    date: "2019 - 2020",
  },
  {
    title: "UX/UI Designer, Frontend developer",
    location: "Alanya, Turkish Republic",
    description:
      "In my remote role at INFUSEmedia, I designed email layouts, crafted landing pages, and contributed to frontend development, honing my skills in digital marketing.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Taskify",
    link: "https://taskify.korshukovstepan.dev",
    description:
      "Optimize your productivity with my task manager – a stylish Trello clone. Create boards, move tasks, manage projects easily and efficiently.",
    tags: ["React", "Next.js", "Typescript", "MySQL", "Tailwind", "Prisma"],
    imageUrl: taskifyImg,
  },
  {
    title: "HippoIcons",
    link: "https://hippo-icons.korshukovstepan.dev",
    description:
      "Welcome to HippoIcons, this marketplace offers a platform for buying and selling digital assets like icons and UI kits, fostering innovation in digital design.",
    tags: ["React", "Next.js", "Typescript", "MongoDB", "tRPC", "Express"],
    imageUrl: hippoImg,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Nest.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "PHP",
  "Lavarel",
  "Yii",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;