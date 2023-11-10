import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  error: null,
  loading: false,
};


export const migratePharm = createAsyncThunk('api/migratePharm', async(input)=>{
    const Pharm = await axios.post(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/doctor/migratePharm`,input)
    return Pharm.data
  })



  const PharmacySlice = createSlice({
    name: "pharmacy",
    initialState,
    reducers: {},

    extraReducers(builder) {
      builder.addCase(migratePharm.fulfilled, (state, action) => {
        state.data = action.payload;
      });
    }
})

export default PharmacySlice.reducer 