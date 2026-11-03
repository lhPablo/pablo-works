// Most recent first
export const EXPERIENCE = [
    {
        company: "VisualNACert S.L.",
        jobs: [
            {
                id: "leadDeveloper",
                from: new Date("2024-10-01"),
                to: null,
                role: "Lead Developer",
            },
            {
                id: "leadFrontend",
                from: new Date("2022-04-01"),
                to: new Date("2024-10-01"),
                role: "Lead Front-end",
            },
            {
                id: "fullstack",
                from: new Date("2019-09-01"),
                to: new Date("2022-04-01"),
                role: "Full-stack Developer",
            },
            {
                id: "frontend",
                from: new Date("2018-01-01"),
                to: new Date("2019-08-31"),
                role: "Front-end Developer",
            },
        ],
    },
] as const;
