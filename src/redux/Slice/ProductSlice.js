import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    dataProduct: [],
    productCurrent: [],
    productDetail: {}
}



export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        update: (state, action) => {
            // console.log('action.payload: ', action.payload);
            state.dataProduct = action.payload
        },

        updateProductCur: (state, action) => {

            const newData = [...action.payload]
            console.log('loaddddd', newData);
            const New = state
            console.log('newCarttttttt', New);
            const check = state.productCurrent.some((item) => item._id === action.payload[0]._id)
            console.log(action.payload.length);
            if (!check) {
                const newCart = [...state.productCurrent, ...newData]
                state.productCurrent = [...newCart]
                console.log('newwwwDataCart', newCart);

            }

            console.log('checkkkkk', check);

        },

        deleteProductCur: (state, action) => {
            // const check = state.productCurrent.some((item) => item._id === action.payload)
            // if (check) {

            state.productCurrent = [...action.payload]

            console.log('aferrDelete', state.productCurrent);
        },

        setDetaislProduct: (state, action) => {
            state.productDetail = action.payload
        }



    }
})

export const { update, updateProductCur, deleteProductCur, setDetaislProduct } = productSlice.actions


export default productSlice.reducer
