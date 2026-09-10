import { PROFILE } from "../data/profile";

export function yearsOfExperience(from = PROFILE.careerStart, to = new Date()) {
    let years = to.getFullYear() - from.getFullYear();

    const before =
        to.getMonth() < from.getMonth() ||
        (to.getMonth() === from.getMonth() && to.getDate() < from.getDate());

    return before ? years - 1 : years;
}