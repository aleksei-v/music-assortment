import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice/slice";
import { filterSlice } from "./filterSlice/slice";
import authReducer from "./auth/auth-slice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,
        filter: filterSlice.reducer,
    },

});
