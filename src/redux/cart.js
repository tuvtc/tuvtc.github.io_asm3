import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isLoading: false,
        items: []
    },
    reducers: {
        ADD_CART: (state, action) => {
            const newItem = action.payload
            const foundItemIndex = state.items.findIndex(item => (item._id.$oid === newItem._id.$oid))
            const newItems = [...state.items]
            if (foundItemIndex !== -1) {
                newItems[foundItemIndex].quantity += newItem.quantity
            } else {
                newItems.push(newItem)
            }
            state.items = newItems

            localStorage.setItem('cartItems', JSON.stringify(newItems))
        },
        UPDATE_CART: (state, action) => {
            const { newItem, isIncrease } = action.payload
            const foundItemIndex = state.items.findIndex(item => (item._id.$oid === newItem._id.$oid))
            const newItems = [...state.items]
            if (foundItemIndex !== -1) {
                newItems[foundItemIndex].quantity += isIncrease ? 1 : -1
            }
            state.items = newItems

            localStorage.setItem('cartItems', JSON.stringify(newItems))
        },
        DELETE_CART: (state, action) => {
            const newItem = action.payload
            let newItems = state.items.filter(item => {
                return (item._id.$oid !== newItem._id.$oid)
            })
            state.items = newItems

            localStorage.setItem('cartItems', JSON.stringify(newItems))
        },
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer