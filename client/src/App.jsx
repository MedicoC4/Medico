import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import db from "./firebase-config";
import ProductOverview from "./pages/productOverview/ProductOverview";
import AddProduct from "./pages/addProduct/AddProduct.jsx";
import Overview from "./pages/overview/Overview";
import Home from "./pages/landingPage/LandingPage";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Statistics from "./pages/statistics/Statistics";
import SideNav from "./components/sideNav/SideNav";
const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <SideNav />
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
          appear
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="product-details" element={<ProductDetails />} />
            <Route path="products" element={<Home />} />
            <Route path="statistics" element={<Statistics />} />
            {/* </Route> */}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
