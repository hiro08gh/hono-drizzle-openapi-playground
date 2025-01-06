import { OpenAPIHono } from "@hono/zod-openapi";
import helloRoute from "./hello";

const app = new OpenAPIHono();

app.route("/hello", helloRoute);

export default app;
