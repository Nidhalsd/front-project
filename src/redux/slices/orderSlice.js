import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createOrder = createAsyncThunk("PostOrder", async (data, { rejectWithValue }) => {
  try {
    const res = await axios.post("/user/createorder", data, {
      headers: {
        token: localStorage.getItem("token"), 
      },
    });
    return res.data; 
  } catch (error) {
    return rejectWithValue(error.response.data.msg); 
  }
});

const orderSlice = createSlice({
  name: "order",
  initialState: {
    isLoading: false,
    error: null,
    orders: [],
  },
  reducers: {
    logout: (state) => {
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true; 
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.error = null; 
        state.isLoading = false; 
        state.orders.push(action.payload); 
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.error = action.payload; 
        state.isLoading = false; 
      });
  },
});

export default orderSlice.reducer;
