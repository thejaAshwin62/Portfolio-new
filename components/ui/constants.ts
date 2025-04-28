import html from "./tech/html.png";
import css from "./tech/css.png";
import javascript from "./tech/javascript.png";
import typescript from "./tech/typescript.png";
import reactjs from "./tech/reactjs.png";
import nodejs from "./tech/nodejs.png";
import threejs from "./tech/threejs.svg";
import git from "./tech/git.png";
import tailwind from "./tech/tailwind.png";
import mongodb from "./tech/mongodb.png";
import docker from "./tech/docker.png";
import figma from "./tech/figma.png";
import redux from "./tech/redux.png";
import blender from "./tech/blender.png";
import unity from "./tech/unity.png";

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
    name: "TypeScript",
    icon: typescript,
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
    name: "Redux",
    icon: redux,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Unity",
    icon: unity,
  }
]; 