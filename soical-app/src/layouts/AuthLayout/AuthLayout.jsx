import React from 'react'
import Navbar from '../../components/NavbarMain/NavbarMain'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <>
      <div className="grid grid-cols-3 h-screen">
        <div className="auth-background col-span-1">
          <img src="https://images.pexels.com/photos/31817684/pexels-photo-31817684.jpeg" alt="" className="w-full h-full" />
        </div>
        <div className="col-span-2 flex justify-center items-center">

          <Outlet />
        </div>
      </div>
    </>
  )
}