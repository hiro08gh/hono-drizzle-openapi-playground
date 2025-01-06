import { OpenAPIHono } from "@hono/zod-openapi";

import { route } from "./schema";

const app = new OpenAPIHono();

app.openapi(route, (c) => {
  return c.json({ message: "Hello Hono!" });
});

export default app;
