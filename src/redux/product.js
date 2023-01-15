import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        productList: [],
        isShowPopup: false,
        selectedProduct: undefined
    },
    reducers: {
        SHOW_POPUP: (state, action) => {
            state.selectedProduct = action.payload
            state.isShowPopup = true
        },
        HIDE_POPUP: state => {
            state.isShowPopup = false
            state.selectedProduct = undefined
        }
    }
})

export const productActions = productSlice.actions

export default productSlice.reducer