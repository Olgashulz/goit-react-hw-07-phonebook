import { combineReducers, createReducer } from "@reduxjs/toolkit";
// import * as actions from "./actions";
import { fetchContacts, addContact } from "./operations"

const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (state, action) => [...state, action.payload],
    // [actions.deleteContactSuccess]: (state, action) => state.filter((contact) => contact.id !== action.payload),
});

const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,

    // [actions.addContactRequest]: () => true,
    // [actions.addContactSuccess]: () => false,
    // [actions.addContactError]: () => false,

    // [actions.deleteContactRequest]: () => true,
    // [actions.deleteContactSuccess]: () => false,
    // [actions.deleteContactError]: () => false,

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

///////////////////////////////////////////////////////////////////////////////////////////////////////

// import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from "./types";
// import { combineReducers } from 'redux';


// const arrContacts = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const contactReducer = (state = arrContacts, action) => {
//     switch (action.type) {
//         case ADD_CONTACT:
//             return [...state, action.payload];
//         case DELETE_CONTACT:
//             return state.filter(contact => contact.id !== action.payload);
//         default:
//             return state;
//     }
// }

// const filterReducer = (state = arrContacts, action) => {
//     switch (action.type) {
//         case FILTER_CONTACT:
//             return action.payload;
//         default:
//             return state;
//     }
// }

// export const rootReducer = combineReducers({
//     contacts: contactReducer,
//     filter: filterReducer,
// });





