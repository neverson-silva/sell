import { z } from 'zod'
import { ulid } from 'ulid'
import { db } from '@/db/connection'
import { products } from '@/db/schema'

export const productSchema = z.object({
  id: z.string().length(26).optional(),
  category_id: z.string().length(26).optional(),
  name: z.string(),
  description: z.string(),
  producer_name: z.string(),
  producer_email: z.string().email(),
  cover: z.string().url(),
  thumbnail: z.string().url(),
  price: z.number().positive(),
  updated_at: z.string().datetime({ precision: 3 }).default(new Date().toISOString()),
  created_at: z.string().datetime({ precision: 3 }).default(new Date().toISOString()),
})

export type NewProductDto = z.infer<typeof productSchema>

export const createNewProduct = async (newProductSchema: NewProductDto) => {
  const newProduct = newProductSchema

  newProduct.id = ulid()
  newProduct.category_id = ulid()

  return await db
    .insert(products)
    .values(newProduct as any)
    ?.returning()
}
