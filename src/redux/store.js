import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import {
    // persistStore,
    // persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'contacts',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),
    devTools: process.env.NODE_ENV === 'development'
});

// const persistor = persistStore(store)
// const obj = { store, persistor }
// export default obj;

export default store;

//////////////////////////////////////////////////////////////////////////////////////////
// import { createStore } from 'redux';
// import { rootReducer } from './reducers';

// console.log(rootReducer)

// const store = createStore(rootReducer);

// export default store;