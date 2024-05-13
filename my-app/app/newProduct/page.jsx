




// 'use client'
// import React, { useState } from 'react';

// function ProductForm() {
//   const [productName, setProductName] = useState('');
//   const [productImage, setProductImage] = useState(null);
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('productName', productName);
//       if (productImage) {
//         formData.append('productImage', productImage);
//       }

//       const response = await fetch('http://localhost:3003/product', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json', // Specify JSON content type
//         },
//         body: JSON.stringify({
//           productName,
//           productImage: productImage ? JSON.stringify(productImage) : null,
//         }), // Send productName and productImage as JSON
//       });

//       const responseData = await response.json();

//       if (response.ok) {
//         setSubmitted(true);
//         setProductName('');
//         setProductImage(null);
//       } else {
//         console.error('Failed to submit data:', responseData.error);
//       }
//     } catch (error) {
//       console.error('Error submitting data:', error);
//     }
//   };

//   const handleNameChange = (event) => {
//     setProductName(event.target.value);
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setProductImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div>
//       <h2>Add a Product</h2>
//       {submitted ? (
//         <p>Product submitted successfully!</p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Product Name:
//             <input type="text" value={productName} onChange={handleNameChange} />
//           </label>
//           <label>
//             Product Image:
//             <input type="file" accept="image/*" onChange={handleImageChange} />
//           </label>
//           <button type="submit">Add Product</button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default ProductForm;
'use client'

import { useState } from "react";

function App() {
  const [productName, setProductName] = useState("");
  const [imageName, setImage] = useState(null);
  const [submit,setSubmit] = useState(false);

  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("imageName", imageName); 

    try {
      const response = await fetch("https://kkstockback-3.onrender.com/product", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Image uploaded successfully");
        alert("submitted")
        setImage(null)
        setProductName("")
        
      } else {
        console.error("Failed to upload image:", response.statusText);
        // Handle error
      }
    } catch (error) {
      console.error("Error uploading image:", error.message);
      // Handle error
    }
  };

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
    
  };

  return (
    <div>
      <form onSubmit={submitImage}>
        <input
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={onInputChange}></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default App;



