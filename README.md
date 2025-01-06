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

Start the development server with:

```bash
npm run dev
```

Go to bellow url.

- http://localhost:3001 - API endpoint
- http://localhost:3001/ui - Swagger endpoint

## Test

You can run tests for the application using the following command:

```bash
npm run test
```

## Deploy

To deploy the application to a production environment, use the following command:

```bash
npm run deploy
```

## Author

[@hiro08gh](https://github.com/hiro08gh)
