import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { HelloVue } from './helloVue';

const App = () => {
  return (
    <BrowserRouter>
      <Link to={'/'}>React app</Link>
      <Link to="/vue"> Vue App</Link>
      <Routes>
        <Route path="/" element={<h1>React App Hello</h1>} />
        <Route path="/vue" element={<HelloVue />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
