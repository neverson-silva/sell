import { db } from '@/db/connection'
import { products } from '@/db/schema'
import { asc, sql } from 'drizzle-orm'

export const searchProducts = async (term: string) => {
  return await db
    .select()
    .from(products)
    .where(
      sql`to_tsvector(${products.name}) || to_tsvector(${products.producer_name}) @@ to_tsquery(${term})`,
    )
    .limit(30)
    .orderBy(asc(products.name))
}
