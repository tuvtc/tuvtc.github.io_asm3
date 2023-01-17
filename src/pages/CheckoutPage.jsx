// import du lieu va css
import React from "react";
import Navbar from "../components/Navbar";
import { renderPrice } from "../helper/helper";
import "./CheckoutPage.css";
import { useSelector } from "react-redux";

// Component ProdOrd
function ProdOrd(props) {
  const { item } = props
  // Render du lieu cua dofng product
  return (
    <>
      <p className="d-flex gap-2 justify-content-between">
        <span className="fw-semibold">{item.name}</span>
        <span className="text-body-tertiary">{`${renderPrice(item.price)} VND x ${item.quantity}`} </span>
      </p>
      <hr />
    </>
  );
}

// Component CheckoutPage
function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (currentTotal, item) => currentTotal + item.price * item.quantity,
    0
  );
// Render du lieu cua all
  return (
    <div className="container">
      <Navbar />
      <div className="cart-banner bg-body-tertiary d-flex justify-content-between align-items-center p-4 text-uppercase fst-italic fw-semibold mb-4">
        <div className="text-black fs-3">Checkout</div>
        <div>
          <span className="text-black">home / cart / </span>
          <span className="text-body-tertiary">checkout</span>
        </div>
      </div>
      <div className="fst-italic">
        <h3 className="text-uppercase">billing details</h3>
        <div className="d-flex gap-3">
          <div className="flex-grow-1">
            <p className="text-uppercase fs-5 my-3">Full name:</p>
            <input
              className="p-3 w-100"
              type="text"
              placeholder="Enter Your Full Name Here!"
            />
            <p className="text-uppercase fs-5 my-3">Email:</p>
            <input
              className="p-3 w-100"
              type="text"
              placeholder="Enter Your Email Here!"
            />
            <p className="text-uppercase fs-5 my-3">Phone number:</p>
            <input
              className="p-3 w-100"
              type="text"
              placeholder="Enter Your Phone Number Here!"
            />
            <p className="text-uppercase fs-5 my-3">address:</p>
            <input
              className="p-3 w-100"
              type="text"
              placeholder="Enter Your Address Here!"
            />
            <p className="text-white bg-dark p-3 fs-5 checkout-btn mt-3">
              Place order
            </p>
          </div>
          <div className="p-4 bg-body-tertiary">
            <div className="text-uppercase fst-italic">
              <h4 className="py-3">Your order</h4>
              {cartItems.map((item) => {
                return <ProdOrd item={item} />})}
              <p className="d-flex justify-content-between">
                <span className="fw-semibold">Total</span>
                <span className="fs-5">{renderPrice(totalPrice)} VND</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
