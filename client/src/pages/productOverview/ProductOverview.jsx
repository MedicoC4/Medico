import React, { useState, useEffect } from "react";
import "./style.css";
import SideNav from "../../components/sideNav/SideNav";
import DataGrid from "../../components/dataGrid/dataGrid";
import { collection, getDocs } from "firebase/firestore";
import { DB } from "../../firebase-config";
import { Timestamp } from "firebase/firestore";

const ProductOverview = () => {
  const [data, setData] = useState([]);

  function timestampToDate(timestamp) {
    if (timestamp instanceof Timestamp) {
      const date = timestamp.toDate();
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear().toString().slice(-2);
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");

      return `${day}/${month}/${year} ${hours}:${minutes}`;
    }
    return null;
  }

  const fetchData = async () => {
    try {
      let list = [];
      const querySnapshot = await getDocs(collection(DB, "products"));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.timeStamp = timestampToDate(data.timeStamp);
        list.push({ id: doc.id, ...data });
      });
      setData(list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

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
