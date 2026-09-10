import About from "@components/About.astro";
import Experience from "@components/Experience.astro";
import Projects from "@components/Projects.astro";
import Skills from "@components/Skills.astro";

export const SECTIONS = [
  {
    id: "about",
    title: "about",
    component: About
  },
  {
    id: "projects",
    title: "projects",
    component: Projects
  },
  {
    id: "experience",
    title: "experience",
    component: Experience
  },
  {
    id: "skills",
    title: "skills",
    component: Skills
  }
];