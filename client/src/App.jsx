import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import db from './firebase-config';
import ProductOverview from './pages/productOverview/ProductOverview';
import AddProduct from './pages/addProduct/AddProduct.jsx';import Overview from './pages/overview/Overview';

const App = () => {
  return (
      <div>
    <Routes>
        <Route path="/"/>
        <Route path="/productsOverview" element={<ProductOverview/>}/>
        <Route path="/add" element={<AddProduct/>}/>

        <Route path="/overview" element={<Overview/>} />
    </Routes>
      </div>
  );
};

export default App