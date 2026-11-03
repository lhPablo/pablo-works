import { Layers, Rocket, Users } from "@lucide/astro";

export const TRAITS = [
  { id: "leadership", icon: Users, color: "var(--color-accent-2)" },
  { id: "fullstack", icon: Layers, color: "var(--color-accent)" },
  { id: "initiative", icon: Rocket, color: "var(--color-accent-3)" },
] as const;
