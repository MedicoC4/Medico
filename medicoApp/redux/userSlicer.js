import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  error: null,
  loading: false,
};



export const fetchUsers = createAsyncThunk('api/fetchUsers', async () => {
  const response = await axios.get(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/user/getAll`); // Replace with your API endpoint
  return response.data;
});

export const addUser = createAsyncThunk(
    "addUser",
    async (input, { dispatch }) => {
      console.log(input,'this is the body');
      console.log(process.env.EXPO_PUBLIC_SERVER_IP,"logged");
     const response = await axios.post(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/user/createUser`, input);
     console.log(response,"this is from the store");
      dispatch(fetchUsers());
  return response.data
    }
  );

const deleteUser = createAsyncThunk('api/deleteUser',async(id, {dispatch})=>{
    const response = await axios.delete(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/user/deleteUser/:${id}`)
    dispatch(fetchUsers())
    return response.data
})

const updateUser=createAsyncThunk('api/updateUser',async(id,input,{dispatch})=>{
    const response = await axios.delete(`http://${process.env.EXPO_PUBLIC_SERVER_IP}:1128/api/user/updateUser/:${id}`,input)
    dispatch(fetchUsers())
    return response.data
})

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.data = action.payload;
      });
      builder.addCase(addUser.fulfilled, (state, action) => {
        state.data = action.payload;
      });
      builder.addCase(updateUser.fulfilled, (state, action) => {
        state.data = action.payload;
      });
      builder.addCase(deleteUser.fulfilled, (state, action) => {
        state.data = action.payload;
      })
     
    }
  });
  export default UserSlice.reducer 