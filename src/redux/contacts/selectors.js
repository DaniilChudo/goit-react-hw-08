// src/redux/contacts/selectors.js
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

// Додайте новий селектор для відфільтрованих контактів
export const selectFilteredContacts = (state) => {
  const contacts = selectContacts(state);
  const filter = state.contacts.filter; // Припустимо, у вас є фільтр у state
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
