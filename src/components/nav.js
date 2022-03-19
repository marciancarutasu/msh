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

/*
**navigation component.
*/
const Nav = () => {
  return <nav className="header">
    <a href="#" className="blue">Not a real store</a>
    <ul className="header-navigation">
      {navs.map((navItem) => {
        return <li className="grey">
          <NavLink
            exact
            activeClassName="active"
            to={navItem.path}>
            {navItem.name}
          </NavLink>
        </li>
      })}
    </ul>
  </nav>
};

export default Nav;
