import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    data: [],
    error: null,
    loading: false,
  };


export const fetchPharmacies = createAsyncThunk(
  'pharmacies/fetchPharmacies',
  async () => {
    const response = await axios.get(`http://localhost:1128/api/pharmacy/fetch`);
    return response.data;
  }
);
export const verificationPharm = createAsyncThunk(
  "api/verificationPharm" , 
  async(input)=>{
    const responce = await axios.patch(`http://localhost:1128/api/pharmacy/verficationPharm` , 
    input
    )
    return responce.data
  }
  )



const pharmaciesSlice = createSlice({
  name: 'pharmacies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPharmacies.fulfilled, (state, action) => {
        state.data = action.payload;
    });
    builder.addCase(verificationPharm.fulfilled, (state, action) => {
        state.data = action.payload;
    });
  },

});

export default pharmaciesSlice.reducer;