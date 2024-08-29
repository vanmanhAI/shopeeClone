/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from 'src/components/ProtectedRoute'
import RejectedRoute from 'src/components/RejectedRoute'
import path from 'src/constants/path'
import MainLayout from 'src/layouts/MainLayout'
import RegisterLayout from 'src/layouts/RegisterLayout'
import Login from 'src/pages/Login'
import ProductDetail from 'src/pages/ProductDetail'
const ProductList = lazy(() => import('src/pages/ProductList/ProductList'))
import Profile from 'src/pages/Profile'
import Register from 'src/pages/Register'
import { QueryClient } from '@tanstack/react-query'
import Spinner from 'src/components/Spinner'

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
        path: ':nameId',
        element: (
          <Suspense>
            <ProductDetail />
          </Suspense>
        )
      }
    ]
  }
])
