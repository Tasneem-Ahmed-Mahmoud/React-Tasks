import React from 'react'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

export default function Layout() {
  const data = "hello"
  return (
    <>
      <Navbar />
     

        <main className="min-h-screen bg-gray-200">
      
              <div className="container p-5">
                <div className="grid grid-cols-4 gap-3">
                  <div className="col-span-1">
                    <Sidebar />
                  </div>
      
                  <div className="col-span-2 space-y-5">
      
                     <Outlet />
      
                  </div>
      
      
                </div>
              </div>
      
            </main>
      <Footer />


    </>
  )
}
