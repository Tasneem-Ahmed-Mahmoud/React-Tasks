import React, { createContext, useState, useEffect, useContext } from 'react'
import { getLoggedUser } from '../services/authService'
import { authContext } from './AuthContext'


export const userContext = createContext()

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { token } = useContext(authContext)

    async function getUser() {
        if (!token) {
            setUser(null)
            return
        }

        setIsLoading(true)
        try {
            const response = await getLoggedUser()
           // console.log(response)
            setUser(response?.data?.user) // Adjust based on your API response structure
        } catch (error) {
            console.log('Error fetching user:', error)
            setUser(null)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getUser()
    }, [token]) // Add getUser to dependency array or use callback

    // Optional: Add a refresh function
    const refreshUser = () => {
        getUser()
    }

    return (
        <userContext.Provider value={{ user, setUser ,isLoading}}>
            {children}
        </userContext.Provider>
    )
}