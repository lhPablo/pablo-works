import { getMockup } from "@lib/mockup";
import type { SkillName } from "@data/skills";

export interface ProjectMockup {
  laptop: { poster: ImageMetadata; mp4: string; webm: string };
  tablet: ImageMetadata;
  phone: ImageMetadata;
}

export interface Project {
  name: string;
  description: string;
  url: string;
  repo: string;
  technologies: SkillName[];
  mockup: ProjectMockup;
}

const PROJECT_DATA: Record<string, Omit<Project, "mockup">> = {
  songparty: {
    name: "Project 1",
    description: "Prueba de descripción más larga, aun no he pensado en que poner y prefiero dejarlo asi pero en un futuro lo actualizare. Intentare que sea una descripción mas larga para que se vea mejor.",
    url: "https://project1.com",
    repo: "https://project1.com",
    technologies: ["HTML", "CSS", "TypeScript", "Astro"]
  },
  wedding: {
    name: "Project 2",
    description: "Hola esto es una prueba para ver como queda con mas texto. Como dije en la anterior, no se me ocurre que poner pero en un futuro lo actualizare. Supongo que deberia incluir mas detalles sobre el proyecto, como que hace y que tecnologias usa, pero por ahora es solo una prueba. Lo siento por el texto aburrido.",
    url: "https://project2.com",
    repo: "https://project2.com",
    technologies: ["HTML", "CSS", "TypeScript", "NextJS"]
  },
};

export const PROJECTS: Project[] = Object.entries(PROJECT_DATA).map(([key, project]) => ({
  ...project,
  mockup: getMockup(key),
}));
