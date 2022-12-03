// import {useEffect, useState} from "react";

import React from "react";
import "./App.css";

const ProductPage = () => {

  // const [price, grabPrice] = ("");

  // const [buy, setBuy] = useEffect ({});

  return(
    <>
    <div className="upper-display"><b> 
    Free Shipping within the Philippines on all orders over P500.00
    </b></div>
    <div className="details">
      <td>
      <h2 className="ghost"> SACK-O </h2>
      </td>
      <td>
        <h4 className="help">Help</h4>
      </td>
      <td>
        <h4 className="blog" >Blog</h4>
      </td>

      <td>
        <h4 className="ghost-com">Sack-o.com</h4>
      </td>
    </div>

    <hr className="solid" />

    <div className="details-two">    
      <td>
      <h4 className="r"> MENS </h4>
      </td>
      <td>
        <h4 className="r">WOMENS</h4>
      </td>
      <td>
        <h4 className="r" >KIDS</h4>
      </td>
      <td>
        <h4 className="r">SALE</h4>
      </td>

      <input className="search-field" placeholder="Search"></input>

      <td>
        <h4 className="cart">CART</h4>
      </td>
      <td>
        <h4 className="cart"> ₱</h4>
      </td>
    </div>
  

    <hr className="solid-two" />

    <div className="products">
      <td>
        <div className="product-box-one">
          {/* <div className="product-one"/> */}
        </div>
      </td>
      <td>
        <div className="product-box-one">
          {/* <div className="product-one"/> */}
        </div>
      </td>

      <td>
        <div className="product-box-one">
          {/* <div className="product-one"/> */}
        </div>
      </td>

      <td>
        <div className="product-box-one">
          {/* <div className="product-one"/> */}
        </div>
      </td>
    
    </div>



    {/* <h1> Welcome to Ghost Online Shop! </h1>
    <table className="center-table">
      <tr className="tr">
          <td className="product-name"> Shoe
          <div className="product-one-pic"/>
          <button className="btn-buy">Buy</button>
          </td>
   
      
          <td className="product-name">Shirt
          <div className="product-two-pic"/>
          
          <button className="btn-buy">Buy</button>
          </td>
      
          <td className="product-name">Gadgets
          <div className="product-three-pic"/>
          <button className="btn-buy">Buy</button>
          </td>
      
          <td className="product-name">Vehicles
          <div className="product-four-pic"/>
          <button className="btn-buy">Buy</button>
          </td>
      </tr>
          
    </table> */}
   
    </>
  );
}

export default ProductPage;