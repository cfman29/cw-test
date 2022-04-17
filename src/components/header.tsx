import React, { useState, useEffect } from 'react';
import './style.css';
import Logo from './img/CW-Logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/material/Button';

function header(){
    return(
        <div className="header">
            <div className="header__prompt">
                <div className="header__prompt__account">
                    <p className="header__prompt__account__up">New to CustomWorks trade site? <b>SIGN UP</b></p>
                    <p className="header__prompt__account__in">Already a trade customer? <b>SING IN</b></p>
                </div>
                <div className="header__prompt__learn">
                    <p>Learn more about <b>TRADE ACCOUNTS</b></p>
                </div>
            </div>
            <div className="header__nav">
                <div className="header__nav__menu">
                    <MenuIcon className="header__nav__menu__icon icons" />
                    <p>MENU</p>
                </div>
                <div className="header__nav__logo">
                    <img src={Logo} alt="Logo" className="header__nav__logo__img" />
                </div>
                <div className="header__nav__icons">
                    <SearchIcon className="header__nav__icons__single header__nav__icons__single__search icons" />
                    <PersonIcon className="header__nav__icons__single header__nav__icons__single__person icons"/>
                    <ShoppingBasketIcon className="header__nav__icons__single header__nav__icons__single__basket icons"/>
                    <LanguageIcon className="header__nav__icons__single header__nav__icons__single__language icons"/>
                </div>
            </div>
            <div className="header__content">
                <h5 className="header__content__title">The Art & Design Gifting Co.</h5>
                <h1 className="header__content__subtitle">Explore our extensive range of gifts and sign up to view trade pricing and order.</h1>
                <div className="header__content__btn">
                    <Button className="header__content__btn__btn" variant="outlined">CREATE A TRADE ACCOUNT</Button>
                </div>
            </div>
        </div>
    )
}
export default header