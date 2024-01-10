import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dataUser: {},
    dataAllUser: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        update: (state, action) => {
            state.dataUser = action.payload
        },

        updateDataAllUser: (state, action) => {
            state.dataAllUser = [...action.payload]
        },

        updateCart: (state, action) => {
            // const newData = [...action.payload]
            // console.log('loaddddd', newData);
            // const New = state
            // console.log('newCarttttttt', New);

            // {

            //     try {
            //         const check = state.productCurrent.some((item) => item._id === action.payload[0]._id)
            //         console.log(action.payload.length);
            //         if (!check) {
            //             const newCart = [...state.dataUser.cart, ...newData]
            //             state.dataUser.cart = [...newCart]
            //             console.log('newwwwDataCart', newCart);

            //         }

            //         console.log('checkkkkk', check);
            //     } catch (error) {

            //     }

            // }
        }
    }

})

export const userAction = userSlice.actions

// export const { update } = userSlice.actions

export default userSlice.reducer