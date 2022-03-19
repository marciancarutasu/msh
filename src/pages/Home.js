import React from 'react';
import { Layout } from '../layout';
import Product from "../components/productCard";

/*
**home page using function components.
*/
const Home = () =>
  <Layout>
  <div className="row home-screen">
    <div className="col-6 homeLeft">
      <h1>Not a real store</h1>
      <p className="grey">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit.</p>
      <a href="#" className="blue">Shop now &gt;</a>
      <span className="spacer spacer1"></span>
      <span className="spacer spacer2"></span>

      <Product></Product>

    </div>
    <div className="col-6">
    <div className="hpRightSectionOne">
      <div className="rectangles rectangleTop"></div>
      <div className="rectangles rectangleMiddle"></div>
      <div className="rectangles rectangleBottom"></div>
        <img src="hpimage1.png" />
      </div>
      <div className="hpRightSectionTwo">
        <img src="hpimage2.png" />
        <a href="#" className="">See our editorial &gt;</a>
      </div>
    </div>
  </div>
  </Layout>
  export default Home;
