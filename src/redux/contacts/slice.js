import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    removeContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    setContacts(state, action) {
      state.items = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload; // Експортуємо цю функцію
    },
  },
});

// Експортуємо редюсер за замовчуванням
export default contactsSlice.reducer;

// Експортуємо дії
export const { addContact, removeContact, setContacts, setFilter } =
  contactsSlice.actions;

// Вибірки
export const selectFilter = (state) => state.contacts.filter;
export const selectVisibleContacts = (state) => {
  const filter = selectFilter(state);
  const contacts = state.contacts.items;
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
