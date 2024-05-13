
import Card from './component/card'
import Header from './component/header'
import Link from 'next/link'
import buy from  '../public/buy.jpg'
import sell from  '../public/sell.jpg'
import product from '../public/product.jpg'
import stock from  '../public/stock.jpg'
import Footer from './component/footer'
import Navbar from './component/navbar'

export default function Home() {
  return (
    <div>
    <div className='flex'>
      <Navbar/>
    <div className='container mx-auto py-4 w-3/4 h-3/4 bg-gray-200'>
    <div className='flex justify-center gap-12 '>
   {/* <Header/>   */}
   <div>
    <Link href="/buy">
<Card spec={buy}/></Link></div>

<Link href='/sell'>
 
<div>
<Card spec={sell}/></div></Link>
</div><div className='flex justify-center gap-12 mb-12'>
<div>
  <Link href='/product'>
<Card spec={product} /></Link></div>
<Link href='/stock'>
<div>
<Card spec={stock}/></div></Link>
</div>

</div>
</div>
<Footer/>

    
    </div>
  )}