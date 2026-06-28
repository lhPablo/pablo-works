// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "fr"],
  },

  fonts: [
      {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-sans",
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      subsets: ["latin"],
      fallbacks: ["monospace"],
    },
  ],
});