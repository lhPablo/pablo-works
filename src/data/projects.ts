import placeholder from "@assets/placeholder.webp";
import placeholder2 from "@assets/image.png";
import type { SkillName } from "@data/skills";

export interface Project {
  name: string;
  description: string;
  images: ImageMetadata[];
  url: string;
  repo: string;
  technologies: SkillName[];
}

export const PROJECTS: Project[] = [
  {
    name: "Project 1",
    description: "Prueba de descripción más larga, aun no he pensado en que poner y prefiero dejarlo asi pero en un futuro lo actualizare. Intentare que sea una descripción mas larga para que se vea mejor.",
    images: [placeholder],
    url: "https://project1.com",
    repo: "https://project1.com",
    technologies: ["HTML", "CSS", "TypeScript", "Astro"]
  },
  {
    name: "Project 2",
    description: "Hola esto es una prueba para ver como queda con mas texto. Como dije en la anterior, no se me ocurre que poner pero en un futuro lo actualizare. Supongo que deberia incluir mas detalles sobre el proyecto, como que hace y que tecnologias usa, pero por ahora es solo una prueba. Lo siento por el texto aburrido.",
    images: [placeholder, placeholder2, placeholder, placeholder2],
    url: "https://project2.com",
    repo: "https://project2.com",
    technologies: ["HTML", "CSS", "TypeScript", "NextJS"]
  },
];
