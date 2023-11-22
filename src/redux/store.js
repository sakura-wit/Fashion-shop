import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Slice/UserSlice";
import userReducer from './Slice/UserSlice'
import productReducer from './Slice/ProductSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        product: productReducer
    }
})