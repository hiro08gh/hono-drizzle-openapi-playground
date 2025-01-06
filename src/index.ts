import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import router from "./routes";

type Bindings = {
  DB: D1Database;
};

const app = new OpenAPIHono<{ Bindings: Bindings }>();

app
  .route("/", router)
  .doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "hono-drizzle-openapi-playground",
    },
  })
  .get("/ui", swaggerUI({ url: "/doc" }));

export default app;
