import About from "@components/sections/about/About.astro";
import Experience from "@components/sections/experience/Experience.astro";
import Projects from "@components/sections/projects/Projects.astro";
import Skills from "@components/sections/skills/Skills.astro";

export const SECTIONS = [
  {
    id: "experience",
    title: "experience",
    component: Experience
  },
  {
    id: "projects",
    title: "projects",
    component: Projects
  },
  {
    id: "about",
    title: "about",
    component: About
  },
  {
    id: "skills",
    title: "skills",
    component: Skills
  }
];