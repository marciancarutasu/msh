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
    path: '',
    name: 'Contact'
  }
];

const Nav = () => {
  return <nav className="">
    <a href="#">Not a real store</a>
    <ul className="">
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
