import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { 
  TransitionGroup, 
  CSSTransition 
} from "react-transition-group";
import ProductOverview        from "./pages/productOverview/ProductOverview";
import AddProduct             from "./pages/addProduct/AddProduct.jsx";
import Overview               from "./pages/overview/Overview";
import Home                   from "./pages/dashboard/LandingPage";
import ProductDetails         from "./pages/productDetails/ProductDetails";
import Statistics             from "./pages/statistics/Statistics";
import SideNav                from "./components/sideNav/SideNav";
import Login                  from "./pages/login/Login"
import SignUp                 from './pages/signUp/SignUp'
import ResetePassword         from './pages/resetePassword/ResetePassword'
import Landing                from "./pages/landingPage/landing"
<<<<<<< HEAD
import Orders                from "./pages/ordering/Orders.jsx"


=======
import Ordering               from "./pages/ordering/OrderList.jsx"
import { gsap }               from 'gsap-trial';
import { ScrollTrigger }      from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother }     from 'gsap-trial/ScrollSmoother';
import { TransitionProvider } from './context/TransitionContext.jsx';
import TransitionComponent from './components/Transition/Transition.jsx';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
>>>>>>> 29402f3c7a241b3d287b2df41d34bbfc7c4ef30f
const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  
  useEffect(() => {
    window.addEventListener('popstate', scrollToTop);  
    return () => {
      window.removeEventListener('popstate', scrollToTop);
    };
  }, []);

  return (
    <div>
      {/* <SideNav /> */}
      <TransitionProvider>
        {/* <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
          appear
        > */}
          <Routes>
            <Route path="/" element={
            <TransitionComponent>
              <Landing />
            </TransitionComponent>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
            <TransitionComponent>
            <Home />
            </TransitionComponent>
            } />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="products" element={<ProductOverview />} />
            <Route path="product-detail/:productId" element={<ProductDetails />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="reset-password" element={<ResetePassword />} />
<<<<<<< HEAD
            <Route path="orders" element={<Orders />} />
=======
            <Route path="orders" element={<Ordering />} />
>>>>>>> 29402f3c7a241b3d287b2df41d34bbfc7c4ef30f
          </Routes>
        {/* </CSSTransition> */}
      </TransitionProvider>
    </div>
  );
};

export default App