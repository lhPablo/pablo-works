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
    color: "#00618bff"
  },
  {
    name: "Spring Boot",
    icon: SpringBootIcon,
    color: "#64bd45ff"
  },
  {
    name: "Kafka",
    icon: KafkaIcon,
    color: "#6b7280ff"
  },
  {
    name: "PostgreSQL",
    icon: PostgresIcon,
    color: "#4169e1ff"
  },
  {
    name: "AWS",
    icon: AwsIcon,
    color: "#ff9900ff"
  },
  {
    name: "TypeScript",
    icon: TypescriptIcon,
    color: "#0090e0ff"
  },
  {
    name: "JavaScript",
    icon: JavascriptIcon,
    color: "#ffd100ff"
  },
  {
    name: "React",
    icon: ReactIcon,
    color: "#61dafbff"
  },
  {
    name: "Next.js",
    icon: NextIcon,
    color: "#6b7280ff"
  },
  {
    name: "Angular",
    icon: AngularIcon,
    color: "#dd0031ff"
  },
  {
    name: "Astro",
    icon: AstroIcon,
    color: "#BC52EE"
  },
  {
    name: "Tailwind",
    icon: TailwindIcon,
    color: "#06b6d4ff"
  },
  {
    name: "HTML",
    icon: HtmlIcon,
    color: "#ff6700ff"
  },
  {
    name: "CSS",
    icon: CssIcon,
    color: "#1874c3ff"
  }
] as const;

export type SkillName = (typeof SKILLS)[number]["name"];

export const getSkill = (name: SkillName) =>
  SKILLS.find((skill) => skill.name === name) ?? null;
