import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Slice/UserSlice";
import userReducer from './Slice/UserSlice'
import productReducer from './Slice/ProductSlice'
import orderReducer from './Slice/OrderSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        order: orderReducer
    }
})