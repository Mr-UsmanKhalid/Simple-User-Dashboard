import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiData = () => {
  const [product, setProduct] = useState([]); 

 const ApiData = () => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setProduct(response.data.products); // Only one product

      })
      .then(data => console.log(data))
    }

    useEffect(() => {
        ApiData();
    },[])

  return (
    <div>
     <h1 className='text-4xl font-semibold text-gray-800 mb-4'>Dummy JSON Data</h1>
    {product.length > 0 ? (
      product.map((products) => (
        <div key={products.id} style={{ border: '1px solid gray', padding: '1rem', margin: '1rem' }}>
          <h2>{products.title}</h2>
          <p>Description: {products.description}</p>
          <p>Category: {products.category}</p>
          <p>Price: ${products.price}</p>
          <p>Discount: {products.discountPercentage}%</p>
          <p>Rating: {products.rating}</p>
        </div>
      ))
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
};

export default ApiData;
