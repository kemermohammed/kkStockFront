
import Card from './component/card'
import Header from './component/header'
import Link from 'next/link'
import buy from  '../public/buy.jpg'
import sell from  '../public/sell.jpg'
import product from '../public/product.jpg'
import stock from  '../public/stock.jpg'


export default function Home() {
  return (
    <div className='flex  '>
   {/* <Header/>   */}
   <div>
    <Link href="/buy">
<Card spec={buy}/></Link></div>

<Link href='/sell'>
<div>
<Card spec={sell}/></div></Link>
<div>
  <Link href='/product'>
<Card spec={product} /></Link></div>
<Link href='/stock'>
<div>
<Card spec={stock}/></div></Link>


    </div>
  )}