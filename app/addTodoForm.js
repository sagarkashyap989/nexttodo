'use client'

import { Toaster, toast } from "react-hot-toast"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
// import '../styles/login.scss'
export default function AddTodoForm() {


  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const router = useRouter()

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(email,   password)
    try {
      const res = await fetch("/api/newtask", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const data = await res.json();

      if (!data.success) return toast.error(data.message)
      toast.success(data.message)
      router.refresh()
      setDescription('')
      setTitle('')
      // console.log(data.user, 'this is data')
    } catch (error) {

      toast.error(error.message)
    }
  }

  return (
    <div className="login">

      <section>

        <form onSubmit={submitHandler}>
          <input type="text" name="" id="" placeholder='Enter Task' onChange={(e) => setTitle(e.target.value)} value={title} />
          <input type="text" name="" id="" placeholder='Enter Task Description' onChange={(e) => setDescription(e.target.value)} value={description} />


          <button type='submit'> Add Task</button>
        </form>
      </section>
    </div>
  )
}
