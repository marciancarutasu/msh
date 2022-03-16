import React from 'react';
import { Layout } from './layout';
import { Home, Products, Contact } from './pages';

function App() {
  return (
    <div>
      <h1>hello poppers!</h1>
      <Home />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
