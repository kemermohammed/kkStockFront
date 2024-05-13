'use client'
import React, { useState, useEffect } from 'react';
import Card from '../component/card';
import Link from 'next/link';
import product from '../../public/product.jpg'

function Buy() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const productView = async () => {
      const prod = await fetch('https://kkstockback-3.onrender.com/product');
      const res = await prod.json();
      setProducts(res.product);
      console.log(products)
    };
    console.log(products)
    productView();
  }, []);

  return (
    <div>
      <div>
        <Link href='./newProduct'>
          <Card spec={product} />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-12">
  {products ? (
    <>
      {products.map((pro) => (
        <Link key={pro._id} href={`/productSell/${pro._id}`}>
          <div className="mt-12 relative w-64 h-64 mx-4 transition-transform transform hover:translate-y-2 hover:translate-x-2 hover:shadow-md shadow-xl">
            <img src={pro.imageName} className="w-full h-full object-cover" alt={pro.productName} />
            <p className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-2 bg-opacity-50">{pro.productName}</p>
          </div>
        </Link>
      ))}
    </>
  ) : (
    <p className="col-span-3 text-center">No product yet, please create a product</p>
  )}
</div>
    </div>
  );
}

export default Buy;



