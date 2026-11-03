import profile from "@assets/profile.webp"
import type { Language } from "@lib/i18n";

export const PROFILE = {
    name: "Pablo López",
    role: "Senior Full-stack Developer",
    careerStart: new Date('2018-01-01'),
    linkedin: "https://www.linkedin.com/in/pablo-lopezhernandez-valencia/",
    email: "p.lh@hotmail.com",
    cv: { es: "/CV_ES.pdf", en: "/CV_EN.pdf" } satisfies Record<Language, string>,
    image: profile
} as const;
