import { configureStore } from '@reduxjs/toolkit'
import idProdReducer from './productSlicer.jsx';
import userSlicer from './userSlicer.js';
import doctorSlicer from './doctorSlicer.js';
import PharmacySlice from './pharmacySlicer.js';


const store = configureStore({
  reducer: {
    idProd: idProdReducer,
  ...userSlicer,
    doctor:doctorSlicer,
    pharmacy:PharmacySlice
  },
})

export default store