import { pgTable, varchar, numeric, date } from 'drizzle-orm/pg-core'

export const products = pgTable('products', {
  id: varchar('id', { length: 26 }).primaryKey(),
  category_id: varchar('category_id', { length: 26 }),
  name: varchar('name').notNull(),
  description: varchar('description').notNull(),
  producer_name: varchar('producer_name').notNull(),
  producer_email: varchar('producer_email').notNull(),
  cover: varchar('cover').notNull(),
  thumbnail: varchar('thumbnail').notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  updated_at: date('updated_at').defaultNow().notNull(),
  created_at: date('created_at').defaultNow().notNull(),
})
