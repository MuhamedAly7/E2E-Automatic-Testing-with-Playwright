import { expect, test } from "@playwright/test";

test.describe("Login test cases", () => {
  test("Should have the correct title", async ({ page }) => {
    // Open the website
    await page.goto("https://qacart-todo.herokuapp.com/");
    await expect(page).toHaveTitle("QAcart Todo App - Login page");
    // getting the title
    // const title = await page.title();
  });

  test("should have the correct URL", async ({ page }) => {
    await page.goto("https://qacart-todo.herokuapp.com/login");
    await expect(page).toHaveURL("https://qacart-todo.herokuapp.com/login");
  });

  test("Header should be visible by text", async ({ page }) => {
    await page.goto("https://qacart-todo.herokuapp.com/login");
    const header = page.locator("text=Login to Application");
    await expect(header).toBeVisible();
  });

  test("Header should contain the correct text", async ({ page }) => {
    await page.goto("https://qacart-todo.herokuapp.com/login");
    const header = page.locator(".header");
    await expect(header).toHaveText("Login to Application");
  });

  test("should be able to fill email", async ({ page }) => {
    await page.goto("https://qacart-todo.herokuapp.com/login");
    const emailField = page.locator("#email");
    await emailField.fill("mohamed@example.com");
    await expect(emailField).toHaveValue("mohamed@example.com");
  });

  test("should be able to fill password", async ({ page }) => {
    await page.goto("https://qacart-todo.herokuapp.com/login");
    const passwordField = page.locator("data-testid=password");
    await passwordField.fill("123456");
    // await page.pause();
    await expect(passwordField).toHaveValue("123456");
  });

  test("should be able to fill password by xpath", async ({ page }) => {
    await page.goto("https://qacart-todo.herokuapp.com/login");
    const passwordField = page.locator("//input[@data-testid=password]");
    await passwordField.fill("123456");
    // await page.pause();
    await expect(passwordField).toHaveValue("123456");
  });

  test("should be click to submit button", async ({ page }) => {
    await page.goto("https://qacart-todo.herokuapp.com/login");
    await page.waitForURL("/login");
    await page.locator("#email").fill("hatem@example.com");
    await page.locator("data-testid=password").fill("123456");

    const submitButton = page.locator('button:has-text("Login")');
    // await page.waitForTimeout(3000);
    // await submitButton.waitFor({ state: "visible", timeout: 3000 });

    await submitButton.click();
    await expect(page).toHaveTitle("QAcart Todo App - Todo page", {
      timeout: 3000,
    });
  });
});
