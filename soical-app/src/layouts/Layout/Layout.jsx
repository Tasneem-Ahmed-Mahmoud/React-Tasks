import React from 'react'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import NavbarMain from '../../components/NavbarMain/NavbarMain'

export default function Layout() {
  return (
    <>
      <NavbarMain/>
      <Outlet/>
      <Footer/>

    </>
  )
}
