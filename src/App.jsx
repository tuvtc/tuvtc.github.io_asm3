// import du lieu va css
import React from 'react'
import "./App.css";
import Home from './pages/HomePage'
import Shop from './pages/ShopPage'
import Detail from './pages/DetailPage'
import Cart from './pages/CartPage'
import Checkout from './pages/CheckoutPage'
import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'
import SignUpPage from "./pages/SignUpPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { authActions } from './redux/auth'
import { cartActions } from './redux/cart';

// Component App
function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    // Lay data ve tu local storage cho auth reducer store
    const loginedUser = localStorage.getItem('loginedUser')
    if (loginedUser) {
      dispatch(authActions.ON_LOGIN(JSON.parse(loginedUser)))
    }

    // Lay data ve tu local storage cho cart reducer store
    const cartItems = localStorage.getItem('cartItems')
    if (cartItems) {
      for (const item of JSON.parse(cartItems)) {
        dispatch(cartActions.ADD_CART(item))
      }
    }

  }, [dispatch])

  return (
    // Tao Router chuyen trang
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
