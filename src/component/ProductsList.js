import React, { Fragment, useEffect, useState } from 'react'
import Product from './Product'


const ProductsList = () => {

    const api_url = "https://fakestoreapi.com/products"

    const [categories , setCategories] = useState([])
    const [products , setProducts] = useState([])


    // start get products
    const fetchProducts = async ()=>{
        try{
            const response = await fetch(api_url)
            const productList = await response.json()
            setProducts(productList)
        }catch (err){
            console.log("error")
        }
    }
    //end get products

            

    //start get all categories
    const fetchAllCategories = async()=>{
        try {
            const response = await fetch(`${api_url}/categories`)
            const allCategories = await response.json()
            setCategories(allCategories)
        }catch(err){
            console.log("error")
        }
    }
    //end get all categories

    // start spacific product
    const fetchspacific = async (category)=>{
        try{
            const response = await fetch(`${api_url}/category/${category}`)
            const allJewelery = await response.json()
            setProducts(allJewelery)


        }catch(err){
            console.log("error")
        }
    }
    // end spacific product

    useEffect(()=>{

        fetchAllCategories()
        fetchProducts()
        
    },[])

  return (
    <Fragment>
        
            <h1 className="text-center p-3">Our Products</h1>
            <div className="container">
                <div className="row">

                    <div className="btn-group col mb-4 ">
                    <button 
                        className="btn btn-primary w-100"
                        onClick={()=>fetchProducts()}
                    >
                        All Products
                    </button>
                    
                    
                </div>
                
                {
                    
                    categories.map((category) =>
                    
                    <div className="btn-group col mb-4 " key={category}>
                    <button 
                        className="btn btn-primary w-100"
                        onClick={()=>fetchspacific(category)}
                        
                    >{category}</button>
                    
                    
                  </div>
                  

                )}
                    
                </div>
                

            


            <div className="row">
                {products.map((product)=>(
                    <div className="col- col-sm-6 col-lg-3" style={{minHeight:"500" ,maxHeight:"700px" ,display:"flex", alignItems:"stretch" }} key={product.id}>
                        <Product product={product}/>
                
                    </div>
                ))}
                
                
            </div>

        </div>

    </Fragment>
  )
}

export default ProductsList
