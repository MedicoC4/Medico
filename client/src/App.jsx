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
import Home from "./pages/dashboard/LandingPage";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Statistics from "./pages/statistics/Statistics";
import SideNav from "./components/sideNav/SideNav";
import Login from "./pages/login/Login"
import SignUp from './pages/signUp/SignUp'
import ResetePassword from './pages/resetePassword/ResetePassword'
import Landing from "./pages/landingPage/landing"


const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      {/* <SideNav /> */}
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
          appear
        >
          <Routes>
            <Route path="/home" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="products" element={<ProductOverview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="product-overview" element={<ProductOverview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="product-details" element={<ProductDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="reset-password" element={<ResetePassword />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App