import { getProductById } from '@/services/get-product-by-id'

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
  const product = await getProductById(params.id)

  return Response.json(product)
}
