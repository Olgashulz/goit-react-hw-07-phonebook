import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const filterContact = createAction('contacts/filterContact');
export const resetFilter = createAction('filter/resetFilter')


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



