import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
//Redux Store
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default appStore;
