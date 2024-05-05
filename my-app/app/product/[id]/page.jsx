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
        const res = await fetch(`http://localhost:3003/product/${params.id}`);
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

  const handleBuy = async () => {
    try {
      const res = await fetch('http://localhost:3003/buy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          buyId: params.id,
          buyQuantity: quantity,
          buyPrice: price
        }),
      });

      if (res.ok) {
        console.log('Product bought successfully');
      } else {
        console.error('Failed to buy product');
      }
    } catch (error) {
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
          <button onClick={handleBuy}>Buy</button>
        </>
      )}
    </div>
  );
}

export default ProductPage;






















// // 'use client'
// // import { useState, useEffect } from 'react';

// // function ProductPage({ productId }) {
// //   const [product, setProduct] = useState(null);

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const res = await fetch(`http://localhost:3003/product/${productId}`);
// //         if (res.ok) {
// //           const data = await res.json();
// //           setProduct(data.product); // assuming the response object has a property 'product' containing the product details
// //         } else {
// //           console.error('Failed to fetch product');
// //         }
// //       } catch (error) {
// //         console.error('Error fetching product:', error);
// //       }
// //     };

// //     if (productId) {
// //       fetchProduct();
// //     }
// //   }, [productId]);

// //   return (
// //     <div>
// //       <h1>Product Details</h1>
// //       <p>Product ID: {productId}</p>
// //       {product && (
// //         <>
// //           <p>Product Name: {product.name}</p> {/* Assuming the product object has a 'name' property */}
// //           <img src={product.image} alt={product.name} /> {/* Assuming the product object has an 'image' property */}
// //           {/* Render other product details here */}
// //         </>
// //       )}
// //     </div>
// //   );
// // }

// // export default ProductPage;



  
