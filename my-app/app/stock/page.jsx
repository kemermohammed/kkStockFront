import React from 'react'

export default async function Stock() {

    const data = await fetch('http://localhost:3003/stock')
    const res = await data.json()
    const [stock,setStock] = useState(null)

  return (

    <div>
      
    </div>
  )
}



