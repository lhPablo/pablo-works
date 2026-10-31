import { getMockup } from "@lib/mockup";
import type { SkillName } from "@data/skills";

export interface ProjectMockup {
  laptop: { poster: ImageMetadata; mp4: string; webm: string };
  tablet: ImageMetadata;
  phone: ImageMetadata;
}

export interface Project {
  id: ProjectId;
  url: string;
  repo: string;
  technologies: SkillName[];
  color: string;
  mockup: ProjectMockup;
}

const PROJECT_DATA = {
  songparty: {
    url: "https://songparty.net",
    repo: "https://github.com/lhPablo/songparty",
    technologies: ["Next.js", "React", "Tailwind", "TypeScript"],
    color: "#ec4899"
  },
  wedding: {
    url: "https://paulaypablosecasan.com",
    repo: "https://github.com/lhPablo/wedding-web",
    technologies: ["Astro", "TypeScript", "CSS"],
    color: "#7b93c9"
  },
} satisfies Record<string, Omit<Project, "id" | "mockup">>;

export type ProjectId = keyof typeof PROJECT_DATA;

export const PROJECTS: Project[] = Object.entries(PROJECT_DATA).map(([key, project]) => ({
  ...project,
  id: key as ProjectId,
  mockup: getMockup(key),
}));
