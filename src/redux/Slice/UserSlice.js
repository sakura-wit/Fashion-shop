import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dataUser: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        update: (state, action) => {
            state.dataUser = action.payload
        }
    }

})

export const userAction = userSlice.actions

// export const { update } = userSlice.actions

export default userSlice.reducer