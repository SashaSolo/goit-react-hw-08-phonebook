export const getContacts = state => state.contacts.contacts;

export const getInputFilter = state => state.filter.text;

export const getLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;
