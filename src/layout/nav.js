import React from 'react';

const Nav = () => {
  return <nav className="bg-purple-500 p-4">
    <ul className="flex space-x-4 justify-end">
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
};

export default Nav;
