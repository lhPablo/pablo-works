import ReactIcon from "@/components/icons/React.astro";
import SpringBootIcon from "@/components/icons/SpringBoot.astro";
import AstroIcon from "@components/icons/Astro.astro";
import CssIcon from "@components/icons/Css.astro";
import HtmlIcon from "@components/icons/Html.astro";
import JavaIcon from "@components/icons/Java.astro";
import JavascriptIcon from "@components/icons/Javascript.astro";
import NextIcon from "@components/icons/Next.astro";
import TypescriptIcon from "@components/icons/Typescript.astro";
import AngularIcon from "@components/icons/Angular.astro";
import TailwindIcon from "@components/icons/Tailwind.astro";
import KafkaIcon from "@components/icons/Kafka.astro";
import AwsIcon from "@components/icons/Aws.astro";
import PostgresIcon from "@components/icons/Postgres.astro";

export const SKILLS = [
  {
    name: "Java",
    icon: JavaIcon,
    color: { light: "#00618b", dark: "#3b89b5" }
  },
  {
    name: "Spring Boot",
    icon: SpringBootIcon,
    color: { light: "#2d7a03", dark: "#64bd45" }
  },
  {
    name: "Kafka",
    icon: KafkaIcon,
    color: { light: "#646b79", dark: "#7b8290" }
  },
  {
    name: "PostgreSQL",
    icon: PostgresIcon,
    color: { light: "#3a61d8", dark: "#507af4" }
  },
  {
    name: "AWS",
    icon: AwsIcon,
    color: { light: "#9b5b00", dark: "#ff9900" }
  },
  {
    name: "TypeScript",
    icon: TypescriptIcon,
    color: { light: "#026ead", dark: "#0090e0" }
  },
  {
    name: "JavaScript",
    icon: JavascriptIcon,
    color: { light: "#806801", dark: "#ffd100" }
  },
  {
    name: "React",
    icon: ReactIcon,
    color: { light: "#03748c", dark: "#61dafb" }
  },
  {
    name: "Next.js",
    icon: NextIcon,
    color: { light: "#646b79", dark: "#7b8290" }
  },
  {
    name: "Angular",
    icon: AngularIcon,
    color: { light: "#d5002f", dark: "#f53045" }
  },
  {
    name: "Astro",
    icon: AstroIcon,
    color: { light: "#a133d1", dark: "#bc52ee" }
  },
  {
    name: "Tailwind",
    icon: TailwindIcon,
    color: { light: "#067488", dark: "#06b6d4" }
  },
  {
    name: "HTML",
    icon: HtmlIcon,
    color: { light: "#b64802", dark: "#ff6700" }
  },
  {
    name: "CSS",
    icon: CssIcon,
    color: { light: "#096cbb", dark: "#2f85d5" }
  }
] as const;

export type SkillName = (typeof SKILLS)[number]["name"];

export const getSkill = (name: SkillName) =>
  SKILLS.find((skill) => skill.name === name) ?? null;
