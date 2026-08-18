// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

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
    starlight({
      title: "TestLens Documentation",
      favicon: 'favicon.png',
      logo: {
        light: './src/assets/logo.svg',
        dark: './src/assets/logo_inverted.svg',
        replacesTitle: true,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/testlens-app/setup-testlens',
        },
        {
          icon: 'mastodon',
          label: 'Mastodon',
          href: 'https://mastodon.social/@testlens',
        },
        {
          icon: 'blueSky',
          label: 'Bluesky',
          href: 'https://bsky.app/profile/testlens.app',
        },
        {
          icon: 'linkedin',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/testlens/',
        },
      ],
    }),
    mdx(),
  ],
});
