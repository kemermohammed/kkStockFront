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
        const prod = await fetch('http://localhost:3003/product')
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
<div>
    {produc? (<>{produc.map(pro => (
  <div key={pro.productId}>{pro.productName} <img src={pro.imageName} />
  </div>
))}</>):(<>no product yet,please create a product</>)}
</div>

    </div>
  )
}

export default Page
