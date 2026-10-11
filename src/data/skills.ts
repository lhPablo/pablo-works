import ReactIcon from "@/components/icons/React.astro";
import SpringBootIcon from "@/components/icons/SpringBoot.astro";
import AstroIcon from "@components/icons/Astro.astro";
import CssIcon from "@components/icons/Css.astro";
import HtmlIcon from "@components/icons/Html.astro";
import JavaIcon from "@components/icons/Java.astro";
import JavascriptIcon from "@components/icons/Javascript.astro";
import NextIcon from "@components/icons/Next.astro";
import TypescriptIcon from "@components/icons/Typescript.astro";

export const SKILLS = [
  {
    name: "HTML",
    icon: HtmlIcon,
    color: "#ff6700ff"
  },
  {
    name: "CSS",
    icon: CssIcon,
    color: "#1874c3ff"
  },
  {
    name: "JavaScript",
    icon: JavascriptIcon,
    color: "#ffd100ff"
  },
  {
    name: "TypeScript",
    icon: TypescriptIcon,
    color: "#0090e0ff"
  },
  {
    name: "React",
    icon: ReactIcon,
    color: "#61dafbff"
  },
  {
    name: "Astro",
    icon: AstroIcon,
    color: "#BC52EE"
  },
  {
    name: "NextJS",
    icon: NextIcon,
    color: "#6b7280ff"
  },
  {
    name: "Java",
    icon: JavaIcon,
    color: "#00618bff"
  },
  {
    name: "Spring Boot",
    icon: SpringBootIcon,
    color: "#64bd45ff"
  },
] as const;

export type SkillName = (typeof SKILLS)[number]["name"];

export const getSkill = (name: SkillName) =>
  SKILLS.find((skill) => skill.name === name) ?? null;
