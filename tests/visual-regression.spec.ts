import { test, expect } from "@playwright/test";

test.describe("Visual Regression Tests", () => {
  test("homepage", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(500); // Extra settling time for images/fonts
    await expect(page).toHaveScreenshot("homepage.png", {
      fullPage: true,
      // Small tolerance for font rendering/subpixel variations between runs
      maxDiffPixelRatio: 0.02,
      // Mask the copyright year in footer
      mask: [page.locator(".footer-copyright")],
    });
  });

  test("terms page", async ({ page }) => {
    await page.goto("/terms");
    await expect(page).toHaveScreenshot("terms.png", {
      fullPage: true,
      mask: [page.locator(".footer-copyright")],
    });
  });

  test("privacy policy page", async ({ page }) => {
    await page.goto("/privacy");
    await expect(page).toHaveScreenshot("privacy-policy.png", {
      fullPage: true,
      mask: [page.locator(".footer-copyright")],
    });
  });
});
