import { createNewProduct, productSchema } from '@/services/create-new-product'
import { searchProducts } from '@/services/search-products'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams
  const search = searchParams.get('search')

  const products = await searchProducts(search || '')

  return Response.json(products)
}
export const POST = async (req: Request) => {
  const payload = await productSchema.safeParseAsync(await req.json())

  if (payload.success) {
    const response = await createNewProduct(payload.data)
    if (response) {
      return NextResponse.json(response)
    }
  } else {
    return NextResponse.json(payload.error, { status: 400 })
  }
}
