import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

const fetchDoctors = createAsyncThunk("api/fetchDoctors", async () => {
  const response = await axios.get(
    `http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/doctor/getAll`
  ); // Replace with your API endpoint
  return response.data;
});

export const addDoctor = createAsyncThunk(
  "addDoctor",
  async (input, { dispatch }) => {
    const response = await axios.post(
      `http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/doctor/addDoc`,
      input
    );
    dispatch(fetchDoctors());
    return response.data;
  }
);

const deleteDoctor = createAsyncThunk(
  "api/deleteDoctor",
  async (id, { dispatch }) => {
    const response = await axios.delete(
      `http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/doctor/deleteDoc/:${id}`
    );
    dispatch(fetchDoctors());
    return response.data;
  }
);

export const updateDoctor = createAsyncThunk(
  "api/updateDoctor",
  async (id, input, { dispatch }) => {
    const response = await axios.delete(
      `http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/doctor/updateDoc/:${id}`,
      input
    );
    dispatch(fetchDoctors());
    return response.data;
  }
);
export const migrateDoctor = createAsyncThunk(
  "api/migrateDoctor",
  async (input) => {
    const doc = await axios.post(
      `http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/doctor/migrationDoctor`,
      input
    );
    return doc.data;
  }
);


const DoctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDoctors.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(addDoctor.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(updateDoctor.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(deleteDoctor.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(migrateDoctor.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export default DoctorSlice.reducer;
