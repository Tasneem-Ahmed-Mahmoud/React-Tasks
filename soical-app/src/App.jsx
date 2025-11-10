import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout/Layout'
import NewsFeed from './pages/NewsFeed/NewsFeed'
import NotFound from './pages/NotFound/NotFound'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <NewsFeed /> },
        { path: '*', element: <NotFound /> },
      ]
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

// Make sure this line exists:
export default App