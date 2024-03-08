import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {

  return (
    <Fragment>
        
      <div className="card mb-2" style={{minHeight:"30rem" , marginBottom:"200px"}}>
          <img src={product.image} className="card-img-top " alt={product.title} style={{maxHeight:"200px"}}/>
          <div className="card-body position-relative" >
              <h5 className="card-title">{(product.title).length >= 10 ? `${(product.title).slice(0,40)}...` : product.title}</h5>
              <p className="card-text mh-100">
              {/*(post.body).length <= 25 ? post.body : `${(post.body).slice(0,100)}...`*/}
                  {(product.description).length >=200 ? `${(product.description).slice(0,100)}` : product.description }
              </p>
          </div>

          <h5><p className="card-text"  style={{paddingLeft:"10px"}}>Price: {product.price}</p></h5>
          <Link className="btn btn-primary" to={`/product/${product.id}`} >Details</Link>

          
      </div>

    </Fragment>
  )
}

export default Product
