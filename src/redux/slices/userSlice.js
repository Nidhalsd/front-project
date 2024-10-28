import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const RegisterUser = createAsyncThunk("Register", async (data, { rejectWithValue }) => {
  try {
    const res = await axios.post("/user/register", data);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data?.msg || 'Registration failed');
  }
});


export const LoginUser = createAsyncThunk("Login", async (data, { rejectWithValue }) => {
  try {
    const res = await axios.post("/user/login", data);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data?.msg || 'Login failed');
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    token: localStorage.getItem("token") || null,
    error: null,
    isAuth: JSON.parse(localStorage.getItem("isAuth")) || false
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("isAuth");
      state.isAuth = false;
      state.token = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.error = null;
        state.isAuth = true;
        localStorage.setItem("token", state.token);
        localStorage.setItem("isAuth", JSON.stringify(state.isAuth));  
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuth = false;
      })
      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.error = null;
        state.isAuth = true;
        localStorage.setItem("token", state.token);
        localStorage.setItem("isAuth", JSON.stringify(state.isAuth));  
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuth = false;
      });
  }
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
