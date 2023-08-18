import React, { useState, useEffect } from 'react'
import Hero from '../images/hero-image.png'

export default function Shop(){


  // State to control visibility of the navigation bar
  const [showProducts, setShowProducts] = useState(true)

  const viewProduct = () => {
    setShowProducts(false)
  }


   



    return (
        <React.Fragment>
        <div className='store-page'>
            <h1 className='page-title'>SHOP</h1>
            {showProducts && <div className='products'>
                <div className='product-container'>
                    <img id="product-img" src={Hero} alt="grateful dead logo" img/>
                    <h2 id='product-title'>8/26/23 Tickets</h2>
                    <button onClick={viewProduct} id='add-to-cart-btn'>Add To Cart</button>
                </div>
            </div>}
        </div>
        </React.Fragment>
      )
}


// page cont
// title
// product pic with title underneath
// click to change state then...
// add product to cart
// hide whole shop page
// show product pic on left
// show product title, description, quanity +/- button, add to cart button