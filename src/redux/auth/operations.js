import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { clearContacts } from "../contacts/slice"; // Імпорт дії очищення контактів

axios.defaults.baseURL = "https://connections-api.goit.global/contacts";

// Операції авторизації
export const register = createAsyncThunk("auth/register", async (userData) => {
  const { data } = await axios.post("/users/signup", userData);
  return data;
});

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const { data } = await axios.post("/users/login", credentials);
  return data;
});

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch }) => {
    await axios.post("/users/logout");
    dispatch(clearContacts()); // Виклик дії для очищення контактів
  }
);

// Операції для контактів
export const fetchContacts = createAsyncThunk("contacts/fetch", async () => {
  const { data } = await axios.get("/contacts");
  return data;
});

export const addContact = createAsyncThunk("contacts/add", async (contact) => {
  const { data } = await axios.post("/contacts", contact);
  return data;
});

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (contactId) => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { getState }) => {
    const {
      auth: { token },
    } = getState();

    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await axios.get("/users/current", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }
);
