import { configureStore } from "@reduxjs/toolkit";
import product from './product'
import auth from './auth'
import cart from "./cart";
const rootReducer = {
    product,
    auth,
    cart
}

const store = configureStore({
    reducer: rootReducer
})

export default store