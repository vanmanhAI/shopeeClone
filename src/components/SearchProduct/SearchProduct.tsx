import Popover from '@/components/Popover'
import SearchProductSuggest from '../SearchProductSuggest'
import useDebounce from '@/hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { searchProducts } from '@/apis/product.api'
import { QUERY_KEYS } from '@/constants/queryKeys'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { schemaSearch } from '@/utils/rules'
import { createSearchParams, useNavigate } from 'react-router-dom'
import path from '@/constants/path'
import { omit } from 'lodash'
import useQueryConfig from '@/hooks/useQueryConfig'
import { ProductListConfig } from '@/types/product.type'
import { useEffect } from 'react'

interface Props {
  placeHolder: string
}

export interface SearchProductFormData {
  name: string
}

export default function SearchProduct({ placeHolder }: Props) {
  const queryConfig = useQueryConfig() as ProductListConfig
  const navigate = useNavigate()
  console.log('render')
  console.log('queryConfig.name', queryConfig.name)

  const { register, handleSubmit, watch, setValue } = useForm<SearchProductFormData>({
    defaultValues: {
      name: ''
    },
    resolver: joiResolver(schemaSearch)
  })
  const searchValue = watch('name')

  const debouncedValue = useDebounce({ value: searchValue.trim(), delay: 300 })
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.SEARCH_PRODUCTS, debouncedValue],
    queryFn: () => searchProducts(debouncedValue),
    enabled: !!debouncedValue
  })

  const searchProductsResult = data?.data.data.products

  const onSubmitSearch = handleSubmit(() => {
    navigate({
      pathname: path.home,
      search: createSearchParams(
        omit({ ...queryConfig, name: searchValue.trim() }, [
          'sort_by',
          'price_min',
          'price_max',
          'rating_filter',
          'category'
        ])
      ).toString()
    })
  })

  useEffect(() => {
    setValue('name', queryConfig.name || '')
  }, [queryConfig.name, setValue])

  return (
    <Popover
      offsetOptions={{
        mainAxis: 8
      }}
      isSameLengthAsReference={true}
      minusFloatingWidth={86}
      applyAnimation={false}
      isChangePositionX={false}
      isApplySearchInputEvent={true}
      placement='bottom-start'
      arrowColor='transparent'
      isApplyHover={false}
      renderPopover={
        <SearchProductSuggest
          searchValue={searchValue}
          query={debouncedValue}
          searchProductsResult={searchProductsResult}
        />
      }
    >
      <form onSubmit={onSubmitSearch} className='bg-white h-10 z-50 rounded-sm p-[0.1875rem] flex'>
        <input
          type='text'
          placeholder={placeHolder}
          className='text-[#000000cc] px-3 py-2 text-sm flex-grow border-none outline-none bg-transparent'
          {...register('name')}
          autoComplete='off'
          aria-autocomplete='list'
        />
        <button className='rounded-sm flex justify-center items-center bg-orange py-2 px-[1.375rem] flex-shrink-0 hover:opacity-90'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='white'
            className='size-[1.1875rem]'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
        </button>
      </form>
    </Popover>
  )
}
