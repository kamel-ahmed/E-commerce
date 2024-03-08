import React, { Fragment } from 'react'
import Slider from './Slider'
import ProductsList from './ProductsList'
import Footer from './Footer'

const Home = () => {
  return (
    <Fragment>
        <div className="container" style={{maxWidth:"2000px"}}>
           
            <Slider />
            <ProductsList />
            <Footer />
            
        </div>
        
      
    </Fragment>
  )
}

export default Home
