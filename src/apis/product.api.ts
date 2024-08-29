import { Product, ProductList, ProductListConfig } from 'src/types/product.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = 'products'

export const getProducts = (params: ProductListConfig) => {
  return http.get<SuccessResponse<ProductList>>(URL, { params })
}

export const getProductDetail = (id: string) => {
  return http.get<SuccessResponse<Product>>(`${URL}/${id}`)
}
