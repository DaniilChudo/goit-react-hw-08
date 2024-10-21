import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk("contacts/fetch", async () => {
  const response = await axios.get("/contacts");
  return response.data;
});

export const addContact = createAsyncThunk("contacts/add", async (contact) => {
  const response = await axios.post("/contacts", contact);
  return response.data;
});

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (contactId) => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);
