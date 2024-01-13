import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    dataProduct: [],
    productCurrent: [],
    productDetail: {},
    checkPay: '',
    productCheckout: [],
    dataProductNew: []
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

            if (newData.length === 0) {
                console.log('MANGRONGGGG');
                state.productCurrent = []
            } else {

                try {
                    const check = state.productCurrent.some((item) => item._id === action.payload[0]._id)
                    console.log(action.payload.length);
                    if (!check) {
                        const newCart = [...state.productCurrent, ...newData]
                        state.productCurrent = [...newCart]
                        console.log('newwwwDataCart', newCart);

                    }

                    console.log('checkkkkk', check);
                } catch (error) {

                }

            }



        },

        deleteProductCur: (state, action) => {

            state.productCurrent = [...action.payload]

            console.log('aferrDelete', state.productCurrent);
        },

        setDetaislProduct: (state, action) => {
            state.productDetail = action.payload
        },

        setCheckpay: (state, action) => {
            state.checkPay = action.payload
        },

        setProductCheckout: (state, action) => {
            const newArrayProduct = [...action.payload]
            state.productCheckout = newArrayProduct
        },

        setDataProductNew: (state, action) => {
            // console.log('action.payload: ', action.payload);
            state.dataProductNew = action.payload
        },



    }
})

export const { update, updateProductCur, deleteProductCur, setDetaislProduct, setCheckpay, setProductCheckout, setDataProductNew } = productSlice.actions


export default productSlice.reducer
