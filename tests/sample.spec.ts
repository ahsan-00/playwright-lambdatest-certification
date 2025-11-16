import { test, expect } from "@playwright/test";

test("Sample test on LambdaTest", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/");
  
  await page.locator("a:text('Simple Form Demo')").click();
  
  const input = page.locator("#user-message");
  const btn = page.locator("#showInput");
  
  await input.fill("Hello Playwright!");
  await btn.click();
  
  await expect(page.locator("#message")).toHaveText("Hello Playwright!");
});
