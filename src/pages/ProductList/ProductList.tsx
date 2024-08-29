import { keepPreviousData, useQuery } from '@tanstack/react-query'
import AsideFilter from './AsideFilter'
import { Product } from './Product/Product'
import SortedProductList from './SortProductList'
import { getProducts } from 'src/apis/product.api'
import Pagination from 'src/components/Pagination'
import { ProductListConfig } from 'src/types/product.type'
import useQueryConfig from 'src/hooks/useQueryConfig'

const ProductList = () => {
  const queryConfig = useQueryConfig()

  const { data } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: async () => {
      const products = await getProducts(queryConfig as ProductListConfig)
      return products
    },
    placeholderData: keepPreviousData
  })

  console.log(data)

  return (
    <div className='bg-[#f5f5f5] pt-[1.5625rem] py-5 grow'>
      <div className='container'>
        <div className='grid grid-cols-[11.875rem_1fr] gap-5'>
          <div className='col-span-1'>
            <AsideFilter />
          </div>
          <div className='col-span-1'>
            <div className='flex items-center gap-[0.625rem] mb-6'>
              <svg viewBox='0 0 18 24' className='h-[1.375rem] w-4 text-[#555] fill-current'>
                <g transform='translate(-355 -149)'>
                  <g transform='translate(355 149)'>
                    <g fillRule='nonzero' transform='translate(5.4 19.155556)'>
                      <path d='m1.08489412 1.77777778h5.1879153c.51164401 0 .92641344-.39796911.92641344-.88888889s-.41476943-.88888889-.92641344-.88888889h-5.1879153c-.51164402 0-.92641345.39796911-.92641345.88888889s.41476943.88888889.92641345.88888889z' />
                      <g transform='translate(1.9 2.666667)'>
                        <path d='m .75 1.77777778h2.1c.41421356 0 .75-.39796911.75-.88888889s-.33578644-.88888889-.75-.88888889h-2.1c-.41421356 0-.75.39796911-.75.88888889s.33578644.88888889.75.88888889z' />
                      </g>
                    </g>
                    <path
                      d='m8.1 8.77777718v4.66666782c0 .4295545.40294373.7777772.9.7777772s.9-.3482227.9-.7777772v-4.66666782c0-.42955447-.40294373-.77777718-.9-.77777718s-.9.34822271-.9.77777718z'
                      fillRule='nonzero'
                    />
                    <path
                      d='m8.1 5.33333333v.88889432c0 .49091978.40294373.88888889.9.88888889s.9-.39796911.9-.88888889v-.88889432c0-.49091977-.40294373-.88888889-.9-.88888889s-.9.39796912-.9.88888889z'
                      fillRule='nonzero'
                    />
                    <path d='m8.80092773 0c-4.86181776 0-8.80092773 3.97866667-8.80092773 8.88888889 0 1.69422221.47617651 3.26933331 1.295126 4.61333331l2.50316913 3.9768889c.30201078.4782222.84303623.7697778 1.42482388.7697778h7.17785139c.7077799 0 1.3618277-.368 1.7027479-.9617778l2.3252977-4.0213333c.7411308-1.2888889 1.1728395-2.7786667 1.1728395-4.37688891 0-4.91022222-3.9409628-8.88888889-8.80092777-8.88888889m0 1.77777778c3.82979317 0 6.94810087 3.18933333 6.94810087 7.11111111 0 1.24444441-.3168334 2.43022221-.9393833 3.51466671l-2.3252977 4.0213333c-.0166754.0284444-.0481735.0462222-.0833772.0462222h-7.07224026l-2.43461454-3.8648889c-.68184029-1.12-1.04128871-2.4053333-1.04128871-3.71733331 0-3.92177778 3.11645483-7.11111111 6.94810084-7.11111111' />
                  </g>
                </g>
              </svg>
              <span className='font-normal text-base text-[#555] py-[0.1875rem]'>
                Kết quả tìm kiếm cho từ khóa '<span className='text-[#ee4d2d]'>quần áo</span>'
              </span>
            </div>
            {data && (
              <>
                <SortedProductList queryConfig={queryConfig} pageSize={data.data.data.pagination.page_size} />
                <div className='mt-[0.3125rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[0.625rem]'>
                  {data.data.data.products.map((product) => (
                    <div className='col-span-1' key={product._id}>
                      <Product product={product} />
                    </div>
                  ))}
                </div>
                <Pagination queryConfig={queryConfig} pageSize={data.data.data.pagination.page_size} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
