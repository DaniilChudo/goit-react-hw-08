import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://connections-api.goit.global/users";

export const register = createAsyncThunk("auth/register", async (user) => {
  const response = await axios.post(`${API_URL}/signup`, user);
  return response.data;
});

export const logIn = createAsyncThunk("auth/logIn", async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
});

export const logOut = createAsyncThunk("auth/logOut", async () => {
  await axios.post(`${API_URL}/logout`);
});
