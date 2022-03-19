import React from 'react';
import { Layout } from '../layout';
import Product from "../components/productCard";

/*
**products page using function components.
*/
const Products = () =>
  <Layout>
  <div className="productsFilters">
    <a href="#" className="filterBtn men grey active">Men</a>
    <a href="#" className="filterBtn men grey">Women</a>
    <a href="#" className="filterBtn filters grey">Filters</a>
  </div>
    <div className="row productsScreen">
      <div className="col">
        <Product></Product>
      </div>
      <div className="col">
        <Product></Product>
      </div>
      <div className="col">
        <Product></Product>
      </div>
      <div className="col">
        <Product></Product>
      </div>
      <div className="col">
        <Product></Product>
      </div>
      <div className="col">
        <Product></Product>
      </div>
      <div className="col">
        <Product></Product>
      </div>
      <div className="col">
        <Product></Product>
      </div>
    </div>
  </Layout>;

export default Products;
