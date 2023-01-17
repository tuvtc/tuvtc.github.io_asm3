// import du lieu va css
import React from "react";
import './List.css'
import { renderPrice } from '../helper/helper'


// Component ProductItem
function ProductItem(props) {
  // detructering
  const { img1, name, price, onClick, itemOnRow } = props;
//  Render du lieu cua item
  return (
    <div onClick={onClick} className="prod" style={{ width: `calc(${100/itemOnRow}%)` }}>
      <div>
        <img className='prod-img' src={img1} />
      </div>
      <div className="d-flex flex-column align-items-center">
        <p className="mt-4 fw-bold fs-5 text-center">{name}</p>
        <p className="fst-italic text-secondary-emphasis fw-light fs-5 text-center">
          {renderPrice(price)} VND
        </p>
      </div>
    </div>
  );
}


// component List
function List(props) {
  // Detructering
  const { products, isShowHeader = true, itemOnRow = 4, onItemClick } = props;
// Render du lieu list
  return (
    <div className="mt-5">
      {
        isShowHeader && (
          <>
            <p className="fst-italic fw-light text-secondary-emphasis text-uppercase m-0 ">
              Made the hard way
            </p>
            <p className="fst-italic text-uppercase fs-5 fw-bold">
              Top trending products
            </p>
          </>
        )
      }
      {/* Lay 8 san pham */}
      <div className='d-flex flex-wrap'>
        {products.slice(0, 8).map((product, index) => {
            return <ProductItem key={index} onClick={() => onItemClick(product)} {...product} itemOnRow={itemOnRow} />;
          })}
      </div>
    </div>
  );
}

export default List;
