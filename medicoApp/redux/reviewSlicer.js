import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    data: [],
    error: null,
    loading: false,
  };

// Async thunk action for fetching reviews
export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async (doctorId) => {
      const response = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/reviews/getAll/${doctorId}`);
      return response.data;
    }
  );
  export const addReviews = createAsyncThunk(
    'reviews/addReviews',
    async (input) => {
      const response = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/reviews/createRev`,input);
      return response.data;
    }
  );
  
  // Slice
  const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchReviews.fulfilled, (state, action) => {
          state.data = action.payload;
      });
      builder.addCase(addReviews.fulfilled, (state, action) => {
        state.data = action.payload;
    });
    },
  });
  
  export default reviewsSlice.reducer;