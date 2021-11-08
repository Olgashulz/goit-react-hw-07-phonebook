import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact, resetFilter } from "./actions";

const items = createReducer([], {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) => state.filter((contact) => contact.id !== action.payload),

});

const filter = createReducer('', {
    [filterContact]: (state, action) => action.payload,
    [resetFilter]: (state, action) => state = '',

});

const rootReducer = combineReducers({
    items,
    filter
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





