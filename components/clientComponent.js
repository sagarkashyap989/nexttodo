'use client'



import Link from "next/link"
import { useContext, useState } from "react"
import { createContext } from "react" 

const Context = createContext({ user: {} })
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    return <Context.Provider value={{ user, setUser }}>
        {children}
    </Context.Provider>
}

export const LogoutBtn = () => {
    const handleLogout = () => {
        alert('logged out')
    }

    const { user } = useContext(Context)
    return (
        <>
            {user.id ? (<Link href={'/logout'}>Logout</Link>) :
                (<Link href={'/login'} onClick={handleLogout}>Login</Link>)} 
        </>
    )
}



 



export const TodoBtn = ({id, isCompleted}) => {


    const handleDelete = (id) =>{
        alert(id, 'yoo')
    }


  return (
    <div>

    <input type="checkbox"   />

        <button className='btn' onClick={() => handleDelete(id)}>Delete</button>
    </div>
  )
}