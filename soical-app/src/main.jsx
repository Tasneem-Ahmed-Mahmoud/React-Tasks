import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HeroUIProvider, User } from "@heroui/react";
import { ToastContainer } from 'react-toastify';
import AuthContextProvider from './context/AuthContext.jsx';
import UserContextProvider from './context/userContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
      <AuthContextProvider>
        <UserContextProvider>
        <App />
        </UserContextProvider>
        <ToastContainer />
      </AuthContextProvider>



    </HeroUIProvider>
  </StrictMode >,
)
