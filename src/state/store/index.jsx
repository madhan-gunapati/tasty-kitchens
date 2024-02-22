import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../cartReducer";
const store = configureStore({
    reducer:{cartSlice:cartReducer}
})

export default store

