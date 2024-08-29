import { Link } from 'react-router-dom'
import Popover from '../Popover'
import { AppContext } from 'src/contexts/app.context'
import { useContext } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { logout } from 'src/apis/auth.api'
import path from 'src/constants/path'

export const Header = () => {
  const { isAuthenticated, setIsAuthenticated, profile, setProfile } = useContext(AppContext)
  const queryClient = useQueryClient()
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setProfile(null)
      setIsAuthenticated(false)
      queryClient.removeQueries({
        queryKey: ['products']
      })
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  return (
    <div className='bg-[#f53d2d] bg-[linear-gradient(-180deg,#f53d2d,#f63)]'>
      <div className='container'>
        <div className='flex justify-between text-[0.8125rem] text-white'>
          <div className='flex items-center'>
            <Link to='#' className='px-[0.4375rem] hover:text-gray-300 border-r-2 border-[#ffffff38] cursor-pointer'>
              Kênh Người Bán
            </Link>
            {!isAuthenticated && (
              <Link to='#' className='px-[0.4375rem] hover:text-gray-300 border-r-2 border-[#ffffff38] cursor-pointer'>
                Trở thành Người bán shopee
              </Link>
            )}
            <Popover
              offsetOptions={{ mainAxis: 12 }}
              arrowColor='transparent'
              applyAnimation={false}
              placement='bottom-start'
              renderPopover={
                <div className='flex z-1 flex-col w-[11.25rem] p-[0.125rem] overflow-hidden bg-white rounded-sm'>
                  <img src='/src/assets/images/app-qr.png' alt='app-qr' className='size-[11.25rem]' />
                  <div className='px-[0.9375rem] pb-[0.3125rem] grid grid-cols-2 gap-2 mt-[0.3125rem]'>
                    <img
                      src='/src/assets/images/app-store-icon.png'
                      alt='app-store'
                      className='col-span-1 flex-shrink-0'
                    />
                    <img
                      src='/src/assets/images/google-play-icon.png'
                      alt='google-play'
                      className='col-span-1 flex-shrink-0'
                    />
                    <img
                      src='/src/assets/images/app-gallery-icon.png'
                      alt='app-gallery'
                      className='col-span-1 flex-shrink-0'
                    />
                  </div>
                </div>
              }
            >
              <Link to='#' className='px-[0.4375rem] hover:text-gray-300 border-r-2 border-[#ffffff38] cursor-pointer'>
                Tải ứng dụng
              </Link>
            </Popover>
            <div className='px-[0.4375rem]'>Kết nối</div>
            <div className='flex items-center gap-[0.625rem]'>
              <Link
                to='#'
                className="size-4 flex-shrink-0 bg-[url('/src/assets/images/socials.png')] bg-[8.064516129032258%_16.129032258064516%] bg-[length:487.5%_293.75%]"
              ></Link>
              <Link
                to='#'
                className="size-4 flex-shrink-0 bg-[url('/src/assets/images/socials.png')] bg-[58.064516129032256%_16.129032258064516%] bg-[length:487.5%_293.75%]"
              ></Link>
            </div>
          </div>
          <div className='flex items-center justify-end h-[2.125rem]'>
            <Popover
              renderPopover={
                <div
                  className={`flex z-10 flex-col overflow-hidden bg-white rounded-sm shadow-[0_1px_3.125rem_0_rgba(0,0,0,.2)] text-sm w-[25rem] ${!isAuthenticated && 'h-[21.875rem] text-[#000000cc]'}`}
                >
                  {isAuthenticated && (
                    <>
                      <h3 className='flex items-center h-10 px-[0.625rem] capitalize text-[#00000042]'>
                        Thông báo mới nhận
                      </h3>
                      <div className='flex px-2 py-[0.625rem] bg-[#fff2ee] hover:bg-[#f8f8f8] cursor-pointer'>
                        <div className="size-10 overflow-hidden flex-shrink-0 mr-[0.625rem] bg-[url('https://down-vn.img.susercontent.com/file/dbaaaeb4882d243f5552dbdf940f570f_tn')] bg-[#fff2ee] bg-contain"></div>
                        <div className='flex flex-col rm-[0.625rem] overflow-hidden'>
                          <div className='text-[#000000cc] mb-[0.3125rem] truncate'>
                            Tham gia Beauty Club - Ưu đãi thả ga
                          </div>
                          <div className='line-clamp-5 text-xs text-[#0000008a] mb-[0.3125rem]'>
                            🌟 Giá độc quyền giảm đến 50% 🎁 Voucher đến 200.000Đ Thứ 3 hàng tuần 💌 Ưu đãi dành riêng
                            thành viên từ các thương hiệu làm đẹp ▶️ ĐĂNG KÝ THÀNH VIÊN MIỄN PHÍ NGAY!
                          </div>
                        </div>
                      </div>
                      <div className='flex px-2 py-[0.625rem] bg-[#fff2ee] hover:bg-[#f8f8f8] cursor-pointer'>
                        <div className="size-10 overflow-hidden flex-shrink-0 mr-[0.625rem] bg-[url('https://down-vn.img.susercontent.com/file/07b48cd255a12f6d06e80bf0fefba28c_tn')] bg-[#fff2ee] bg-contain"></div>
                        <div className='flex flex-col rm-[0.625rem] overflow-hidden'>
                          <div className='text-[#000000cc] mb-[0.3125rem] truncate'>
                            Cho Shopee biết thêm về bạn nhé
                          </div>
                          <div className='line-clamp-5 text-xs text-[#0000008a] mb-[0.3125rem]'>
                            📝 Hãy cập nhật đầy đủ thông tin để luôn nhận được các ưu đãi Shopee dành riêng cho bạn nhé!
                            💁‍♀️ Cập nhật ngay hôm nay!
                          </div>
                        </div>
                      </div>
                      <div className='flex px-2 py-[0.625rem] bg-[#fff2ee] hover:bg-[#f8f8f8] cursor-pointer'>
                        <div className="size-10 overflow-hidden flex-shrink-0 mr-[0.625rem] bg-[url('https://down-vn.img.susercontent.com/file/sg-11134004-7r99o-llu8aw69z4edc3_tn')] bg-[#fff2ee] bg-contain"></div>
                        <div className='flex flex-col rm-[0.625rem] overflow-hidden'>
                          <div className='text-[#000000cc] mb-[0.3125rem] truncate'>
                            T🎁 Tặng bạn 01 Mã khuyến mãi 0Đ! 💥
                          </div>
                          <div className='line-clamp-5 text-xs text-[#0000008a] mb-[0.3125rem]'>
                            ⏰ Mã hết hạn lúc 22-08-2024 👉 Shopee dành riêng mnhchu572 🛒 Dùng ngay thôi!
                          </div>
                        </div>
                      </div>
                      <div className='flex px-2 py-[0.625rem] bg-[#fff2ee] hover:bg-[#f8f8f8] cursor-pointer'>
                        <div className="size-10 overflow-hidden flex-shrink-0 mr-[0.625rem] bg-[url('https://down-vn.img.susercontent.com/file/sg-11134004-7rdxr-lyw00pv7eakn03_tn')] bg-[#fff2ee] bg-contain"></div>
                        <div className='flex flex-col rm-[0.625rem] overflow-hidden'>
                          <div className='text-[#000000cc] mb-[0.3125rem] truncate'>
                            KHUNG GIỜ SALE CUỐI RỒI Mạnh ƠI
                          </div>
                          <div className='line-clamp-5 text-xs text-[#0000008a] mb-[0.3125rem]'>
                            🌟P&G, Lixibox, LG,...giảm đến 50% 🔥Mã giảm 100K, 40K sắp hết 🎊Shopee Live tung deal nửa
                            giá 🚀Mua ngay thôi!
                          </div>
                        </div>
                      </div>
                      <Link
                        to='#'
                        className='flex items-center justify-center h-10 text-[#000000cc] bg-white text-center'
                      >
                        Xem tất cả
                      </Link>
                    </>
                  )}
                  {!isAuthenticated && (
                    <>
                      <div className='flex-grow flex flex-col justify-center items-center'>
                        <img className='size-[6.25rem]' src='/src/assets/images/notification-without-auth.png' alt='' />
                        <p className='text-center mt-5'>Đăng nhập để xem Thông báo</p>
                      </div>
                      <div className='flex flex-[0_0_2.5rem]'>
                        <Link
                          to={path.register}
                          className='flex items-center justify-center flex-grow flex-shrink-0 hover:bg-[#e8e8e8] hover:text-[#ee4d2d]'
                        >
                          Đăng ký
                        </Link>
                        <Link
                          to={path.login}
                          className='flex items-center justify-center flex-grow flex-shrink-0 hover:bg-[#e8e8e8] hover:text-[#ee4d2d]'
                        >
                          Đăng nhập
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              }
            >
              <Link to='#' className='flex items-center mr-[0.1875rem] py-1 cursor-pointer hover:text-gray-300'>
                <svg viewBox='3 2.5 14 14' x={0} y={0} className='w-[0.875rem] h-[1.125rem] fill-current'>
                  <path d='m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z' />
                  <path d='m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z' />
                </svg>
                <span className='mx-1'>Thông báo</span>
              </Link>
            </Popover>
            <Link to='#' className='flex items-center py-1 pr-[0.625rem] cursor-pointer hover:text-gray-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-[1.125rem]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
                />
              </svg>

              <span className='mx-1'>Hỗ trợ</span>
            </Link>
            <Popover
              renderPopover={
                <div className='bg-white rounded-sm shadow-[0_.0625rem_3.125rem_0_rgba(0,0,0,.2)] flex flex-col overflow-hidden min-w-[12.5rem] text-sm cursor-pointer'>
                  <button className='text-left p-[0.625rem] hover:text-[#ee4d2d]'>
                    <span>Tiếng việt</span>
                  </button>
                  <button className='text-left p-[0.625rem] hover:text-[#ee4d2d]'>
                    <span>English</span>
                  </button>
                </div>
              }
              className='flex items-center py-[0.4375rem] px-[0.625rem] cursor-pointer hover:text-gray-300'
              offsetOptions={{ crossAxis: 0 }}
            >
              <svg
                width='16'
                height='16'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418'
                />
              </svg>
              <span className='mx-1'>Tiếng việt</span>
              <svg
                width='12'
                height='12'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
              </svg>
            </Popover>
            {isAuthenticated && (
              <Popover
                className='flex items-center px-[0.625rem] py-[0.4375rem] cursor-pointer hover:text-gray-300'
                offsetOptions={{ crossAxis: 0 }}
                renderPopover={
                  <div className='flex flex-col z-1 min-w-[9.375rem] overflow-hidden bg-white rounded-sm border-sm shadow-[0_.0625rem_3.125rem_0_rgba(0,0,0,.2)]'>
                    <Link
                      to='#'
                      className='text-sm text-[#000000de] text-left font-[500] capitalize p-[0.625rem] hover:bg-[#fafafa] hover:text-[#00bfa5]'
                    >
                      Tài khoản của tôi
                    </Link>
                    <Link
                      to='#'
                      className='text-sm text-[#000000de] text-left font-[500] capitalize p-[0.625rem] hover:bg-[#fafafa] hover:text-[#00bfa5]'
                    >
                      Đơn mua
                    </Link>
                    <button
                      onClick={handleLogout}
                      className='text-sm text-[#000000de] text-left font-[500] capitalize p-[0.625rem] hover:bg-[#fafafa] hover:text-[#00bfa5]'
                    >
                      Đăng xuất
                    </button>
                  </div>
                }
              >
                <div className='w-5 h-5 mr-1 flex-shrink-0'>
                  <div className='w-full h-full bg-[#f5f5f5] rounded-full flex justify-center items-center'>
                    {/* <svg
                  enableBackground='new 0 0 15 15'
                  viewBox='0 0 15 15'
                  x={0}
                  y={0}
                  className='stroke-[#c6c6c6] w-[1em] h-[1em]'
                >
                  <g>
                    <circle cx='7.5' cy='4.5' fill='none' r='3.8' strokeMiterlimit={10} />
                    <path
                      d='m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6'
                      fill='none'
                      strokeLinecap='round'
                      strokeMiterlimit={10}
                    />
                  </g>
                </svg> */}
                    <img
                      src='https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'
                      alt='username'
                      className='block w-full h-full object-cover rounded-full'
                    />
                  </div>
                </div>
                <span>{profile?.email.split('@')[0] || 'Tài khoản'}</span>
              </Popover>
            )}
            {!isAuthenticated && (
              <div className='flex items-center'>
                <Link
                  to={path.register}
                  className='capitalize px-[0.625rem] cursor-pointer hover:text-gray-300 border-r-2 border-[#ffffff38]'
                >
                  Đăng ký
                </Link>

                <Link to={path.login} className='capitalize px-[0.625rem] cursor-pointer hover:text-gray-300'>
                  Đăng nhập
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className='grid grid-cols-12 mt-[1.2rem] items-center'>
          <Link to='/' className='col-span-2 self-start'>
            <svg viewBox='0 0 192 65' className='h-8 lg:h-[3.125rem] lg:w-40 fill-white'>
              <g fillRule='evenodd'>
                <path d='M35.6717403 44.953764c-.3333497 2.7510509-2.0003116 4.9543414-4.5823845 6.0575984-1.4379707.6145919-3.36871.9463856-4.896954.8421628-2.3840266-.0911143-4.6237865-.6708937-6.6883352-1.7307424-.7375522-.3788551-1.8370513-1.1352759-2.6813095-1.8437757-.213839-.1790053-.239235-.2937577-.0977428-.4944671.0764015-.1151823.2172535-.3229831.5286218-.7791994.45158-.6616533.5079208-.7446018.5587128-.8221779.14448-.2217688.3792333-.2411091.6107855-.0588804.0243289.0189105.0243289.0189105.0426824.0333083.0379873.0294402.0379873.0294402.1276204.0990653.0907002.0706996.14448.1123887.166248.1287205 2.2265285 1.7438508 4.8196989 2.7495466 7.4376251 2.8501162 3.6423042-.0496401 6.2615109-1.6873341 6.7308041-4.2020035.5160305-2.7675977-1.6565047-5.1582742-5.9070334-6.4908212-1.329344-.4166762-4.6895175-1.7616869-5.3090528-2.1250697-2.9094471-1.7071043-4.2697358-3.9430584-4.0763845-6.7048539.296216-3.8283059 3.8501677-6.6835796 8.340785-6.702705 2.0082079-.004083 4.0121475.4132378 5.937338 1.2244562.6816382.2873109 1.8987274.9496089 2.3189359 1.2633517.2420093.1777159.2898136.384872.1510957.60836-.0774686.12958-.2055158.3350171-.4754821.7632974l-.0029878.0047276c-.3553311.5640922-.3664286.5817134-.447952.7136572-.140852.2144625-.3064598.2344475-.5604202.0732783-2.0600669-1.3839063-4.3437898-2.0801572-6.8554368-2.130442-3.126914.061889-5.4706057 1.9228561-5.6246892 4.4579402-.0409751 2.2896772 1.676352 3.9613243 5.3858811 5.2358503 7.529819 2.4196871 10.4113092 5.25648 9.869029 9.7292478M26.3725216 5.42669372c4.9022893 0 8.8982174 4.65220288 9.0851664 10.47578358H17.2875686c.186949-5.8235807 4.1828771-10.47578358 9.084953-10.47578358m25.370857 11.57065968c0-.6047069-.4870064-1.0948761-1.0875481-1.0948761h-11.77736c-.28896-7.68927544-5.7774923-13.82058185-12.5059489-13.82058185-6.7282432 0-12.2167755 6.13130641-12.5057355 13.82058185l-11.79421958.0002149c-.59136492.0107446-1.06748731.4968309-1.06748731 1.0946612 0 .0285807.00106706.0569465.00320118.0848825H.99995732l1.6812605 37.0613963c.00021341.1031483.00405483.2071562.01173767.3118087.00170729.0236381.003628.0470614.00554871.0704847l.00362801.0782207.00405483.004083c.25545428 2.5789222 2.12707837 4.6560709 4.67201764 4.7519129l.00576212.0055872h37.4122078c.0177132.0002149.0354264.0004298.0531396.0004298.0177132 0 .0354264-.0002149.0531396-.0004298h.0796027l.0017073-.0015043c2.589329-.0706995 4.6867431-2.1768587 4.9082648-4.787585l.0012805-.0012893.0017073-.0350275c.0021341-.0275062.0040548-.0547975.0057621-.0823037.0040548-.065757.0068292-.1312992.0078963-.1964115l1.8344904-37.207738h-.0012805c.001067-.0186956.0014939-.0376062.0014939-.0565167M176.465457 41.1518926c.720839-2.3512494 2.900423-3.9186779 5.443734-3.9186779 2.427686 0 4.739107 1.6486899 5.537598 3.9141989l.054826.1556978h-11.082664l.046506-.1512188zm13.50267 3.4063683c.014933.0006399.014933.0006399.036906.0008531.021973-.0002132.021973-.0002132.044372-.0008531.53055-.0243144.950595-.4766911.950595-1.0271786 0-.0266606-.000853-.0496953-.00256-.0865936.000427-.0068251.000427-.020262.000427-.0635588 0-5.1926268-4.070748-9.4007319-9.09145-9.4007319-5.020488 0-9.091235 4.2081051-9.091235 9.4007319 0 .3871116.022399.7731567.067838 1.1568557l.00256.0204753.01408.1013102c.250022 1.8683731 1.047233 3.5831812 2.306302 4.9708108-.00064-.0006399.00064.0006399.007253.0078915 1.396026 1.536289 3.291455 2.5833031 5.393601 2.9748936l.02752.0053321v-.0027727l.13653.0228215c.070186.0119439.144211.0236746.243409.039031 2.766879.332724 5.221231-.0661182 7.299484-1.1127057.511777-.2578611.971928-.5423827 1.37064-.8429007.128211-.0968312.243622-.1904632.34346-.2781231.051412-.0452164.092372-.083181.114131-.1051493.468898-.4830897.498124-.6543572.215249-1.0954297-.31146-.4956734-.586228-.9179769-.821744-1.2675504-.082345-.1224254-.154023-.2267215-.214396-.3133151-.033279-.0475624-.033279-.0475624-.054399-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.00256-.0038391c-.256208-.3188605-.431565-.3480805-.715933-.0970445-.030292.0268739-.131624.1051493-.14997.1245582-1.999321 1.775381-4.729508 2.3465571-7.455854 1.7760208-.507724-.1362888-.982595-.3094759-1.419919-.5184948-1.708127-.8565509-2.918343-2.3826022-3.267563-4.1490253l-.02752-.1394881h13.754612zM154.831964 41.1518926c.720831-2.3512494 2.900389-3.9186779 5.44367-3.9186779 2.427657 0 4.739052 1.6486899 5.537747 3.9141989l.054612.1556978h-11.082534l.046505-.1512188zm13.502512 3.4063683c.015146.0006399.015146.0006399.037118.0008531.02176-.0002132.02176-.0002132.044159-.0008531.530543-.0243144.950584-.4766911.950584-1.0271786 0-.0266606-.000854-.0496953-.00256-.0865936.000426-.0068251.000426-.020262.000426-.0635588 0-5.1926268-4.070699-9.4007319-9.091342-9.4007319-5.020217 0-9.091343 4.2081051-9.091343 9.4007319 0 .3871116.022826.7731567.068051 1.1568557l.00256.0204753.01408.1013102c.250019 1.8683731 1.04722 3.5831812 2.306274 4.9708108-.00064-.0006399.00064.0006399.007254.0078915 1.396009 1.536289 3.291417 2.5833031 5.393538 2.9748936l.027519.0053321v-.0027727l.136529.0228215c.070184.0119439.144209.0236746.243619.039031 2.766847.332724 5.22117-.0661182 7.299185-1.1127057.511771-.2578611.971917-.5423827 1.370624-.8429007.128209-.0968312.243619-.1904632.343456-.2781231.051412-.0452164.09237-.083181.11413-.1051493.468892-.4830897.498118-.6543572.215246-1.0954297-.311457-.4956734-.586221-.9179769-.821734-1.2675504-.082344-.1224254-.154022-.2267215-.21418-.3133151-.033492-.0475624-.033492-.0475624-.054612-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.002346-.0038391c-.256419-.3188605-.431774-.3480805-.716138-.0970445-.030292.0268739-.131623.1051493-.149969.1245582-1.999084 1.775381-4.729452 2.3465571-7.455767 1.7760208-.507717-.1362888-.982582-.3094759-1.419902-.5184948-1.708107-.8565509-2.918095-2.3826022-3.267311-4.1490253l-.027733-.1394881h13.754451zM138.32144123 49.7357905c-3.38129629 0-6.14681004-2.6808521-6.23169343-6.04042014v-.31621743c.08401943-3.35418649 2.85039714-6.03546919 6.23169343-6.03546919 3.44242097 0 6.23320537 2.7740599 6.23320537 6.1960534 0 3.42199346-2.7907844 6.19605336-6.23320537 6.19605336m.00172791-15.67913203c-2.21776751 0-4.33682838.7553485-6.03989586 2.140764l-.19352548.1573553V34.6208558c0-.4623792-.0993546-.56419733-.56740117-.56419733h-2.17651376c-.47409424 0-.56761716.09428403-.56761716.56419733v27.6400724c0 .4539841.10583425.5641973.56761716.5641973h2.17651376c.46351081 0 .56740117-.1078454.56740117-.5641973V50.734168l.19352548.1573553c1.70328347 1.3856307 3.82234434 2.1409792 6.03989586 2.1409792 5.27140956 0 9.54473746-4.2479474 9.54473746-9.48802964 0-5.239867-4.2733279-9.48781439-9.54473746-9.48781439M115.907646 49.5240292c-3.449458 0-6.245805-2.7496948-6.245805-6.1425854 0-3.3928907 2.79656-6.1427988 6.245805-6.1427988 3.448821 0 6.24538 2.7499081 6.24538 6.1427988 0 3.3926772-2.796346 6.1425854-6.24538 6.1425854m.001914-15.5438312c-5.28187 0-9.563025 4.2112903-9.563025 9.4059406 0 5.1944369 4.281155 9.4059406 9.563025 9.4059406 5.281657 0 9.562387-4.2115037 9.562387-9.4059406 0-5.1946503-4.280517-9.4059406-9.562387-9.4059406M94.5919049 34.1890939c-1.9281307 0-3.7938902.6198995-5.3417715 1.7656047l-.188189.1393105V23.2574169c0-.4254677-.1395825-.5643476-.5649971-.5643476h-2.2782698c-.4600414 0-.5652122.1100273-.5652122.5643476v29.2834155c0 .443339.1135587.5647782.5652122.5647782h2.2782698c.4226187 0 .5649971-.1457701.5649971-.5647782v-9.5648406c.023658-3.011002 2.4931278-5.4412923 5.5299605-5.4412923 3.0445753 0 5.516841 2.4421328 5.5297454 5.4630394v9.5430935c0 .4844647.0806524.5645628.5652122.5645628h2.2726775c.481764 0 .565212-.0824666.565212-.5645628v-9.5710848c-.018066-4.8280677-4.0440197-8.7806537-8.9328471-8.7806537M62.8459442 47.7938061l-.0053397.0081519c-.3248668.4921188-.4609221.6991347-.5369593.8179812-.2560916.3812097-.224267.551113.1668119.8816949.91266.7358184 2.0858968 1.508535 2.8774525 1.8955369 2.2023021 1.076912 4.5810275 1.646045 7.1017886 1.6975309 1.6283921.0821628 3.6734936-.3050536 5.1963734-.9842376 2.7569891-1.2298679 4.5131066-3.6269626 4.8208863-6.5794607.4985136-4.7841067-2.6143125-7.7747902-10.6321784-10.1849709l-.0021359-.0006435c-3.7356476-1.2047686-5.4904836-2.8064071-5.4911243-5.0426086.1099976-2.4715346 2.4015793-4.3179454 5.4932602-4.4331449 2.4904317.0062212 4.6923065.6675996 6.8557356 2.0598624.4562232.2767364.666607.2256796.9733188-.172263.035242-.0587797.1332787-.2012238.543367-.790093l.0012815-.0019308c.3829626-.5500403.5089793-.7336731.5403767-.7879478.258441-.4863266.2214903-.6738208-.244985-1.0046173-.459427-.3290803-1.7535544-1.0024722-2.4936356-1.2978721-2.0583439-.8211991-4.1863175-1.2199998-6.3042524-1.1788111-4.8198184.1046878-8.578747 3.2393171-8.8265087 7.3515337-.1572005 2.9703036 1.350301 5.3588174 4.5000778 7.124567.8829712.4661613 4.1115618 1.6865902 5.6184225 2.1278667 4.2847814 1.2547527 6.5186944 3.5630343 6.0571315 6.2864205-.4192725 2.4743234-3.0117991 4.1199394-6.6498372 4.2325647-2.6382344-.0549182-5.2963324-1.0217793-7.6043603-2.7562084-.0115337-.0083664-.0700567-.0519149-.1779185-.1323615-.1516472-.1130543-.1516472-.1130543-.1742875-.1300017-.4705335-.3247898-.7473431-.2977598-1.0346184.1302162-.0346012.0529875-.3919333.5963776-.5681431.8632459' />
              </g>
            </svg>
          </Link>
          <div className='col-span-9 max-w-[52.5rem] flex-col justify-start'>
            <form>
              <div className='bg-white h-10 rounded-sm p-[0.1875rem] flex'>
                <input
                  type='text'
                  name='search'
                  placeholder='FREESHIP ĐƠN TỪ 0Đ'
                  className='text-[#000000cc] px-3 py-2 text-sm flex-grow border-none outline-none bg-transparent'
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
              </div>
            </form>
            <div className='flex items-center gap-[0.8125rem] w-fullk text-xs text-[#ffffffe6]'>
              <Link to='#' className='py-[0.3125rem]'>
                Áo Polo Nam
              </Link>
              <Link to='#' className='py-[0.3125rem]'>
                Balo Da Nam
              </Link>
              <Link to='#' className='py-[0.3125rem]'>
                Gối Ngủ Chống Đau Vai Gáy
              </Link>
              <Link to='#' className='py-[0.3125rem]'>
                Áo Sơ Mi Nam
              </Link>
              <Link to='#' className='py-[0.3125rem]'>
                Áo Thun Nam
              </Link>
              <Link to='#' className='py-[0.3125rem]'>
                Quần Áo TAOBAO Nam
              </Link>
              <Link to='#' className='py-[0.3125rem]'>
                Áo Polo Unicorn
              </Link>
            </div>
          </div>
          <Popover
            className='col-span-1 self-start'
            offsetOptions={{ crossAxis: -20 }}
            renderPopover={
              <div className='bg-white z-1 overflow-hidden shadow-[0_1px_3.125rem_0_rgba(0,0,0,.2)] w-[25rem] rounded-sm flex flex-col text-sm'>
                <h3 className='pl-[10px] h-10 flex items-center text-[#00000042] capitalize font-[400]'>
                  Sản phẩm mới thêm
                </h3>
                <div className='overflow-hidden p-[0.625rem] flex hover:bg-[#f8f8f8]'>
                  <img
                    src='https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfc1p0qomh6dfa_tn'
                    alt='product_image'
                    className='size-10 flex-shrink-0 mr-[10px] border border-[#00000017]'
                  />
                  <div className='truncate flex-grow mr-10 text-[#000000cc]'>
                    Sổ Lò Xo Caro B5 Bìa Nhự Trắng Mờ 160 trang TUANVIET BOOKS
                  </div>
                  <div className='text-[#ee4d2d]'>₫29.800</div>
                </div>
                <div className='overflow-hidden p-[0.625rem] flex hover:bg-[#f8f8f8]'>
                  <img
                    src='https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfc1p0qomh6dfa_tn'
                    alt='product_image'
                    className='size-10 flex-shrink-0 mr-[10px] border border-[#00000017]'
                  />
                  <div className='truncate flex-grow mr-10 text-[#000000cc]'>
                    Sổ Lò Xo Caro B5 Bìa Nhự Trắng Mờ 160 trang TUANVIET BOOKS
                  </div>
                  <div className='text-[#ee4d2d]'>₫29.800</div>
                </div>
                <div className='overflow-hidden p-[0.625rem] flex hover:bg-[#f8f8f8]'>
                  <img
                    src='https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfc1p0qomh6dfa_tn'
                    alt='product_image'
                    className='size-10 flex-shrink-0 mr-[10px] border border-[#00000017]'
                  />
                  <div className='truncate flex-grow mr-10 text-[#000000cc]'>
                    Sổ Lò Xo Caro B5 Bìa Nhự Trắng Mờ 160 trang TUANVIET BOOKS
                  </div>
                  <div className='text-[#ee4d2d]'>₫29.800</div>
                </div>
                <div className='h-[3.75rem] p-[0.625rem] flex justify-between capitalize'>
                  <div className='flex items-center gap-1 text-xs text-[#000000cc]'>
                    <span>34</span>
                    <span>Thêm hàng vào giỏ</span>
                  </div>
                  <Link
                    to='#'
                    className='flex-shrink-0 flex items-center bg-[#ee4d2d] px-[0.9375rem] rounded-sm text-center min-w-[3.75rem] h-[2.125rem] text-white hover:bg-[#f05d40]'
                  >
                    Xem giỏ hàng
                  </Link>
                </div>
              </div>
            }
          >
            <Link to='/' className='flex justify-center items-center py-[0.625rem]'>
              <svg viewBox='0 0 26.6 25.6' className='fill-white size-[1.625rem] stroke-white text-white' stroke='1.5'>
                <title>Shopping Cart Icon</title>
                <polyline
                  fill='none'
                  points='2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeMiterlimit={10}
                  strokeWidth='2.5'
                />
                <circle cx='10.7' cy={23} r='2.2' stroke='none' />
                <circle cx='19.7' cy={23} r='2.2' stroke='none' />
              </svg>
            </Link>
          </Popover>
        </div>
      </div>
    </div>
  )
}
