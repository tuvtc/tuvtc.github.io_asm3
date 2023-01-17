// import du lieu va css
import React from "react";
import Navbar from '../components/Navbar'
import ProductList from "../components/ProductList";
import './ShopPage.css'

// component ShopPage
function ShopPage () {
    return (
        <div className='container'>
            <Navbar />
            <div className='shop-banner d-flex justify-content-between align-items-center p-4 text-uppercase fst-italic fw-bold mb-4'>
                <div className="text-black fs-3">Shop</div>
                <div>Shop</div>
            </div>
            <ProductList />
        </div>
    )
}

export default ShopPage