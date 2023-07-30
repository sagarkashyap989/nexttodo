import '../styles/header.scss'

import React from 'react'
import Link from 'next/link'
import { LogoutBtn } from '@/components/clientComponent'

const Header = () => {
  return (
    <div className="header">
        <div>
        <Link href={'/'}>
        
            <h2>Damn...</h2> 
        </Link>
        </div>
        <article>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <LogoutBtn/>
        </article>
    </div>
  )
}

export default Header