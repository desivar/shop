   // src/pages/products.js
   import React, { useEffect, useState } from 'react';
   import axios from 'axios';
   import ProductCard from '@/components/ProductCard';

   const ProductsPage = () => {
     const [products, setProducts] = useState([]);

     useEffect(() => {
       const fetchProducts = async () => {
         try {
           const response = await axios.get('http://localhost:5500/api/products'); // Ensure this matches your backend route
           setProducts(response.data);
         } catch (error) {
           console.error('Error fetching products:', error);
         }
       };

       fetchProducts();
     }, []);

     return (
       <div>
         <h1>Products</h1>
         <div className="product-list">
           {products.map((product) => (
             <ProductCard key={product._id} product={product} />
           ))}
         </div>
       </div>
     );
   };

   export default ProductsPage;
   
