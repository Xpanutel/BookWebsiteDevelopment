import {configureStore} from "@reduxjs/toolkit";
import filterSlice from "./slices/FilterSlice.js";

export const store = configureStore({
    reducer: {
        filterSlice
    }
})