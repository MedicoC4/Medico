import React,{useEffect,useState} from 'react'
import "./style.css"
import { DB } from "../../firebase-config";
import { collection, getDocs, doc } from "firebase/firestore";


const ProductShow = () => {
    const [products,setPrducts]=useState([])
    const productsCollectionRef = collection(DB,"products")
    const getProducts = async ()=>{
        try {
            const result = await getDocs (productsCollectionRef)
            const products = result.docs.map((doc)=>({
                ...doc.data(),
                id : doc.id
            }))
            setPrducts(products)
        } catch (error) {
            console.log("error fetching data",error)
        }
        useEffect(()=>{
            getProducts()
        },[])
    }
  return (
    <div>
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
     
      </div>
    </div>
  )
}

export default ProductShow