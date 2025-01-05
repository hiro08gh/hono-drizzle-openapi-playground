# hono-drizzle-openapi-playground

This is a sample playground for using Hono, Drizzle, and OpenAPI together.

## setup

Run the following command to create the database:

```bash
npx wrangler d1 create hono-drizzle-openapi-playground
```

Update your configuration file to include the database_id and other settings:

```toml
[[d1_databases]]
binding = "DB"
database_name = "hono-drizzle-openapi-playground"
database_id = "your datebase_id"
migrations_dir = "drizzle"
```

Replace your_database_id with the actual database ID.

To apply migrations locally, run:

```bash
npm run migration:local
```

Finally, start the development server with:

```bash
npm run dev
```

## Deploy

```bash
npm run deploy
```
