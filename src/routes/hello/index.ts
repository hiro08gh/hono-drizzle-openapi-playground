import { OpenAPIHono } from "@hono/zod-openapi";
import { createRoute } from "@hono/zod-openapi";

import { HelloSchema } from "./schema";

const app = new OpenAPIHono();

export const route = createRoute({
  path: "/",
  method: "get",
  responses: {
    200: {
      description: "hello entrypoint",
      content: {
        "application/json": {
          schema: HelloSchema,
        },
      },
    },
  },
});

app.openapi(route, (c) => {
  return c.json({ message: "Hello Hono!" });
});

export default app;
