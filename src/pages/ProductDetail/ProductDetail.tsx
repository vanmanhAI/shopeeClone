import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getProductDetail } from 'src/apis/product.api'

export const ProductDetail = () => {
  const { id } = useParams()
  const { data: productDetailData } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductDetail(id as string)
  })

  console.log(productDetailData?.data.data)

  return <div>ProductDetail</div>
}
