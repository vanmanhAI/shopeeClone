import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'src/components/Button'

export const AsideFilter = () => {
  const [selectedCategories, setSelectedCategories] = useState<Record<string, boolean>>({})

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setSelectedCategories((prev) => ({ ...prev, [name]: checked }))
  }

  return (
    <div className='flex-shrink-0'>
      <div className='flex items-center'>
        <svg
          enableBackground='new 0 0 15 15'
          viewBox='0 0 15 15'
          x={0}
          y={0}
          className='text-[0.75rem] mr-[0.625rem] stroke-current size-3'
        >
          <g>
            <polyline
              fill='none'
              points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeMiterlimit={10}
            />
          </g>
        </svg>
        <h2 className='font-bold uppercase text-base text-[#000c]'>Bộ lọc tìm kiếm</h2>
      </div>
      <fieldset className='border-b border-[#00000017] mt-5 pb-5'>
        <legend className='text-sm text-[#000000cc] mb-[0.625rem]'>Theo Danh Mục</legend>
        <div className='py-2'>
          <label className='flex items-center justify-start flex-wrap'>
            <div className='relative mr-[10px] flex'>
              <input
                type='checkbox'
                onChange={handleCheckboxChange}
                name='thoi-trang-tre-em'
                checked={selectedCategories['thoi-trang-tre-em'] || false}
                className='border select=none rounded-sm shadow-[inset_0_1px_0_0_rgba(0,0,0,.05)] border-[rgba(0,0,0,.26)] appearance-none bg-white cursor-pointer size-[.8125rem]'
              />
              {selectedCategories['thoi-trang-tre-em'] && (
                <svg
                  enableBackground='new 0 0 12 12'
                  viewBox='0 0 12 12'
                  x={0}
                  y={0}
                  className='size-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-current text-[.5rem] text-[#ee4d2d]'
                >
                  <g>
                    <path d='m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z' />
                  </g>
                </svg>
              )}
            </div>
            <span className='text-sm line-clamp-3 break-words select-none capitalize'>Thời Trang Trẻ Em (1tr+)</span>
          </label>
        </div>
        <div className='py-2'>
          <label className='flex items-center justify-start flex-wrap'>
            <div className='relative mr-[10px] flex'>
              <input
                type='checkbox'
                onChange={handleCheckboxChange}
                name='Áo'
                checked={selectedCategories['Áo'] || false}
                className='border select=none rounded-sm shadow-[inset_0_1px_0_0_rgba(0,0,0,.05)] border-[rgba(0,0,0,.26)] appearance-none bg-white cursor-pointer size-[.8125rem]'
              />
              {selectedCategories['Áo'] && (
                <svg
                  enableBackground='new 0 0 12 12'
                  viewBox='0 0 12 12'
                  x={0}
                  y={0}
                  className='size-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-current text-[.5rem] text-[#ee4d2d]'
                >
                  <g>
                    <path d='m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z' />
                  </g>
                </svg>
              )}
            </div>
            <span className='text-sm line-clamp-3 break-words select-none capitalize'>Áo (1tr+)</span>
          </label>
        </div>
        <div className='py-2'>
          <label className='flex items-center justify-start flex-wrap'>
            <div className='relative mr-[10px] flex'>
              <input
                type='checkbox'
                onChange={handleCheckboxChange}
                name='Thời_Trang_Nam'
                checked={selectedCategories['Thời_Trang_Nam'] || false}
                className='border select=none rounded-sm shadow-[inset_0_1px_0_0_rgba(0,0,0,.05)] border-[rgba(0,0,0,.26)] appearance-none bg-white cursor-pointer size-[.8125rem]'
              />
              {selectedCategories['Thời_Trang_Nam'] && (
                <svg
                  enableBackground='new 0 0 12 12'
                  viewBox='0 0 12 12'
                  x={0}
                  y={0}
                  className='size-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-current text-[.5rem] text-[#ee4d2d]'
                >
                  <g>
                    <path d='m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z' />
                  </g>
                </svg>
              )}
            </div>
            <span className='text-sm line-clamp-3 break-words select-none capitalize'>Thời Trang Nam (508k+)</span>
          </label>
        </div>
        <div className='py-2'>
          <label className='flex items-center justify-start flex-wrap'>
            <div className='relative mr-[10px] flex'>
              <input
                type='checkbox'
                onChange={handleCheckboxChange}
                name='Đầm/váy'
                checked={selectedCategories['Đầm/váy'] || false}
                className='border select=none rounded-sm shadow-[inset_0_1px_0_0_rgba(0,0,0,.05)] border-[rgba(0,0,0,.26)] appearance-none bg-white cursor-pointer size-[.8125rem]'
              />
              {selectedCategories['Đầm/váy'] && (
                <svg
                  enableBackground='new 0 0 12 12'
                  viewBox='0 0 12 12'
                  x={0}
                  y={0}
                  className='size-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-current text-[.5rem] text-[#ee4d2d]'
                >
                  <g>
                    <path d='m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z' />
                  </g>
                </svg>
              )}
            </div>
            <span className='text-sm line-clamp-3 break-words select-none capitalize'>Đầm/váy (1tr+)</span>
          </label>
        </div>
      </fieldset>
      <fieldset className='border-b border-[#00000017] mt-5 pb-5'>
        <legend className='text-sm text-[#000000cc]'>Khoảng giá</legend>
        <div className='flex justify-between items-center mt-5'>
          <input
            className='text-xs w-20 h-[1.875rem] pl-[.3125rem] outline-none shadow-[inset_0_1px_0_0_rgba(0,0,0,.05)] rounded-sm border border-[#00000042] bg-white'
            type='number'
            onWheel={(e) => e.currentTarget.blur()}
            placeholder='₫ TỪ'
            name=''
            id=''
          />
          <div className='bg-[#bdbdbd] h-[0.0625rem] mx-[0.625rem] flex-1'></div>
          <input
            className='text-xs w-20 h-[1.875rem] pl-[.3125rem] outline-none shadow-[inset_0_1px_0_0_rgba(0,0,0,.05)] rounded-sm border border-[#00000042] bg-white'
            type='number'
            placeholder='₫ ĐẾN'
            name=''
            id=''
          />
        </div>
        <Button className='mt-5 w-full text-sm bg-[#ee4d2d] text-white h-[1.875rem] rounded-sm uppercase font-normal shadow-sm flex items-center justify-center px-[0.375rem] py-[0.0625rem]'>
          Áp dụng
        </Button>
      </fieldset>
      <fieldset className='border-b border-[#00000017] mt-5 pb-5 text-sm text-[#000000cc]'>
        <legend className='mb-[0.625rem]'>Đánh giá</legend>
        <Link to='#' className='flex items-center gap-1 h-[1.5625rem] whitespace-nowrap px-3 w-full'>
          {/* Tạo mảng sao đánh giá */}
          {Array.from({ length: 5 }).map((_, index) => (
            <svg viewBox='0 0 9.5 8' className='text-[#ffce3d] stroke-current size-[0.875rem]' key={index}>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          ))}
        </Link>
        <Link to='#' className='flex items-center gap-1 h-[1.5625rem] whitespace-nowrap px-3 w-full mt-[0.3125rem]'>
          {/* Tạo mảng sao đánh giá */}
          {Array.from({ length: 5 }).map((_, index) => (
            <svg viewBox='0 0 9.5 8' className='text-[#ffce3d] stroke-current size-[0.875rem]' key={index}>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          ))}
          <span>trở lên</span>
        </Link>
        <Link to='#' className='flex items-center gap-1 h-[1.5625rem] whitespace-nowrap px-3 w-full mt-[0.3125rem]'>
          {/* Tạo mảng sao đánh giá */}
          {Array.from({ length: 5 }).map((_, index) => (
            <svg viewBox='0 0 9.5 8' className='text-[#ffce3d] stroke-current size-[0.875rem]' key={index}>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          ))}
          <span>trở lên</span>
        </Link>
        <Link to='#' className='flex items-center gap-1 h-[1.5625rem] whitespace-nowrap px-3 w-full mt-[0.3125rem]'>
          {/* Tạo mảng sao đánh giá */}
          {Array.from({ length: 5 }).map((_, index) => (
            <svg viewBox='0 0 9.5 8' className='text-[#ffce3d] stroke-current size-[0.875rem]' key={index}>
              <defs>
                <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                  <stop offset={0} stopColor='#ffca11' />
                  <stop offset={1} stopColor='#ffad27' />
                </linearGradient>
                <polygon
                  id='ratingStar'
                  points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                />
              </defs>
              <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-876 -1270)'>
                  <g transform='translate(155 992)'>
                    <g transform='translate(600 29)'>
                      <g transform='translate(10 239)'>
                        <g transform='translate(101 10)'>
                          <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          ))}
          <span>trở lên</span>
        </Link>
      </fieldset>
      <Button className='mt-5 w-full text-sm bg-[#ee4d2d] text-white h-[1.875rem] rounded-sm uppercase font-normal shadow-sm flex items-center justify-center px-[0.375rem] py-[0.0625rem]'>
        Xóa tất cả
      </Button>
    </div>
  )
}
