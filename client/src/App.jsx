import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import db from "./firebase-config";
import ProductOverview from "./pages/productOverview/ProductOverview";
import Home from './pages/landingPage/LandingPage'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/productsOverview" element={<ProductOverview />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
