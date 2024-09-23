import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/FilterSlice.js";
import { reCount } from "./count/count.js";

export const store = configureStore({
  reducer: {
    filterSlice,
    reCount,
  },
});
