import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import db from "./firebase-config";
import ProductOverview from "./pages/productOverview/ProductOverview";
import AddProduct from "./pages/addProduct/AddProduct.jsx";
import Overview from "./pages/overview/Overview";
import Home from "./pages/landingPage/LandingPage";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Statistics from "./pages/statistics/Statistics";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/productsOverview" element={<ProductOverview />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/home" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/statistics" element={<Statistics />} />
        
      </Routes>
    </div>
  );
};

export default App;
