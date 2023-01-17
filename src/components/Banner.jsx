// import du lieu va css
import React from "react";
import './Banner.css'
import { useNavigate } from "react-router-dom";

// component Banner
function Banner() {
        const navigate = useNavigate()
    return (
        <div className='home-banner d-flex justify-content-center flex-column'>
            <div className='p-5 w-30'>
                <p className='fw-light fst-italic fs-6 text-secondary-emphasis'>NEW INSPIRATION 2020</p>
                <p className='fs-3 fst-italic'>20% OFF ON NEW SEASON</p>
{/* Chuyen trang khi shop khi click nut */}
                <button className='btn btn-dark fst-italic fs-5 fw-light' onClick={()=>navigate("/shop")}>Browse collections</button>
            </div>
        </div>
    )
}


export default Banner