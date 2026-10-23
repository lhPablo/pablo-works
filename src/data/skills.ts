import ReactIcon from "@/components/icons/React.astro";
import SpringBootIcon from "@/components/icons/SpringBoot.astro";
import AstroIcon from "@components/icons/Astro.astro";
import CodeIcon from "@components/icons/Code.astro";
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
    name: "Next.js",
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
  {
    name: "Python",
    icon: CodeIcon,
    color: "#3776abff"
  },
  {
    name: "SQL",
    icon: CodeIcon,
    color: "#6b7280ff"
  },
  {
    name: "PostgreSQL",
    icon: CodeIcon,
    color: "#4169e1ff"
  },
  {
    name: "Angular",
    icon: CodeIcon,
    color: "#dd0031ff"
  },
  {
    name: "Tailwind",
    icon: CodeIcon,
    color: "#06b6d4ff"
  },
  {
    name: "SASS",
    icon: CodeIcon,
    color: "#cc6699ff"
  },
  {
    name: "Kafka",
    icon: CodeIcon,
    color: "#6b7280ff"
  },
  {
    name: "gRPC",
    icon: CodeIcon,
    color: "#244c5aff"
  },
  {
    name: "Kubernetes",
    icon: CodeIcon,
    color: "#326ce5ff"
  },
  {
    name: "GitLab CI/CD",
    icon: CodeIcon,
    color: "#fc6d26ff"
  },
] as const;

export type SkillName = (typeof SKILLS)[number]["name"];

export const getSkill = (name: SkillName) =>
  SKILLS.find((skill) => skill.name === name) ?? null;
