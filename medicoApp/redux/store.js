import { configureStore } from '@reduxjs/toolkit'
import idProdReducer from './productSlicer.jsx';
import userSlicer from './userSlicer.js';
import doctorSlicer from './doctorSlicer.js';


const store = configureStore({
  reducer: {
    idProd: idProdReducer,
  ...userSlicer,
    doctor:doctorSlicer
  },
})

export default store