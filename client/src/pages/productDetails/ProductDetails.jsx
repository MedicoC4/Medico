import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, Outlet,NavLink, json } from "react-router-dom";
import ProgressBar from "./ProgressBar.jsx";
import {Box,Tab,Tabs} from "@mui/material"
import {TabContext,TabList,TabPanel} from "@mui/lab"
import Prod_info from "./Prod_info.jsx";
import Prod_det from "./Prod_det.jsx";
import { useSelector } from 'react-redux';
import { collection, query, where, getDoc,doc,updateDoc } from "firebase/firestore";
import { DB } from "../../firebase-config";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




const prodId = localStorage.getItem("prod_id")

const ProductDetails = () => {
  const [name,setName] = useState ("")
  const [prod,setProd]=useState([])
  const [value,setValue] = useState(0)
  const [refresh,setRefresh] = useState(false)
  const productId = useSelector((state) => state.idProd.value);
console.log(productId,"reduuuux");
const docRef = doc(DB, "products", productId);
const getProdById = async()=>{
  try {
    const docSnap = await getDoc(docRef);    
    const result = docSnap.data()
    setProd(result)
  } catch (error) {
    console.log("error fetching prod",error);
  }
}

const taskDocRef = doc(DB,"products",productId)
const handleCheckedChange = async ()=>{
  try {
    await updateDoc(taskDocRef,{
      productName:name
    })
setRefresh(!refresh)
  } catch (error) {
    console.log("error update",error);
  }
}

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(()=>{
    getProdById()
  },[refresh])
  console.log(prod,"this is prod");
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
            <h1 className="product___name">{prod.productName}</h1>
            <p className="product___sousName">Description of the medicine</p>
          </div>
          <div className="info___rating___customer">
            <p1 className="paragraph___rating">Customer Reviews</p1>
            <div className="rating___value">
              <p className="text___rating___value">Rating</p>
            </div>
          </div>
        </div>
        <div className="cont___title___update___prod">
        <h1 className="title___product___information">Product Information</h1>
        <div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Update
</button>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
        <input placeholder="Write here" onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>handleCheckedChange()}>Confirme</button>
      </div>
    </div>
  </div>
</div>
</div>
        </div>
        <div>
      <Tabs value={value} onChange={handleChange}  >
        <Tab label="Overview" />
        <Tab label="Dosage" />
        <Tab label="Warnings" />
        <Tab label="Side Effects" />
      </Tabs>
      {value === 0 && <div><Prod_info/></div>}
      {value === 1 && <div><Prod_det/></div>}
      {value === 2 && <div><Prod_info/></div>}
      {value === 3 && <div><Prod_det/></div>}
    </div>
    
        {/* <div>
        <ul className="navBar___info___medcine">
          
          <NavLink className="navBar___Link" to="prod_info">Overview</NavLink>
            
          
          <li>
          <NavLink className="navBar___Link" to="prod_det">Dosage</NavLink>

          </li>
          <Link className="navBar___Link">Warnings</Link>
          <Link className="navBar___Link">Side Effects</Link>
        </ul>
        </div>
        <div>
        <Outlet/>
        </div> */}
        {/* <div className="product___information___title___details">
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
        </div> */}
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
      </div>
      <div className="custumer___Reviews___container">
        <h1 className="title___custum___reviews">Customer Reviews</h1>
        <div className="container___reviews___information">
          <div className="reviews___rating___one">
            <h1 className="rating___product___number">4.8/5</h1>
            <div className="all___informations___rating">
              <p className="title___one___productDetail">Side Effects</p>
              <div className="titles___rat___product">
                <div className="title___two___productDetail">
                  <ProgressBar />
                </div>
              </div>
            </div>
            <div className="all___informations___rating">
              <p className="title___one___productDetail">Side Effects</p>
              <div className="titles___rat___product">
                <div className="title___two___productDetail">
                  <ProgressBar />
                </div>
              </div>
            </div>
            <div className="all___informations___rating">
              <p className="title___one___productDetail">Side Effects</p>
              <div className="titles___rat___product">
                <div className="title___two___productDetail">
                  <ProgressBar />
                </div>
              </div>
            </div>
            <div className="all___informations___rating">
              <p className="title___one___productDetail">Side Effects</p>
              <div className="titles___rat___product">
                <div className="title___two___productDetail">
                  <ProgressBar />
                </div>
              </div>
            </div>
            <div className="all___informations___rating">
              <p className="title___one___productDetail">Side Effects</p>
              <div className="titles___rat___product">
                <div className="title___two___productDetail">
                  <ProgressBar />
                </div>
              </div>
            </div>
          </div>
          <div className="reviews___information___two">
            <div className="container___two___info___up">
              <div className="info___up___1">
                <h1 className="title___up___1">Highly effective medication</h1>
                <h1 className="title___up___2">John D.</h1>
              </div>
              <h1 className="title___up___3">
                feel much better after laking this medication
              </h1>
              <div className="min___cont___up">
                <p className="sign___plus"> + </p>
                <p className="title___of___plus">Convenient and easy to use</p>
              </div>
              <div className="min___cont___up">
                <p className="sign___plus"> + </p>
                <p className="title___of___plus">Convenient and easy to use</p>
              </div>
              <div className="min___cont___up">
                <p className="sign___plus"> + </p>
                <p className="title___of___plus">Convenient and easy to use</p>
              </div>
            </div>
            <div className="container___two___info___down">
              <h1 className="title___down">Made in the USA</h1>
              <h1 className="title___down___2">Sarah T.</h1>
            </div>
            <h1 className="title___info___down___3">Prompet delivery and good packaging</h1>
            <div className="cont___mines___title">
            <h1 className="mines___icon">-</h1>
            <h1 className="down___title___mines">Refund Policy</h1>

            </div>
            <div className="container___two___info___two"></div>
          </div>
          <div className="rating___reviews___prductDetails">zzzzzzzzzzzzz</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
