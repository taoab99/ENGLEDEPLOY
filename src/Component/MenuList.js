import React from 'react'
import {
    Link
} from "react-router-dom";

function MenuList(props) {
    return (
        <nav className="navbar navbar-expand-sm justify-content-end h-100">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white" >TRANG CHỦ</Link>
                </li>

                <li className="nav-item">
                    <Link to="/SHOP" className="nav-link text-white" >SẢN PHẨM</Link>
                </li>
                <li className="nav-item">
                    <Link to="/CONTACT" className="nav-link text-white" >LIÊN HỆ</Link>
                </li>
                <li className="nav-item">
                    <Link to="/ACCOUNT" className="nav-link text-white" > TÀI KHOẢN </Link>
                </li>
                <li className="nav-item header-a">
                    <Link to="/Cart" className="nav-link text-white" >GIỎ HÀNG</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MenuList

