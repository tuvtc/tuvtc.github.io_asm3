// Import du lieu va css
import React from "react";
import productImg1 from '../assets/img/product_1.png'
import productImg2 from '../assets/img/product_2.png'
import productImg3 from '../assets/img/product_3.png'
import productImg4 from '../assets/img/product_4.png'
import productImg5 from '../assets/img/product_5.png'
import { useNavigate } from "react-router-dom";
import './Category.css'


// tao component Category
function Category() {
    const navigate = useNavigate()
    return (
        <div className="mt-5">
            <div className='d-flex flex-column align-items-center'>
                <p className='fw-light fst-italic fs-6 text-secondary-emphasis text-uppercase'>Carefully created collections</p>
                <p className='fst-italic fs-5 fw-bold text-uppercase'>Browse our categories</p>
            </div>
            <div>
                {/* Chuyen trang khi nhan san pham -> qua trang shop */}
                <div className='d-flex gap-4'>
                    <div className="proImg"><img src={productImg1} onClick={()=>navigate("/shop")}/></div>
                    <div className="proImg"><img src={productImg2} onClick={()=>navigate("/shop")}/></div>
                </div>
                <div className='d-flex gap-4 mt-3'>
                    <div className="proImg"><img src={productImg3} onClick={()=>navigate("/shop")}/></div>
                    <div className="proImg"><img src={productImg4} onClick={()=>navigate("/shop")}/></div>
                    <div className="proImg"><img src={productImg5} onClick={()=>navigate("/shop")}/></div>

                </div>
            </div>
        </div>
    )
}

export default Category