import { expect, test } from "@playwright/test";

test("should be able to using the API", async ({ request }) => {
  const response = await request.post(
    "https://qacart-todo.herokuapp.com/api/v1/users/login",
    {
      data: { email: "mohamedali@email.com", password: "123456789A" },
    }
  );

  await expect(await response.ok()).toBeTruthy();
  await expect(response.json()).toHaveProperty("firstName", "mohamed");
});
