import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const fetchDoctors = createAsyncThunk('api/fetchDoctors', async () => {
  const response = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/doctor/getAll`); // Replace with your API endpoint
  return response.data;
});

export const addDoctor = createAsyncThunk(
    "addDoctor",
    async (input, { dispatch }) => {
     const response = await axios.post("http://localhost:3000/api/doctor/createUser", input);
      dispatch(fetchDoctors());
  return response.data
    }
  );

const deleteDoctor = createAsyncThunk('api/deleteDoctor',async(id, {dispatch})=>{
    const response = await axios.delete(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/user/deleteDoctor/:${id}`)
    dispatch(fetchDoctors())
    return response.data
})

const updateDoctor=createAsyncThunk('api/updateDoctor',async(id,input,{dispatch})=>{
    const response = await axios.delete(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/user/updateDoctor/:${id}`,input)
    dispatch(fetchDoctors())
    return response.data
})

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
      })
     
    }
  });
  export default DoctorSlice.reducer 