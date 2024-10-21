import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/contacts";

export const fetchContacts = createAsyncThunk("contacts/fetch", async () => {
  const { data } = await axios.get("/");
  return data;
});

export const addContact = createAsyncThunk("contacts/add", async (contact) => {
  const { data } = await axios.post("/", contact);
  return data;
});

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (contactId) => {
    await axios.delete(`/${contactId}`);
    return contactId;
  }
);
