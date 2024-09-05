import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const MainLayoutInner = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const MainLayout = memo(MainLayoutInner)

export default MainLayout
