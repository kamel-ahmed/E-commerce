import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const api_url = `https://fakestoreapi.com/products`
    const [product , setProduct] = useState({})

    const params= useParams()
    console.log(params)

    useEffect(()=>{
        const fetchProductDetails = async()=>{
            try{
                const response= await fetch(`${api_url}/${params.id}`)
                const productDetails = await response.json()
                setProduct(productDetails)

            }catch(err){

            }
        }
        fetchProductDetails()
    },[params.id])


  return (
    <div className="container">
        <div className="card mb-2" >
            <img src={product.image} className="card-img-top " alt={product.title} style={{ height:"500px" , maxWidth:"40%" , marginLeft:"25%"}}/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text mh-100">
                    {product.description} 
                </p>
                <h3><p className="card-text font-bold" >{product.price}</p></h3>
                <a href="/" className="btn btn-primary">go to home page</a>
                
            </div>
        </div>
    </div>
    

      
    
  )
}

export default ProductDetails
