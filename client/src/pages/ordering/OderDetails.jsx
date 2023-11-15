import "./cardList.css";
import React, { useState, useEffect } from "react";
import SideNav from "../../components/sideNav/SideNav";
import MasterCardIcon from "../../assets/images/mastercard.svg";
import { Divider, Steps, Dropdown, Space, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import axios from "axios";

const OderDetails = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  console.log(order);

  const fetchOrdersDetails = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:1128/api/orders/oneOrder/${orderId}`
      );
      setOrder(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrdersDetails();
  }, [orderId]);

  const items = [
    {
      key: "1",
      label: "Completed",
    },
    {
      key: "2",
      label: "Item 2",
    },
    {
      key: "3",
      label: "Item 3",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <SideNav />
      <div className="order_details_main_container">
        <div className="order_details_container">
          <div className="order_details_child_container">
            <div className="order_detail_header">
              <div className="order_id">
                <div>
                  <h1>Order #{order?.tracking_number}</h1>
                  <div className="order_id_status">
                    <p style={{ margin: "0" }}>{order?.orderStatus}</p>
                  </div>
                </div>
                <p className="order_time" style={{ margin: "0" }}>
                  {order?.createdAt}
                </p>
              </div>
              <div className="order_header_settings">
                <div>
                  {/* <p style={{ margin: "0" }}>Completed</p> */}
                  <Dropdown
                    menu={{
                      items,
                      selectable: true,
                      defaultSelectedKeys: ["3"],
                    }}
                    trigger={['click']}
                  >
                    <Typography.Link>
                      <Space>
                      <p style={{ margin: "0", color:'black' }}>Completed</p>
                        <DownOutlined style={{color:'black'}} />
                      </Space>
                    </Typography.Link>
                  </Dropdown>
                </div>
                <div>
                  <p style={{ margin: "0" }}>Print</p>
                </div>
              </div>
            </div>
            <div className="order_details_statistics">
              <div className="first_col_order">
                <div className="order_detailssss">
                  <div className="order_detailssss_header">
                    <div>
                      <p id="order_det_tit">Details</p>
                      <div className="order_det_wrapper">
                        <img id="img" src={order?.Product.imageURL} alt="" />
                        <div className="nike">
                          <p>{order?.Product.productName}</p>
                          <p>{order?.Product.codebar}</p>
                        </div>
                      </div>
                    </div>
                    <div className="price_order">
                      <p>x{order?.quantityOrdered}</p>
                      <p>${order?.total}</p>
                    </div>
                  </div>
                  <div className="order_divider"></div>
                  <div className="order_subtotal">
                    <div className="order_subtotal_wrapper">
                      <ul>
                        <li>Subtotal</li>
                        <li>Shipping</li>
                        <li>Discount</li>
                        <li>Taxes</li>
                        <li>Total</li>
                      </ul>
                      <ul>
                        <li>${order?.total}</li>
                        <li>- $10</li>
                        <li>- $10</li>
                        <li>$10</li>
                        <li>$73.74</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="order_history">
                  <h2>History</h2>
                  <div className="order_tracking_container">
                    <div className="order_tracking">
                      <Steps
                        progressDot
                        current={-1}
                        direction="vertical"
                        items={[
                          {
                            title: "Delivery successful",
                            description:
                              "This is a description. This is a description.",
                          },
                          {
                            title: "Transporting to [1]",
                            description: "This is a description.",
                          },
                          {
                            title: "The shipping unit has picked up the goods",
                            description: "This is a description.",
                          },
                          {
                            title: "Order has been created",
                            description:
                              "This is a description. This is a description.",
                          },
                        ]}
                      />
                    </div>
                    <div className="order-timing">
                      <div>
                        <p>Order time</p>
                        <p>14 Nov 2023 9:03 AM</p>
                      </div>
                      <div>
                        <p>Payment time</p>
                        <p>14 Nov 2023 9:03 AM</p>
                      </div>
                      <div>
                        <p>Delivery time for the carrier</p>
                        <p>14 Nov 2023 9:03 AM</p>
                      </div>
                      <div>
                        <p>Completion time</p>
                        <p>14 Nov 2023 9:03 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="second_col_detailssss">
                <div className="Customer-Info">
                  <h2>Customer Info</h2>
                  <div>
                    <img
                      src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg"
                      alt=""
                    />
                    <div>
                      <p>{order?.User.username}</p>
                      <p>{order?.User.email}</p>
                      <p>IP Address:192.158.1.38</p>
                    </div>
                  </div>
                </div>
                <div className="order_divider"></div>
                <div className="Delivery">
                  <h2>Delivery</h2>
                  <div>
                    <ul>
                      <li>Ship by</li>
                      <li>Speedy</li>
                      <li>Tracking No.</li>
                    </ul>
                    <ul>
                      <li>DHL</li>
                      <li>Standard</li>
                      <li>{order?.tracking_number}</li>
                    </ul>
                  </div>
                </div>
                <div className="order_divider"></div>
                <div className="Shipping">
                  <h2>Shipping</h2>
                  <div>
                    <p>Address</p>
                    <p>19034 Verna Unions Apt. 164 - Honolulu, RI / 87535</p>
                    <p>Phone number</p>
                    <p>365-374-4961</p>
                  </div>
                </div>
                <div className="order_divider"></div>
                <div className="Payment">
                  <h2>Payment</h2>
                  <div>
                    <p>Phone number</p>
                    <div>
                      <p>**** **** **** 5678</p>
                      <img src={MasterCardIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OderDetails;
