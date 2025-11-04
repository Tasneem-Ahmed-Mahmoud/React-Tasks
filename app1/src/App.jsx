import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import './App.css'
import router from './routers/index'
import { RouterProvider } from 'react-router-dom'

function App() {
 

  return (
    <>
   <RouterProvider  router={router}/>
    </>
  )
}

export default App
