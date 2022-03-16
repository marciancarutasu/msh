import React from 'react';
import {  } from '../App';
import Nav from './nav';

const Layout = (props) =>
  <div className="bg-purple-500 border-black m-5">
    {props.children}
  </div>

export { Layout, Nav };
