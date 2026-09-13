import About from "@components/About.astro";
import Experience from "@components/Experience.astro";
import Projects from "@components/Projects.astro";
import Skills from "@components/Skills.astro";

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