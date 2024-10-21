export const selectContacts = (state) => state.contacts.items;

export const selectVisibleContacts = (state) => {
  const filter = state.filters.value.toLowerCase();
  return state.contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
};
