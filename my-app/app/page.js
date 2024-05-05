
import Card from './component/card'
import Header from './component/header'
import Link from 'next/link'

export default function Home() {
  return (
    <div mt-12 ml-4>
   {/* <Header/>   */}
   <div>
    <Link href="/buy">
<Card spec="BUY"/></Link></div>
<div>
<Card spec="SELL"/></div>
<div>
  <Link href='/product'>
<Card spec="PRODUCT" /></Link></div>
<div>
<Card spec="STOCK"/></div>


    </div>
  )}