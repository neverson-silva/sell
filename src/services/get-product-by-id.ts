import { db } from '@/db/connection'
import { products } from '@/db/schema'
import { eq } from 'drizzle-orm'

export const getProductById = async (productId: string) => {
  return Array.from(await db.select().from(products).where(eq(products.id, productId)))?.[0]
}
