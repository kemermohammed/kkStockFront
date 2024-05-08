import React from 'react'
import imgLogo from '../../public/logo.jpg'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <div className='ml-12 mr-12 mt-12 flex justify-between'>
        <Link href='\'>
     <div><Image src={imgLogo} alt="Logo" width={100} height={100} />
     </div></Link>

     <div className='mt-14 text-4xl font-bond'>
     <h1>REAL TIME STOCK</h1>
     </div>

     <div className='flex gap-8'>
        <Link href='#'>
     <button>Login</button></Link>
     <Link href='#'>
     <button>Signup</button></Link>
     </div>
    </div>
  )
}


export default Header
