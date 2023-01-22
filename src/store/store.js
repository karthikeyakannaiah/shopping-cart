import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./inventory"
import cartReducer from "./cart"
export const store = configureStore({
    reducer:{
        inventory: inventoryReducer,
        cart: cartReducer
    }
})