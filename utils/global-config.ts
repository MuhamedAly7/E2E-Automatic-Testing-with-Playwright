import { request } from "@playwright/test";

async function globalConfig() {
  const requestContext = await request.newContext();
  await requestContext.post(
    "https://qacart-todo.herokuapp.com/api/v1/users/login",
    { data: { email: "mohamedali@email.com", password: "123456789A" } }
  );

  await requestContext.storageState({ path: "storageState.json" });
}

export default globalConfig;
