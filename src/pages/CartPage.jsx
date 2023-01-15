import React from "react";
import Navbar from "../components/Navbar";
import "./CartPage.css";
import {
  ChevronLeft,
  ChevronRight,
  Trash2,
  Gift,
  ArrowLeft,
  ArrowRight,
} from "react-feather";
import { navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../redux/product";
import { renderPrice } from "../helper/helper";
import { cartActions } from "../redux/cart";

function ProdLine(props) {
  const { item, onDecreaseNum, onIncreaseNum, onDelete } = props
  return (
      <tr className="fst-italic">
        <th scope="row">
          <div className='prodline-img'><img src={item.img1} /></div>
        </th>
        <td>{item.name}</td>
        <td className='text-body-tertiary'>{renderPrice(item.price)} VND</td>
        <td className="d-flex gap-2 fst-normal">
          <div onClick={() => onDecreaseNum(item)}>
            <ChevronLeft size={20} color={"black"} />
          </div>
          <span>{item.quantity}</span>
          <div onClick={() => onIncreaseNum(item)}>
            <ChevronRight size={20} color={"black"} />
          </div>
        </td>
        <td className='text-body-tertiary'>{renderPrice(item.price * item.quantity)} VND</td>
        <td>
          <span onClick={() => onDelete(item)}>
            <Trash2 size={20} />
          </span>
        </td>
      </tr>
  );
}

function CartPage() {
  const dispatch = useDispatch();
  //   Tang so luong
  const onIncreaseNum = (item) => {
    dispatch(cartActions.UPDATE_CART({ newItem: item, isIncrease: true }));
  };

  //  Giam so luong
  const onDecreaseNum = (item) => {
    if (item.quantity > 1) {
      dispatch(cartActions.UPDATE_CART({ newItem: item, isIncrease: false }));
    } else {
      alert("Da min");
    }
  };

  const onDelete = (item) => {
    dispatch(cartActions.DELETE_CART(item));
  };
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const onContinueShopping = () => {
    navigate("/shop");
  };

  const onCheckOut = () => {
    navigate("/checkout");
  };

  const totalPrice = cartItems.reduce(
    (currentTotal, item) => currentTotal + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <Navbar />
      <div className="cart-banner bg-body-tertiary d-flex justify-content-between align-items-center p-4 text-uppercase fst-italic fw-bold mb-4">
        <div className="text-black fs-3">Cart</div>
        <div className="text-body-tertiary">cart</div>
      </div>
      <div>
        <h3 className="text-uppercase fst-italic my-5">Shopping cart</h3>
        <div className="d-flex gap-3">
          <div className=' flex-grow-1'>
            <table class="table table-borderless">
              <thead>
                <tr className='text-uppercase fst-italic table-light'>
                  <th scope="col">Image</th>
                  <th scope="col">product</th>
                  <th scope="col">Price</th>
                  <th scope="col">quantity</th>
                  <th scope="col">total</th>
                  <th scope="col">remove</th>
                </tr>
              </thead>
              <tbody>
                  {cartItems.map((item) => {
                    return (
                        <ProdLine item={item} onDecreaseNum={onDecreaseNum} onIncreaseNum={onIncreaseNum} onDelete={onDelete} />
                    );
                  })}
              </tbody>
            </table>
            <div className="d-flex justify-content-between align-items-center fst-italic bg-body-tertiary">
              <p className="m-4 d-flex gap-1 align-items-center justify-content-center">
                <ArrowLeft size={20} />
                <span className='fs-5' onClick={onContinueShopping}>Continue shopping</span>
              </p>
              <p className="border border-dark p-3 m-4 d-flex gap-1 align-items-center justify-content-center">
                <span className='fs-5' onClick={onCheckOut}>Proceed to checkout</span>
                <ArrowRight size={20} />
              </p>
            </div>
          </div>
          <div className="p-4 bg-body-tertiary">
            <div className="text-uppercase fst-italic">
              <h4 className="py-3">cart total</h4>
              <p className="d-flex justify-content-between">
                <span className="fw-semibold">subtotal</span>
                <span className="text-body-tertiary">
                  {renderPrice(totalPrice)} VND
                </span>
              </p>
              <hr />
              <p className="d-flex justify-content-between">
                <span className="fw-semibold">Total</span>
                <span className="fs-5">{renderPrice(totalPrice)} VND</span>
              </p>
            </div>
            <div>
              <input
                className="p-3"
                type="text"
                placeholder="Enter your coupon"
              />
              <p className="p-3 coupon-btn d-flex justify-content-center align-items-center gap-1">
                <Gift size={20} />
                <span>Apply coupon</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
