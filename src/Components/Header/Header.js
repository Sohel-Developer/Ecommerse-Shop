import React from 'react';
import './Header.css'
import Logo from'../../images/Logo.svg'
const Header = () => {
    return (
        <div className='header'>
            <nav className=' container nav-container'>
                <div className="nav">
                    <img  src={Logo} alt=""  />
                </div>
                <div className="nav-item">
                    <a href="/shop">Order</a>
                    <a href="/order">Order Review</a>
                    <a href="/manage">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;