import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const appStore = configureStore(
    {
        // add all slices here
    reducer: {
        cart: cartReducer
    }
}
);

export default appStore;