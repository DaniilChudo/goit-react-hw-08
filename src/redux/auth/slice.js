import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("auth/register", async (userData) => {
  const response = await axios.post(
    "https://connections-api.goit.global/users/signup",
    userData
  );
  return response.data; // Переконайтеся, що ви повертаєте правильний об'єкт
});

export const logIn = createAsyncThunk("auth/login", async (userData) => {
  const response = await axios.post(
    "https://connections-api.goit.global/users/login",
    userData
  );
  return response.data; // Переконайтеся, що ви повертаєте правильний об'єкт
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
