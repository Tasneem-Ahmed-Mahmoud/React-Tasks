

import React, { createContext, useState } from 'react'

export const authContext = createContext()

export default function AuthContextProvider({ children }) { // Capitalized component name
  const [token, setToken] = useState(localStorage.getItem("token")) // Fixed destructuring
  
  return (
    <authContext.Provider value={{ token, setToken }}>
      {children}  {/* Use the children prop, not Children object */}
    </authContext.Provider>
  )
}