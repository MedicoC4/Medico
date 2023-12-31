import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
    error: null,
    loading: false,
};

// Async thunk action for fetching medicines
export const fetchMedicines = createAsyncThunk(
  'medicines/fetchMedicines',
  async () => {
    const response = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/Product/getAll`);
    return response.data;
  }
);

// Slice
const medicinesSlice = createSlice({
  name: 'medicines',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchMedicines.fulfilled, (state, action) => {
      state.data = action.payload;
    })
      .addCase(fetchMedicines.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMedicines.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default medicinesSlice.reducer;