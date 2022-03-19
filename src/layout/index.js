import React from 'react';
import {  } from '../App';
import Nav from '../components/nav';
import Footer from '../components/footer'

/*
**main layout of the app.
*/
const Layout = (props) =>
  <div className="">
    {props.children}
  </div>

export { Layout, Nav, Footer };
