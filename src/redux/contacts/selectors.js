export const selectContacts = state => state.contacts.contacts;

export const selectInputFilter = state => state.filter.text;

export const selectLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
