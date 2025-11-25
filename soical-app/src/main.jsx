import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HeroUIProvider } from "@heroui/react";
import { ToastContainer } from 'react-toastify';
import AuthContextProvider from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
     <AuthContextProvider>
  <App />
        <ToastContainer />
     </AuthContextProvider>
      

    
    </HeroUIProvider>
  </StrictMode >,
)
