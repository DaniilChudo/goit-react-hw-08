export const selectItems = (state) => {
  const { items, filter } = state.contacts;
  return items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
