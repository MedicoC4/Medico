import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    data: [],
    error: null,
    loading: false,
  };

// Async thunk action for fetching pharmacies
export const fetchPharmacies = createAsyncThunk(
  'pharmacies/fetchPharmacies',
  async () => {
    const response = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/pharmacy/getAll`);
    return response.data;
  }
);
export const migratePharmacy = createAsyncThunk(
  "api/migratePharmacy",
  async (input) => {
    const doc = await axios.post(
      `http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/pharmacy/migratePharm`,
      input
    );
    return doc.data;
  }
);

export const pharmacyLocation = createAsyncThunk(
  "api/pharmacyLocation",
  async (input) => {
    const pharm = await axios.patch(
      `http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/pharmacy/updateLocation`,
      input
    );
    return pharm.data;
  }
)

// Slice
const pharmaciesSlice = createSlice({
  name: 'pharmacies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPharmacies.fulfilled, (state, action) => {
        state.data = action.payload;
    });
    builder.addCase(migratePharmacy.fulfilled, (state, action) => {
        state.data = action.payload;
    });
    builder.addCase(pharmacyLocation.fulfilled, (state, action) => {
        state.data = action.payload;
    });
  },
});

export default pharmaciesSlice.reducer;