export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectStatusFilter = state => state.filtersStatus.status;
