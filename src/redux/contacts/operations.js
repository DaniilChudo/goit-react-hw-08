import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://connections-api.goit.global/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addContact = createAsyncThunk("contacts/add", async (contact) => {
  const response = await axios.post(API_URL, contact);
  return response.data;
});

export const deleteContact = createAsyncThunk("contacts/delete", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});
