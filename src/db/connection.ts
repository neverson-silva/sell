import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'

export const databaseClientOptions = {
  host: process.env.DB_HOST,
  port: 5432,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}

export let db: ReturnType<typeof drizzle>

const connectToDb = async () => {
  if (!db) {
    const client = new Client(databaseClientOptions)

    await client.connect()

    db = drizzle(client, { logger: true })
  }
}

connectToDb()
