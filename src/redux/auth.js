import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        loginedUser: undefined
    },
    reducers: {
        ON_LOGIN: (state, action) => {
            state.loginedUser = action.payload
        },
        ON_LOGOUT: (state) => {
            state.loginedUser = undefined
        }
    }
})

export const authActions = authSlice.actions

export default authSlice.reducer