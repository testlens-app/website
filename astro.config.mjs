// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

import mermaid from "astro-mermaid";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      tsconfigPaths: true,
    },
  },
  site: "https://testlens.app",
  integrations: [
    react(),
    icon(),
    mermaid(),
    starlight({
      title: "TestLens Documentation",
      favicon: "favicon.png",
      pagination: false,
      logo: {
        light: "./src/assets/logo.svg",
        dark: "./src/assets/logo_inverted.svg",
        replacesTitle: true,
      },
      customCss: [
        './src/styles/global.css',
        '@fontsource-variable/google-sans-flex/slnt.css',
        '@fontsource-variable/google-sans-code/index.css',
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/testlens-app/setup-testlens",
        },
        {
          icon: "mastodon",
          label: "Mastodon",
          href: "https://mastodon.social/@testlens",
        },
        {
          icon: "blueSky",
          label: "Bluesky",
          href: "https://bsky.app/profile/testlens.app",
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/testlens/",
        },
      ],
      sidebar: ['Introduction', 'Setup', 'Features'].map((label) => ({
        label,
        items: [{ autogenerate: { directory: `docs/${label}` } }],
      })),
    }),
    mdx(),
  ],
});
