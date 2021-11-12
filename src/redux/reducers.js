import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations"

const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, action) => [...state, action.payload],
    [deleteContact.fulfilled]: (state, action) => state.filter((contact) => contact.id !== action.payload),
});



const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,

    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,

    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
})


const error = createReducer(null, {
    [fetchContacts.rejected]: (_, action) => action.payload,
    [fetchContacts.pending]: () => null,
})

// const filter = createReducer('', {
//     [actions.filterContact]: (state, action) => action.payload,
//     [actions.resetFilter]: (state, action) => state = '',

// });

const rootReducer = combineReducers({
    items,
    // filter,
    isLoading,
    error,
})

export default rootReducer;

