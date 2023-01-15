// import du lieu va css
import './Navbar.css'
import React from 'react'
import {User, ShoppingCart } from 'react-feather';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../redux/auth';
import { ChevronDown } from "react-feather";



function Navbar() {
    const dispatch = useDispatch()

    const loginedUser = useSelector(state => state.auth.loginedUser)
    const navigate = useNavigate()

    const onLogout = () => {
        localStorage.removeItem('loginedUser')
        dispatch(authActions.ON_LOGOUT())
    }

    const { fullname } = loginedUser || {}
    return (
            <div className="d-flex justify-content-between p-4 align-items-center fst-italic fs-5">
                <div className='d-flex gap-3'>
                    <div className='btn navbar-selected' onClick={()=>navigate("/")}>Home</div>
                    <div className='btn' onClick={()=>navigate("/shop")}>Shop</div>
                </div>
                <p className='m-0 fst-italic fs-3'>BOUTIQUE</p>
                <div className='d-flex gap-3 fst-italic fs-5'>
                    <div className='btn d-flex gap-1 align-items-center' onClick={()=>navigate("/cart")}><ShoppingCart size={20} color={'gray'} /><span>Cart</span></div>
                    {
                        !!loginedUser && (
                            <>
                                <div className='d-flex justify-content-center align-items-center'><User size={20} color={'gray'} /><span>{fullname}</span><ChevronDown size={20} color={"black"} /></div>
                                <div className='btn d-flex gap-1 align-items-center' onClick={onLogout}><span>( Logout )</span></div>
                            </>
                        )
                    }
                    {
                        !loginedUser && (
                            <div className='btn d-flex gap-1 align-items-center' onClick={()=>navigate("/login")}><User size={20} color={'gray'} /><span>Login</span></div>
                        )
                    }
                </div>
            </div>
    )
}

export default Navbar