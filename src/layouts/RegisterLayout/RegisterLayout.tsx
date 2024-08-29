import { Outlet } from 'react-router-dom'
import Footer from 'src/components/Footer'
import RegisterHeader from 'src/components/RegisterHeader'

export const RegisterLayout = () => {
  return (
    <div>
      <RegisterHeader />
      <Outlet />
      <Footer inRegisterLayout={true} />
    </div>
  )
}
