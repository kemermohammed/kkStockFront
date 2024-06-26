
'use client'
import React from 'react'
import {useState, useEffect} from 'react'
import Image from 'next/image';

function Card({spec}) {

    const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='mt-12 ml-12'>

<div className="w-48 h-48  text-white text-xxl flex justify-center items-center relative hover:bg-blue-400 hover:-translate-y-2 transition-transform">
      <div ><Image src={spec} alt='buy'/> </div>
    </div>
        
    </div>
  )
}

export default Card
