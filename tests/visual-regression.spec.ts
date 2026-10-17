import { test, expect } from "@playwright/test";

const pages = [
  { name: "homepage", path: "/", screenshot: "homepage.png" },
  { name: "terms page", path: "/terms", screenshot: "terms.png" },
  {
    name: "privacy policy page",
    path: "/privacy",
    screenshot: "privacy-policy.png",
  },
  {
    name: "test failure details blog post",
    path: "blog/2026/03/18/test-failure-details",
    screenshot: "test-failure-details-blog-post.png",
  },
];

test.describe("Visual Regression Tests", () => {
  for (const { name, path, screenshot } of pages) {
    test(name, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState("networkidle");
      await expect(page).toHaveScreenshot(screenshot, {
        fullPage: true,
        // Small tolerance for font rendering/subpixel variations between runs
        maxDiffPixelRatio: 0.01,
        // Mask the copyright year in footer
        mask: [page.locator(".footer-copyright")],
      });
    });
  }
});
