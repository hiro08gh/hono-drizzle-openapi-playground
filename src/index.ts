import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import router from "./routes";

type Bindings = {
	DB: D1Database;
};

const app = new OpenAPIHono<{ Bindings: Bindings }>();

app.use(logger(), cors());
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
