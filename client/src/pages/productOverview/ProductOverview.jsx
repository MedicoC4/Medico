import React, { useState, useEffect } from "react";
import "./style.css";
import SideNav from "../../components/sideNav/SideNav";
import DataGrid from "../../components/dataGrid/dataGrid";
import { collection, onSnapshot, query } from "firebase/firestore";import { DB } from "../../firebase-config";
import { Timestamp } from "firebase/firestore";

const ProductOverview = () => {
  const [data, setData] = useState([]);

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
  
      // Listen for real-time updates
      const unsubscribe = onSnapshot(productsCollection, (querySnapshot) => {
        let list = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          data.timeStamp = timestampToDate(data.timeStamp);
          list.push({ id: doc.id, ...data });
        });
        setData(list);
      });
  
      // Return the unsubscribe function to stop listening when the component unmounts
      return unsubscribe;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    // Start listening for real-time updates when the component mounts
    const unsubscribe = fetchData();
  
    return () => {
      // Unsubscribe from real-time updates when the component unmounts
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

    const filteredProducts = data.filter((product) => product.productCategory === 'fedi');
    console.log(filteredProducts);


  return (
    <div className="all_product_container">
      <SideNav />
      <div className="body_cards_container">
        <DataGrid data={data} />
      </div>
    </div>
  );
};

export default ProductOverview;
