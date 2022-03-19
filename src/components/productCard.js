import React from 'react';
import { productData } from '../data';

/*
**products card component.
*/
const Product = () => {
  return <div className="productCardWrapper">
  {
    productData.map((item) =>
      <div className="productCard">
        <div className="productCardOuter">
          <img src={item.image} />
        </div>
        <p><span className="grey">{item.brand}</span>{item.model}<span className="blue price">${item.price}</span></p>
      </div>
  )}
  </div>
}

export default Product;
