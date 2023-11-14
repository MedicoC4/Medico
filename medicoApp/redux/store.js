import { configureStore } from '@reduxjs/toolkit'
import idProdReducer from './productSlicer.jsx';
import userSlicer from './userSlicer.js';
import doctorSlicer from './doctorSlicer.js';
import pharmacySlicer from './pharmacySlicer.js';
import medecineSlicer from './medecineSlicer.js';
import reviewSlicer from './reviewSlicer.js';
import orderSlicer from './orderSlicer.js';



const store = configureStore({
  reducer: {
    idProd: idProdReducer,
  ...userSlicer,
    doctor:doctorSlicer,
    pharmacy:pharmacySlicer,
    medecine: medecineSlicer,
    reviews: reviewSlicer,
    
    orders: orderSlicer
  },
})

export default store