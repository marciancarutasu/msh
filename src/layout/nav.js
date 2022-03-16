import React from 'react';
import { NavLink } from 'react-router-dom';
// check doc for activeClassName="border"

const navs = [
  {
    path: '/',
    name: 'Home'},
  {
    path: '/products',
    name: 'Products'},
  {
    path: '/contact',
    name: 'Contact'
  }
];

const Nav = () => {
  return <nav className="bg-purple-500 p-4">
    <ul className="flex space-x-4 justify-end">
      {navs.map((navItem) => {
        return <li>
          <NavLink
            exact
            activeClassName="text-white"
            to={navItem.path}>
            {navItem.name}
          </NavLink>
        </li>
      })}
    </ul>
  </nav>
};

export default Nav;
