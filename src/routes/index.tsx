/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from '@/components/ProtectedRoute'
import RejectedRoute from '@/components/RejectedRoute'
import path from '@/constants/path'
import MainLayout from '@/layouts/MainLayout'
import RegisterLayout from '@/layouts/RegisterLayout'
import Login from '@/pages/Login'
import ProductDetail from '@/pages/ProductDetail'
const ProductList = lazy(() => import('@/pages/ProductList/ProductList'))
import Profile from '@/pages/ProductList/Profile'
import Register from '@/pages/ProductList/Register'
import { QueryClient } from '@tanstack/react-query'
import Spinner from '@/components/Spinner'

const queryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 10
    }
  }
}

export const queryClient = new QueryClient(queryClientConfig)

export const router = createBrowserRouter([
  {
    path: '',
    element: <RejectedRoute />,
    children: [
      {
        path: '',
        element: <RegisterLayout />,
        children: [
          {
            path: path.login,
            element: (
              <Suspense>
                <Login />
              </Suspense>
            )
          },
          {
            path: 'register',
            element: (
              <Suspense>
                <Register />
              </Suspense>
            )
          }
        ]
      }
    ]
  },
  {
    path: '',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/user',
        element: <MainLayout />,
        children: [
          {
            path: path.profile,
            element: (
              <Suspense>
                <Profile />
              </Suspense>
            )
          }
        ]
      }
    ]
  },
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Spinner />}>
            <ProductList />
          </Suspense>
        )
      },
      {
        path: path.productDetail,
        element: (
          <Suspense>
            <ProductDetail />
          </Suspense>
        )
      }
    ]
  }
])
