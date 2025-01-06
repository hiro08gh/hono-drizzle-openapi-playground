import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable(
	"users",
	{
		id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
		name: text("name").notNull(),
	},
	() => [],
);

export const todos = sqliteTable("todos", {
	id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
	title: text("title").notNull(),
	status: text("status", { enum: ["todo", "doing", "done"] }).default("todo"),
	createdAt: integer("created_at", { mode: "timestamp" }).default(
		sql`(strftime('%s', 'now'))`,
	),
	updatedAt: integer("updated_at", { mode: "timestamp" }).default(
		sql`(strftime('%s', 'now'))`,
	),
});
