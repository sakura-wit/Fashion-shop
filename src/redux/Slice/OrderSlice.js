import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    dataPayment: {},
    orderItem: [],
    shippingAddress: {},
    paymentMethod: 'COD',
    dataOrderAdmin: [],
    userOrderPend: [],
    dataCreateOrder: {}
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        updateDataPay: (state, action) => {

        },

        updateOrderItem: (state, action) => {
            state.orderItem = action.payload
        },

        updatePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload
        },

        updateDataOrderAdmin: (state, action) => {
            state.dataOrderAdmin = action.payload
        },

        updateUserOrderPend: (state, action) => {
            state.userOrderPend = action.payload
        },

        updateDataCreateOrder: (state, action) => {
            state.dataCreateOrder = action.payload
        }
    }
})

export const orderAction = orderSlice.actions

export default orderSlice.reducer