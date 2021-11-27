const getContacts = state => state.phonebook.contacts;
const getIsLoading = state => state.phonebook.isLoading;
const getFilter = state => state.filter;

const phonebookSelectors = {
  getContacts,
  getIsLoading,
  getFilter,
};

export default phonebookSelectors;
