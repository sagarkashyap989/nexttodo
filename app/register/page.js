"use client"

import React, { useState, useContext } from 'react'
import '../../styles/login.scss'
import Link from 'next/link'
import { Context } from '@/components/clientComponent'
import { toast } from 'react-hot-toast'



export const metadata = {
  title: 'Register',
  description: 'this is register',
}


export default function page() {

  const { user, setUser } = useContext(Context)

  const [formData, setFormData] = useState({
    email: '', password: '', name: ''
  })

  const handleChange = (e) => {

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))

  }



  const registerHandler = async (e) => {
    e.preventDefault();
    // console.log(email,   password)
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const data = await res.json();

      if (!data.success) return toast.error(data.message)
      setUser(data.user)
      toast.success(data.message)

      console.log(data.user, 'this is data')
    } catch (error) {
      toast.error(data.message)
    }
  }

  // console.log(user,)


  return (
    <div className="login">

      <section>

        <form onSubmit={registerHandler}>
          <input type="text" name='name' id="" value={formData.name} placeholder='Enter your name' onChange={handleChange} />
          <input type="email" name='email' id="" value={formData.email} placeholder='Enter your email' onChange={handleChange} />
          <input type="password" name='password' value={formData.password} id="" placeholder='enter your password' onChange={handleChange} />


          <button type='submit'> </button>
          <p>OR</p>
          already a user? <Link href={"/login"}>  Login</Link>
        </form>
      </section>
    </div>
  )
}
