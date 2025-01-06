import { z } from "@hono/zod-openapi";
import { createRoute } from "@hono/zod-openapi";

const HelloSchema = z
  .object({
    message: z.string().openapi({
      example: "Hello Hono!",
    }),
  })
  .openapi("Hello");

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
