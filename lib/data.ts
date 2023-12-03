import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaPhp } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import taskifyImg from "@/public/taskify.png";

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
      "What started as a hobby has evolved into a fascinating journey into the realm of programming. Immersing myself in the foundational aspects of web development and computer science, this exploration began as a passion project and has since transformed into a dedicated pursuit. Through this ongoing journey, I've not only gained a deeper understanding of the fundamentals but also witnessed the gradual progression from a hobbyist's enthusiasm to a more profound engagement with the intricate world of coding.",
    icon: React.createElement(LuGraduationCap),
    date: "since 2017",
  },
  {
    title: "PHP developer",
    location: "Saint-Petersburg, Russia",
    description:
      "I bring substantial expertise as a PHP WordPress developer, with a significant focus on one year of dedicated front-end development in this role. Along the course of my professional journey, I've broadened my skills to encompass end-to-end development. Moreover, I possess hands-on experience and proficiency in frameworks like Laravel and Yii, further enhancing my capabilities in delivering comprehensive solutions.",
    icon: React.createElement(FaPhp),
    date: "2019 - 2020",
  },
  {
    title: "UX/UI Designer, Frontend developer",
    location: "Alanya, Turkish Republic",
    description:
      "In my remote role with an American company, INFUSEmedia, I initially focused on designing email layouts for partner advertising campaigns, including the responsive HTML coding. Over time, my responsibilities expanded to encompass crafting custom landing pages for various advertising initiatives. Additionally, I actively contributed as a frontend developer to external projects, enhancing my versatility in digital marketing endeavors. This experience has honed my skills in email design, coding, and frontend development within the dynamic landscape of the advertising industry.",
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