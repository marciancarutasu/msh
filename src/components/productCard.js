import React from 'react';
import { productData } from '../data';

const Product = () => {
  return <div className="productCardWrapper">
  {
    productData.map((item) =>
      <div className="productCard">
        <img src={item.image} />
        <p><span>{item.brand}</span>{item.model}<span>${item.price}</span></p>
      </div>
  )}
  </div>
}

export default Product;
