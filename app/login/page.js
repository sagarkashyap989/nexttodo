import React from 'react'
import '../../styles/login.scss'
import Link from 'next/link'




export const metadata = {
    title: 'Login',
    description: 'this is Login',
  }


export default function page() {
  return (
    <div className="login">

        <section>

            <form action="">
                <input type="email" name="" id="" placeholder='Enter your email' />
                <input type="password" name="" id="" placeholder='enter your password' />

 
                <button type='submit'> Submit</button>
                <p>OR</p>
                <Link href={"/register"}> New User?</Link>
            </form>
        </section>
    </div>
  )
}
