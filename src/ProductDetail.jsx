import React,{ useEffect, useState } from 'react'

const ProductDetail = ({productId}) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchProduct = async()=>{
            try {
                setLoading(true);
                const response = await fetch(`https://dummyjson.com/products/${productId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setProduct(result);
            } catch (error) {
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }
        if (productId) {
            fetchProduct();
        }
    },[productId])
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!product) {
        return <div>No product found.</div>;
    }

  return (
    <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <img src={product.image} alt={product.title} />
    </div>
  )
}

export default ProductDetail