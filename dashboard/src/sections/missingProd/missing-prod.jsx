import axios from 'axios';
import { Tag } from 'antd';
import Barcode from 'react-barcode';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './missingProd.css';

const MissingProd = () => {
  const navigate = useNavigate();
  const [missing, setMissing] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const fetchMissingProd = async () => {
    const response = await axios.get('http://127.0.0.1:1128/api/orders/getMissed');
    setMissing(response.data);
  };

  const checkMissing = async (codebar) => {
    const res = await axios.get(
      `http://127.0.0.1:1128/api/Product/checkOne/${parsing.data.email}/${codebar}`
    );
    console.log(res);
    setIsButtonVisible(res.data);
  };

  const auth = localStorage.getItem('userData');
  const parsing = JSON.parse(auth);
  console.log(parsing.data.email);

  useEffect(() => {
    fetchMissingProd();
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    checkMissing(item.codebar);
  };

  const handleUpdate = (id) => {
    axios
      .get(`http://127.0.0.1:1128/api/product/getOne/${id}`)
      .then((res) => {
        console.log(res);
        navigate(`/updateProduct/${id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        paddingRight: '2rem',
        paddingLeft: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: '',
      }}
    >
      <div style={{ height: 'auto', width: '100%' }}>
        <h2 style={{ fontSize: '2em' }}>Missing Products</h2>
        <div className="missing_productss">
          {missing.map(
            (item) =>
              item && (
                <React.Fragment key={item?.id}>
                  <div
                    className="oneProduct"
                    role="button"
                    tabIndex="0"
                    onClick={() => handleCardClick(item)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleCardClick(item);
                      }
                    }}
                  >
                    <div style={{ height: '50%', width: '100%' }}>
                      <img src={item?.imageURL} alt="" style={{objectFit:'contain', height:'100%', width:'100%'}} />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '1rem',
                        }}
                      >
                        <p>{item?.productName}</p>
                        <Tag color="#f50">Missing</Tag>
                      </div>
                      <Barcode
                        value={item?.codebar}
                        height={50}
                        width={1.5}
                        background="transparent"
                        format="CODE128"
                      />
                      {selectedItem === item &&
                        (isButtonVisible ? (
                          <button
                            type="button"
                            onClick={() => {
                              handleUpdate(item?.id);
                            }}
                          >
                            Update Product
                          </button>
                        ) : (
                          <button type="button"
                            onClick={() => {
                              navigate('/product-overview/add-product')
                            }}
                          >
                            Add Product
                          </button>
                        ))}
                    </div>
                  </div>
                </React.Fragment>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MissingProd;
