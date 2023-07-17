import React from "react";
import AllProduct from "../allProduct/AllProduct.jsx"
const Product = (props) => {
  console.log(props)
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"12px"}}>
    
    {props.item.map((el, index) => (
      <div className="div" key={index}>
        < AllProduct   el={el}  />
      </div>
    ))
    }
    </div>
)
    }

export default Product;