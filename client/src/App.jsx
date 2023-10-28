import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import db from './firebase-config';
import ProductOverview from './pages/productOverview/ProductOverview';
import Login from './pages/login/Login';
import ForgrtPassword from './pages/forgetPassword/ForgrtPassword';
import ResetPassword from './pages/resetePassword/ResetPassword';


const App = () => {
  return (
      <div>
    <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/productsOverview" element={<ProductOverview/>}/>
        <Route path='/forget' element={<ForgrtPassword/>}/>
        <Route path='/resete' element={<ResetPassword/>}/>

    </Routes>
      </div>
  );
};

export default App