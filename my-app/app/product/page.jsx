'use client'
import React from 'react'
import Card from '../component/card'
import Link from 'next/link'
import { useState,useEffect} from 'react'
import product from '../../public/product.jpg'

function Page() {
  
    const [produc,setProduct] = useState(null)
    useEffect(()=>{
    const productView = async() =>{
        const prod = await fetch('https://kkstockback-3.onrender.com/product')
        const res = await prod.json()
        setProduct(res.product)
    }
    productView()
    return () =>{
}; },[]
    
    )
  return (
    <div>
        <div>
            <Link href='./newProduct'>
      <Card spec={product}/></Link></div>
      <div class="grid grid-cols-3 gap-12">
  {produc ? (
    <>
      {produc.map(pro => (
        <div key={pro.productId} class="mt-12 relative w-64 h-64 mx-4 transition-transform transform hover:translate-y-2 hover:translate-x-2 hover:shadow-md shadow-xl">
          <img src={pro.imageName} class="w-full h-full object-cover" alt={pro.productName} />
          <p class="absolute bottom-0 left-0 w-full bg-black text-white text-center py-2 bg-opacity-50">{pro.productName}</p>
        </div>
      ))}
    </>
  ) : (
    <p class="col-span-3 text-center">No product yet, please create a product</p>
  )}
</div>


    </div>
  )
}

export default Page
