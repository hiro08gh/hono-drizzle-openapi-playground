# hono-drizzle-openapi-playground

Hono + Drizzle + OpenAPI sample playground.

## setup

Create datebase in D1.

```bash
npx wrangler d1 create hono-drizzle-openapi-playground
```

Add database_id.

```toml
[[d1_databases]]
binding = "DB"
database_name = "hono-drizzle-openapi-playground"
database_id = "your datebase_id"
migrations_dir = "drizzle"
```

And, migration your local.

```bash
npm run migration:local
```

Finally, start dev server.

```bash
npm run dev
```

## Deploy

```bash
npm run deploy
```
