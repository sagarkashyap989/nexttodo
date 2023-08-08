'use client'



import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { createContext } from "react"
import { Toaster, toast } from "react-hot-toast"

import { redirect } from 'next/navigation'

export const Context = createContext({ user: {} })
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() =>{
        fetch('/api/auth/me').then((res) => res.json()).then((data) => {
            if(data.success) setUser(data.user)
        })
    })


    return <Context.Provider value={{ user, setUser }}>
        {children}
        <Toaster />
    </Context.Provider>
}

export const LogoutBtn = () => {

    const { user, setUser } = useContext(Context)
    const handleLogout = async () => { 
        try {
            const res = await fetch('/api/auth/logout', { method: 'GET', })
            const data = await res.json(res)

            console.log(data)
            if(!data.success){
               return toast.error(data.message)
            }

            setUser({})
            redirect('/login')
            toast.success(data.message)

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <>
            {user?._id ? (<a onClick={handleLogout}>Logout</a>) :
                (<Link href={'/login'} >Login</Link>)}
        </>
    )
}







export const TodoBtn = ({ id, isCompleted }) => {


    const handleDelete = (id) => {
    }


    return (
        <div>

            <input type="checkbox" />

            <button className='btn' onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}



