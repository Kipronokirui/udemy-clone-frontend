import React, { createContext, useState } from 'react'
import { NEXT_BACKEND_URL } from '../config/app'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [authError, setAuthError] = useState(null)
    const [authReady, setAuthReady] = useState(false)

    const signup = async({email,password,name}) => {
        const res = await fetch(`${NEXT_BACKEND_URL}/signup`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                email,password,name
            })
        })
        const data = await res.json()

        if (res.ok) {
            await login({email,password})
        } else {
            if (data.name) {
                setAuthError(data.name[0])
            } else if (data.email){
                setAuthError(data.email[0])
            } else {
                setAuthError(data.password.join('\n'))
            }
        }
    }
    
    const login = async() => {
        const res = await fetch(`${NEXT_BACKEND_URL}/login`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                email,password
            })
        })
        const data = await res.json()

        if (res.ok) {
            await checkUserLoggedIn()
        } else {
            setAuthError(data.detail)
        }
    }
    const logout = async() => {
        const res = await fetch(`${NEXT_BACKEND_URL}/logout`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
        })
        if (res.ok) {
            setUser(null) //Remove the user
        }
        
    }
    const checkUserLoggedIn = async() => {
        const res = await fetch(`${NEXT_BACKEND_URL}/user`)
        if (res.ok) {
            const data = await res.json()
            setUser(data.user) //Set user to the fetched user
        } else {
            setUser(null)
        }
    }

    const clearUser =()=>{
        setUser(null)
    }

  return (
      <AuthContext.Provider value={{user, authError, login, logout, signup, clearUser}}>
          {authReady && children}
      </AuthContext.Provider>
  )
}

export default AuthContext