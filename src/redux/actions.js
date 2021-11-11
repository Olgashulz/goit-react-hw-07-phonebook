import { createAction } from "@reduxjs/toolkit";
//pending
// export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
// //fulfilled
// export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
// //rejected
// export const fetchContactsError = createAction('contacts/fetchContactsError');




export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');

// export const deleteContact = createAction('contacts/deleteContact');
// export const filterContact = createAction('contacts/filterContact');
// export const resetFilter = createAction('filter/resetFilter')


/////////////////////////////////////////////////////////////////////////////////////
// import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './types';

// export const addContact = (data) => ({
//     type: ADD_CONTACT,
//     payload: FormData
// })

// export const deleteContact = (id) => ({
//     type: DELETE_CONTACT,
//     payload: id
// })

// export const filterContact = (value) => ({
//     type: FILTER_CONTACT,
//     payload: value
// })



