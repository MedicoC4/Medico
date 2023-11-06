import React, { useState, useEffect } from "react";
import "./style.css";
import SideNav from "../../components/sideNav/SideNav";
import DataGrid from "../../components/dataGrid/dataGrid";
import { collection, onSnapshot, query } from "firebase/firestore";
import { DB } from "../../firebase-config";
import { Timestamp } from "firebase/firestore";
import { useNavigate } from 'react-router';
import ProductDetails from "../productDetails/ProductDetails";
import { useDispatch } from 'react-redux';
import { save } from '../../redux/productSlicer';

const ProductOverview = () => {
  const [data, setData] = useState([]);
  const [prodId,setPredId]=useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleShowProductDetails = (e) => {
    dispatch(save(e));
  };

  function timestampToDate(timestamp) {
    if (timestamp instanceof Timestamp) {
      const date = timestamp.toDate();
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear().toString();
      return `${day}/${month}/${year}`;
    }
    return null;
  }

  const fetchData = () => {
    try {
      const productsCollection = collection(DB, "products");

      const unsubscribe = onSnapshot(productsCollection, (querySnapshot) => {
        let list = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          data.timeStamp = timestampToDate(data.timeStamp);
          list.push({ id: doc.id, ...data });
        });
        setData(list);
      });

      return unsubscribe;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = fetchData();

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    fetchData();
    localStorage.setItem("prod_id",prodId )
  }, [prodId]);
  console.log(data);
  console.log(prodId,"this");

  const filteredProducts = data.filter(
    (product) => product.productCategory === "fedi"
  );
  console.log(filteredProducts);

  return (
    <div className="all_product_container">
      <SideNav />
      <div className="body_cards_container">
        <h1>Products</h1>
        <DataGrid data={data} />
      </div>
    </div>
  );
};

export default ProductOverview;
