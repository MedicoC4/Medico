import "./cardList.css";
import React, { useState, useEffect } from "react";
import SideNav from "../../components/sideNav/SideNav";
import axios from "axios";
// import { or } from "firebase/firestore"; // This import is not used

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState(false);

  console.log(orders);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1128/api/orders/getAll"
      );
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      await axios.patch(
        `http://127.0.0.1:1128/api/orders/updateOrder/${orderId}`,
        {
          orderStatus: newStatus,
        }
      );
      fetchOrders(); // Refresh the order list after updating the status
    } catch (error) {
      console.error("Error updating order status:", error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="main_order_container">
      <SideNav />
      <div className="order-content">
        <div className="grid-container">
          <div className="grid-item header">Order ID</div>
          <div className="grid-item header">Product Name</div>
          <div className="grid-item header">Item</div>
          <div className="grid-item header">Quantity</div>
          <div className="grid-item header">Price</div>
          <div className="grid-item header">Total</div>
          <div className="grid-item header">Status</div>
          <div className="grid-item header">Action</div>
          {orders.map((order, index) => (
            <React.Fragment key={index}>
              <div className="grid-item">{order.tracking_number}</div>
              <div className="grid-item">Product A</div>
              <div className="grid-item">
                <img
                  src="https://www.francetvinfo.fr/pictures/AoHuy6lKW2ZUVKOL3XVLYR8xy3I/1200x900/2022/12/06/638f27500e338_000-32nv9ly.jpg"
                  alt=""
                />
              </div>
              <div className="grid-item">{order.quantityOrdered}</div>
              <div className="grid-item">$20.00</div>
              <div className="grid-item">${order.total}</div>
              <div className="grid-item">{order.orderStatus}</div>
              <div className="grid-item grid-btn">
                <button
                  onClick={() => updateOrderStatus(order.order_id, "Accepted")}
                  disabled={disabledButtons}
                  className={disabledButtons ? "disabled" : ""}
                >
                  accept
                </button>
                <button
                  onClick={() => {updateOrderStatus(order.order_id, "Rejected")
                  if (order.orderStatus === "Rejected") {
                    setDisabledButtons(true)
                  }
                }}
                  
                  disabled={disabledButtons}
                  className={disabledButtons ? "disabled" : ""}
                >
                  reject
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderList;
