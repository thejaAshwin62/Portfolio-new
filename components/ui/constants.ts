import html from "@/public/tech/html.png";
import css from "@/public/tech/css.png";
import javascript from "@/public/tech/javascript.png";
import reactjs from "@/public/tech/reactjs.png";
import nodejs from "@/public/tech/nodejs.png";
import threejs from "@/public/tech/threejs.svg";
import git from "@/public/tech/git.png";
import tailwind from "@/public/tech/tailwind.png";
import mongodb from "@/public/tech/mongodb.png";
import docker from "@/public/tech/docker.png";
import figma from "@/public/tech/figma.png";
import blender from "@/public/tech/blender.png";
import unity from "@/public/tech/unity.png";
import spring from "@/public/tech/spring.png";
import nextjs from "@/public/tech/nextjs.jpeg";
import github from "@/public/tech/github.png";
import aws from "@/public/tech/aws.jpg";

import { StaticImageData } from "next/image";

interface Technology {
  name: string;
  icon: StaticImageData;
}

export const technologies: Technology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SpringBoot",
    icon: spring,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name:"GitHub",
    icon: github,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Unity",
    icon: unity,
  },
];
