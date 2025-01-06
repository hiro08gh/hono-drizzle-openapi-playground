import { z } from "@hono/zod-openapi";

export const HelloSchema = z
  .object({
    message: z.string().openapi({
      example: "Hello Hono!",
    }),
  })
  .openapi("Hello");
