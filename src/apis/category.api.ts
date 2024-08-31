import { Category } from 'src/types/category.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = 'categories'

export const getCategories = () => {
  return http.get<SuccessResponse<Category[]>>(URL)
}
