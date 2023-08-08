"use client"

import React, { useState, useContext } from 'react'
import '../../styles/login.scss'
import Link from 'next/link'
import { Context } from '@/components/clientComponent'
import { redirect } from 'next/navigation'
import { toast } from 'react-hot-toast'
 

export const metadata = {
  title: 'Login',
  description: 'this is Login',
}


export default function page() {
const {user, setUser} = useContext(Context)
  const [email, setEmail]  = useState("")
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log(email, password)
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          password: password, 
          email:email,
        }),
        headers : {
          "Content-Type": "application/json"
        }
      })

      const data = await res.json();

      if(!data.success){ 
       return toast.error(data.message)
      }
      toast.success(data.message)
      
      
      console.log(data.user, 'this is data')
      setUser(data.user)
    } catch (error) {
      toast.error(data.message)
      console.log(error)
    }
  }
  
  
  if(user?._id){
    return redirect('/')
  }

  return (
    <div className="login">

      <section>

        <form onSubmit={loginHandler}>
          <input type="email" name="" id="" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} value={email} />
          <input type="password" name="" id="" placeholder='enter your password' onChange={(e) => setPassword(e.target.value)} value={password} />


          <button type='submit'> Submit</button>
          <p>OR</p>
          <Link href={"/register"}> New User?</Link>
        </form>
      </section>
    </div>
  )
}
