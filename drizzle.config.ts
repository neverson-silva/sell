import { defineConfig } from 'drizzle-kit'
import { config } from 'dotenv'

config()

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './src/db/drizzle',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: 5432,
    user: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    ssl: false,
  },
})
