import React from 'react';

const Layout = (props) =>
  <div className="bg-purple-500 border-black-2 m-5">
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    {props.children}
  </div>

export { Layout };
