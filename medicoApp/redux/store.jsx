import { configureStore } from '@reduxjs/toolkit'
import idProdReducer from './productSlicer.jsx';
import userSlicer from './userSlicer.js';
import doctorSlicer from './doctorSlicer.js';


export const store = configureStore({
  reducer: {
    idProd: idProdReducer,
    user : userSlicer,
    doctor:doctorSlicer
  },
})