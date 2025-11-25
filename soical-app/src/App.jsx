import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout/Layout'
import NewsFeed from './pages/NewsFeed/NewsFeed'
import NotFound from './pages/NotFound/NotFound'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import { Navigate } from 'react-router-dom'
import AuthProtectedRoute from './components/ProtectedRoutes/AuthProtectedRoute'
import AppProtectedRoute from './components/protectedRoutes/AppProtectedRoute'
import PostDetails from './pages/PostDetails/PostDetails'

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <AppProtectedRoute><Layout /></AppProtectedRoute>,
      children: [
        { index: true, element: <Navigate to={"home"} /> },
        { path: "home", element: <AppProtectedRoute> <NewsFeed /> </AppProtectedRoute> },
        { path: 'profile', element: <AppProtectedRoute> <Profile /> </AppProtectedRoute> },
        { path: 'post/:id', element: <AppProtectedRoute> <PostDetails/> </AppProtectedRoute> },
        { path: '*', element: <NotFound /> },

      ]
    },
    {
      path: '',
      element: <AuthProtectedRoute> <AuthLayout/></AuthProtectedRoute>,
    children: [
      { path: 'login', element: <AuthProtectedRoute><Login /></AuthProtectedRoute> },
      { path: 'register', element: <AuthProtectedRoute><Login /></AuthProtectedRoute> },
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