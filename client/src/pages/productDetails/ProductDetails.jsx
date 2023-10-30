import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <div className="bigDiv___flex___colmun">
      <div className="images___top___container">
        <div className="image___top___one">
          <img src="" alt="" />
        </div>
        <div className="image___top___two">
          <div className="image___top___twoGrid">
            <img src="" alt="" />
          </div>
          <div className="image___top___twoGrid">
            <img src="" alt="" />
          </div>
          <div className="image___top___twoGrid">
            <img src="" alt="" />
          </div>
          <div className="image___top___twoGrid">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="product___info___container">
        <div className="product___title___info">
          <div className="titles___container">
            <h1 className="product___name">Medicine name</h1>
            <p className="product___sousName">Description of the medicine</p>
          </div>
          <div className="info___rating___customer">
            <p1 className="paragraph___rating">Customer Reviews</p1>
            <div className="rating___value">
              <p className="text___rating___value">Rating</p>
            </div>
          </div>
        </div>
        <ul className="navBar___info___medcine">
          <Link className="navBar___Link">Overview</Link>
          <Link className="navBar___Link">Dosage</Link>
          <Link className="navBar___Link">Warnings</Link>
          <Link className="navBar___Link">Side Effects</Link>
        </ul>
        <div className="product___information___title___details">
          <h1 className="title___product___information">Product Information</h1>
          <div className="description___info___image">
            <div className="description___details">
              <div className="details___icon___para">
                <div className="icon___details">AA</div>
                <p className="description___of___icon">Connectivity</p>
              </div>
              <div className="details___icon___para">
                <div className="icon___details">AA</div>
                <p className="description___of___icon">Storage</p>
              </div>
              <div className="details___icon___para">
                <div className="icon___details">AA</div>
                <p className="description___of___icon">Usage Instructions</p>
              </div>
              <div className="details___icon___para">
                <div className="icon___details">AA</div>
                <p className="description___of___icon">Prescription Required</p>
              </div>
              <div className="details___icon___para">
                <div className="icon___details">AA</div>
                <p className="description___of___icon">Expiration Date</p>
              </div>
              <div className="details___icon___para">
                <div className="icon___details">AA</div>
                <p className="description___of___icon">Aivability</p>
              </div>
            </div>
            <div className="description___image">
              <img src="" alt="ggggggg" />
            </div>
          </div>
        </div>
      </div>
      <h1 className="suggested___products">Suggest Products</h1>
      <div className="all___suggested___cards">
        <div className="card___suggested___container">
          <div className="card___image___suggestion">
            <img src="" alt="" />
          </div>
          <div className="text___product___suggestion">
            <h1 className="product___title___suggestion">Product Name</h1>
            <div className="keys___description___suggestion">
              <div className="oneKey___description___suggestion">
                <div className="icon___product___keySuggestion">AA</div>
                <p className="text___product___keySuggestion">Quantity</p>
              </div>
              <div className="oneKey___description___suggestion">
                <div className="icon___product___keySuggestion">AA</div>
                <p className="text___product___keySuggestion">Quantity</p>
              </div>
              <div className="oneKey___description___suggestion">
                <div className="icon___product___keySuggestion">AA</div>
                <p className="text___product___keySuggestion">Quantity</p>
              </div>
              <p className="under___description___suggest">
                Description of this products
              </p>
            </div>
            <button className="show___product___suggestion___btn">
              Show Product
            </button>
          </div>
        </div>
        <div className="card___suggested___container">
          <div className="card___image___suggestion">
            <img src="" alt="" />
          </div>
          <div className="text___product___suggestion">
            <h1 className="product___title___suggestion">Product Name</h1>
            <div className="keys___description___suggestion">
              <div className="oneKey___description___suggestion">
                <div className="icon___product___keySuggestion">AA</div>
                <p className="text___product___keySuggestion">Quantity</p>
              </div>
              <div className="oneKey___description___suggestion">
                <div className="icon___product___keySuggestion">AA</div>
                <p className="text___product___keySuggestion">Quantity</p>
              </div>
              <div className="oneKey___description___suggestion">
                <div className="icon___product___keySuggestion">AA</div>
                <p className="text___product___keySuggestion">Quantity</p>
              </div>
              <p className="under___description___suggest">
                Description of this products
              </p>
            </div>
            <button className="show___product___suggestion___btn">
              Show Product
            </button>
          </div>
        </div>
        <div className="card___suggested___container">
          <div className="card___image___suggestion">
            <img src="" alt="" />
          </div>
          <div className="text___product___suggestion">
            <h1 className="product___title___suggestion">Product Name</h1>
            <div className="keys___description___suggestion">
              <div className="oneKey___description___suggestion">
                <div className="icon___product___keySuggestion">AA</div>
                <p className="text___product___keySuggestion">Quantity</p>
              </div>
              <div className="oneKey___description___suggestion">
                <div className="icon___product___keySuggestion">AA</div>
                <p className="text___product___keySuggestion">Quantity</p>
              </div>
              <div className="oneKey___description___suggestion">
                <div className="icon___product___keySuggestion">AA</div>
                <p className="text___product___keySuggestion">Quantity</p>
              </div>
              <p className="under___description___suggest">
                Description of this products
              </p>
            </div>
            <button className="show___product___suggestion___btn">
              Show Product
            </button>
          </div>
        </div>
        <div className="card___suggested___container">
          <div className="card___image___suggestion">
            <img src="" alt="" />
          </div>
          <div className="text___product___suggestion">
            <h1 className="product___title___suggestion">Product Name</h1>
            <div className="keys___description___suggestion">
              <div className="oneKey___description___suggestion">
                <div className="icon___product___keySuggestion">AA</div>
                <p className="text___product___keySuggestion">Quantity</p>
              </div>
              <div className="oneKey___description___suggestion">
                <div className="icon___product___keySuggestion">AA</div>
                <p className="text___product___keySuggestion">Quantity</p>
              </div>
              <div className="oneKey___description___suggestion">
                <div className="icon___product___keySuggestion">AA</div>
                <p className="text___product___keySuggestion">Quantity</p>
              </div>
              <p className="under___description___suggest">
                Description of this products
              </p>
            </div>
            <button className="show___product___suggestion___btn">
              Show Product
            </button>
          </div>
        </div>
        <div className="card___suggested___container">
          <div className="card___image___suggestion">
            <img src="" alt="" />
          </div>
          <div className="text___product___suggestion">
            <h1 className="product___title___suggestion">Product Name</h1>
            <div className="keys___description___suggestion">
              <div className="oneKey___description___suggestion">
                <div className="icon___product___keySuggestion">AA</div>
                <p className="text___product___keySuggestion">Quantity</p>
              </div>
              <div className="oneKey___description___suggestion">
                <div className="icon___product___keySuggestion">AA</div>
                <p className="text___product___keySuggestion">Quantity</p>
              </div>
              <div className="oneKey___description___suggestion">
                <div className="icon___product___keySuggestion">AA</div>
                <p className="text___product___keySuggestion">Quantity</p>
              </div>
              <p className="under___description___suggest">
                Description of this products
              </p>
            </div>
            <button className="show___product___suggestion___btn">
              Show Product
            </button>
          </div>
        </div>
      </div>
      <div className="custumer___Reviews___container">
        <h1 className="title___custum___reviews">Customer Reviews</h1>
        <div className="container___reviews___information">
          <div className="reviews___rating___one">
            <h1 className="rating___product___number">4.8/5</h1>
            <div className="all___informations___rating">
              <p className="title___one___productDetail">Side Effects</p>
            <div className="titles___rat___product">
              <p className="title___two___productDetail">Side Effects</p>
            </div>
            </div>
          </div>
          <div className="reviews___information___two">

          </div>
        </div>
        <div className="rating___reviews___prductDetails">

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
