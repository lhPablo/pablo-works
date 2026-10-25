import { PROFILE } from "@data/profile";

export function yearsOfExperience(from = PROFILE.careerStart, to = new Date()) {
    let years = to.getFullYear() - from.getFullYear();

    const before =
        to.getMonth() < from.getMonth() ||
        (to.getMonth() === from.getMonth() && to.getDate() < from.getDate());

    return before ? years - 1 : years;
}
export function formatPeriod(from: Date, to: Date | null, locale: string, present: string) {
    const format = new Intl.DateTimeFormat(locale, { month: "short", year: "numeric", timeZone: "UTC" });

    return `${format.format(from)} — ${to ? format.format(to) : present}`;
}
