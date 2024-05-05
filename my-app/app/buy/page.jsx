'use client'
import React, { useState, useEffect } from 'react';
import Card from '../component/card';
import Link from 'next/link';

function Buy() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const productView = async () => {
      const prod = await fetch('http://localhost:3003/product');
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
          <Card spec='create new product' />
        </Link>
      </div>
      <div>
        {products ? (
          <>
            {products.map((pro) => (
              <div key={pro._id}>
                <Link href={`/product/${pro._id}`}>
                  <div>{pro._id}
                    {pro.productName} <img src={pro.imageName} />
                 </div>
                </Link>
              </div>
            ))}
          </>
        ) : (
          <>no product yet, please create a product</>
        )}
      </div>
    </div>
  );
}

export default Buy;



