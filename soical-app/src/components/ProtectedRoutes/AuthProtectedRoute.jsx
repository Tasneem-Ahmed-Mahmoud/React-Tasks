import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../../context/AuthContext'
export default function AuthProtectedRoute({children}) {
  
  
     const{ token }= useContext(authContext)
    const navigate = useNavigate()
    // console.log(localStorage.getItem('token'))


   
    useEffect(() => {
        if (token) {
            navigate('/home')
        }
    }, [token])

    return <>
    {children}
    </>
}
