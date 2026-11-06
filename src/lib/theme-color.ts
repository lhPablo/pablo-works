export type ThemeColor = { light: string; dark: string };

export const THEME_GLOW_CLASS = "[--glow-color:var(--glow-light)] dark:[--glow-color:var(--glow-dark)]";

export const themeGlowStyle = (color: ThemeColor) => `--glow-light: ${color.light}; --glow-dark: ${color.dark}`;
