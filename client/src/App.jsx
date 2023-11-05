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
import Prod_info from "./pages/productDetails/Prod_info.jsx";
import Prod_det from "./pages/productDetails/Prod_det.jsx";
import Orders from "./pages/ordering/Orders.jsx";


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
            <Route path="product-details" element={<ProductDetails />} >
            <Route path="prod_info" element={<Prod_info />} />
            <Route path="prod_det" element={<Prod_det />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="reset-password" element={<ResetePassword />} />
            <Route path="orders" element={<Orders />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App