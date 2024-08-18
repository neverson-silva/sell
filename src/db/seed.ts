import { products } from '@/db/schema'
import { faker } from '@faker-js/faker'
import { NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres'

import { Client } from 'pg'
import { ulid } from 'ulid'

const generateRandomProduct = () => {
  return {
    id: ulid(),
    category_id: ulid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    producer_name: faker.company.name(),
    producer_email: faker.internet.email().toLocaleLowerCase(),
    cover: faker.image.imageUrl(),
    thumbnail: faker.image.imageUrl(),
    price: parseFloat(faker.commerce.price()),
  }
}

const createConnection = async () => {
  const client = new Client({
    host: process.env.DB_HOST,
    port: 5432,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })

  await client.connect()

  return drizzle(client)
}
export const seedDatabase = async (
  numberOfProducts: number,
  database: NodePgDatabase<Record<string, never>>,
) => {
  for (let index = 0; index < numberOfProducts; index++) {
    const product = generateRandomProduct()
    console.log(`Seeding product: ${index + 1}/${numberOfProducts}`)
    await database.insert(products).values(product as any)
  }
  process.exit(1)
}
createConnection().then((db) => {
  seedDatabase(50, db)
})
