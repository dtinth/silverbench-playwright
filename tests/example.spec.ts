import { expect, test } from "@playwright/test";

test("silverbench", async ({ page }) => {
  await page.goto("https://silver.urih.com/");
  await page.locator("#silver").scrollIntoViewIfNeeded();
  await page.locator("#buttonBenchmark").click();
  await expect(page.locator("#buttonSubmit")).toBeVisible({
    timeout: 600000,
  });
  const result = await page.locator("#scoreInDone").innerText();
  test.info().attach("silverbench", {
    body: result,
    contentType: "text/plain",
  });
  console.log(result);
});
