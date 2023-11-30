import axios from 'axios';
import { Image } from 'antd';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';

import './productDetails.css';

function ProductDetails() {
  const [inc, setInc] = useState(1);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [stock, setStock] = useState(0);
  const [check, setCheck] = useState(true);

  useEffect(() => {
    if (stock < 1 || stock === 0) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [stock]);

  const products = useCallback(async () => {
    const response = await axios.get(`http://127.0.0.1:1128/api/product/getOne/${id}`);
    setProduct(response?.data);
    setStock(response?.data?.stock);
  }, [id, setProduct, setStock]);

  console.log(product);

  useEffect(() => {
    products();
  }, [products]);

  const increment = () => {
    setInc((prevInc) => prevInc + 1);
  };

  const decrement = () => {
    if (inc > 1) {
      setInc((prevInc) => prevInc - 1);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '2rem',
        gap: '2rem',
        width: '100%',
      }}
    >
      <div className="productDetail_header">
        <div style={{ zIndex: '0', width: '50%' }}>
          <Image style={{ borderRadius: '18px' }} src={product?.imageURL} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.1rem',
              justifyContent: 'flex-start',
            }}
          >
            {/* <p className="new_tag">NEW</p> */}
            <p className="stocksss">{check ? 'IN STOCK' : 'OUT OF STOCK'}</p>
            
            <h5 className="foundations">{product?.productName}</h5>
            {/* <div>starts(aeereaaon)</div> */}
            <p>${product?.price}</p>
            <p className="descss">
              {product?.description}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="dosage">
              <p>Dosage Form</p>
              <p>{product?.dosageForm}</p>
            </div>
            <div className="quantity">
              <p>Quantity</p>
              <div>
                <button type="button" onClick={decrement}>
                  -
                </button>
                <p>{inc}</p>
                <button type="button" onClick={increment}>
                  +
                </button>
              </div>
            </div>
            <div className="butttonss">
              <div>
                <p>Add to Cart</p>
              </div>
              <div>
                <p>Buy Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <h1>Product Description</h1>
        <div className="specc_container">
          <h2>Specifications</h2>
          <div className="specificationss">
            <p>Category</p>
            <p>{product?.Category?.name}</p>
            <p>Manufacturer</p>
            <p>{product?.manufacturer}</p>

            <p>Strength</p>
            <p>{product?.strength}</p>

            <p>packaging</p>
            <p>{product?.packaging}</p>

            <p>Expiry Date</p>
            <p>{product?.expiryDate}</p>
          </div>
          <h2>Side Effect</h2>
          <ul>
            <li>{product.sideEffect}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
