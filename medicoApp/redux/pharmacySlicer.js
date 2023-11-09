import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk action for fetching pharmacies
export const fetchPharmacies = createAsyncThunk(
  'pharmacies/fetchPharmacies',
  async () => {
    const response = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/pharmacy/getAll`);
    return response.data;
  }
);

// Slice
const pharmaciesSlice = createSlice({
  name: 'pharmacies',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPharmacies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default pharmaciesSlice.reducer;