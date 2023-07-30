import React from 'react'
import '../../styles/login.scss'
import Link from 'next/link'



export const metadata = {
    title: 'Register',
    description: 'this is register',
  }


export default function page() {
  return (
    <div className="login">

        <section>

            <form action="">
                <input type="text" name="" id="" placeholder='Enter your name' />
                <input type="email" name="" id="" placeholder='Enter your email' />
                <input type="password" name="" id="" placeholder='enter your password' />

 
                <button type='submit'> </button>
                <p>OR</p>
                already a user? <Link href={"/login"}>  Login</Link>
            </form>
        </section>
    </div>
  )
}
