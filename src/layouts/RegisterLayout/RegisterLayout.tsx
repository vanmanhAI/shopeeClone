import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer'
import RegisterHeader from '@/components/RegisterHeader'

export const RegisterLayout = () => {
  return (
    <div>
      <RegisterHeader />
      <Outlet />
      <Footer inRegisterLayout={true} />
    </div>
  )
}
