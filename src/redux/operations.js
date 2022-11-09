import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const addContact  = createAsyncThunk(
    "contacts/addContact",
    async contact => {
        try {
            const {data} = await axios.post('/contacts', contact);
            return data;
        } catch (error) {
            console.log(error)
        }
    }
);


export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);
