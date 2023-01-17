// import du lieu va css
import React from "react";
import './Popup.css'
import { ShoppingCart } from 'react-feather';
import { Modal, ModalBody } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../redux/product";

// Tao component Popup
function Popup() {
  const isShowPopup = useSelector(state => state.product.isShowPopup)
  const product = useSelector(state => state.product.selectedProduct)
  const dispatch = useDispatch()

 const {img1, name, price, short_desc} = product || {}

 const onCloseModal = () => {
  dispatch(productActions.HIDE_POPUP())
 }
//  render du lieu
  return (
    <Modal isOpen={isShowPopup} size={'xl'} centered={true}>
      <ModalBody>
        <div className="d-flex gap-5 p-4 bg-yellow">
            <div className="prod-popup"><img src={img1} alt=''/></div>
            <div className="prod-popup">
                <div className="d-flex justify-content-end"><span onClick={onCloseModal} className="btn">X</span></div>
                <h4 className="fst-italic">{name}</h4>
                <p className="fst-italic text-secondary-emphasis fw-light fs-5">{price} VND</p>
                <p>{short_desc}</p>
                <button className="btn btn-dark py-3 px-5 fst-italic d-flex align-items-center justify-content-center gap-2"><ShoppingCart size={20} color={'white'} /><span>View Detail</span></button>
            </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default Popup;
