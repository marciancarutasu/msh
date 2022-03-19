import React from 'react';
import { Home, Products, Contact } from './pages';
import { Nav } from './layout';
import { Footer } from './layout';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

/*
**react-router@6 using function components
**page transition won't work.
*/
function App() {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={1000}
        classNames="fade">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </CSSTransition>
    </TransitionGroup>

  );
};

export default App;
