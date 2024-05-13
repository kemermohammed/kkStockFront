
import React from 'react'
import imgLogo from '../../public/logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './navbar'

function Header() {
  return (
    
    <div className='bg-blue-400'>
    <div className='mt-12 mr-12 ml-12 flex justify-between '>
      <div flex-col><Link href='\'>
     <div><Image src={imgLogo} alt="Logo" width={100} height={100} />
     </div></Link>
     
    
     </div>
        

     <div className='mt-28 mb-12 text-4xl font-bond'>
     <h1>REAL TIME STOCK</h1>
     </div>

     <div className='flex gap-8 mt-12'>
        <Link href='#'>
     <button>Login</button></Link>
     <Link href='#'>
     <button>Signup</button></Link>
     </div>
    </div>
    </div>
    
  )
}


export default Header
