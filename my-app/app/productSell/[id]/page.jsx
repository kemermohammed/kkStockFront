'use client'


// import React from 'react'

// function Test({params}) {
//   return (
//     <div>
//       {params.id}
//     </div>
//   )
// }

// export default Test




import React, { useState, useEffect } from 'react';

function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://kkstockback-3.onrender.com/product/${params.id}`);
        if (res.ok) {
          const data = await res.json();
          setProduct(data.product);
        } else {
          console.error('Failed to fetch product');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };


      fetchProduct();
    
  }, []);

  const handleSell = async () => {
    try {
      const res = await fetch('https://kkstockback-3.onrender.com/sell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sellId: params.id,
          sellQuantity: quantity,
          sellPrice: price
        }),
      });

      if (res.ok) {
        console.log('Product sold successfully');
        alert('product sold successfully')
        setPrice('')
       
        setQuantity(0)
      } else {
        alert('unsuccessfully')
        console.error('Failed to buy product');
      }
    } catch (error) {
      alert('unsuccessfully')
      console.error('Error buying product:', error);
    }
  };

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {params.id}</p>
      {product && (
        <>
          <p>Product Name: {product.productName}</p>
          <img src={product.image} alt={product.name} />
          <p>Price: ${product.price}</p>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <input
            type="text"
            value={price}
            placeholder="Enter price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={handleSell}>Sell</button>
        </>
      )}
    </div>
  );
}

export default ProductPage;