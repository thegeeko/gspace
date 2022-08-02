import { test, expect } from "@playwright/test";

test("go to /", async ({ page }) => {
  await page.goto("/");

  await page.waitForSelector(`text=Starter`);
});

test("test 404", async ({ page }) => {
  const res = await page.goto("/post/not-found");
  expect(res?.status()).toBe(404);
});

export {};
