import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  oneDoc:{},
  idDoc:0,
  error: null,
  loading: false,
};




export const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async () => {
  const response = await axios.get(
    `http://localhost:1128/api/doctor/getAll`
  ); 
  return response.data;
});

const deleteDoctor = createAsyncThunk(
  "api/deleteDoctor",
  async (id, { dispatch }) => {
    const response = await axios.delete(
      `http://localhost:1128/api/doctor/deleteDoc/:${id}`
    );
    dispatch(fetchDoctors());
    return response.data;
  }
);

export const verificationDoc = createAsyncThunk(
  "api/verificationDoc" , 
  async(input)=>{
    const responce = await axios.patch(`http://localhost:1128/api/doctor/verficationDoc` , 
    input
    )
    return responce.data
  }
  )



const DoctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    save:(state,action)=>{
      state.idDoc=action.payload
    },
    logOut:(state)=>{
       state.oneDoc={} 
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchDoctors.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(deleteDoctor.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addCase(verificationDoc.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export const {save}= DoctorSlice.actions;
export default DoctorSlice.reducer;