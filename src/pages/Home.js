import React from 'react';
import { Layout } from '../layout';

const Home = () =>
  <Layout>
  <div className="row">
    <div className="col-6">
      <h1>Not a real store</h1>
      <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit.</p>
      <a href="#">Shop now &gt;</a>
    </div>
    <div className="col-6">
      <div className="hpRightSectionOne">
        <img src="hpimage1.png" />
      </div>
      <div className="hpRightSectionTwo">
        <img src="hpimage2.png" />
        <a href="#">See our editorial &gt;</a>
      </div>
    </div>
  </div>
  </Layout>
  export default Home;
