import React from 'react';
import './style.css';
import Logo from './img/CW-Logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Button from '@mui/material/Button';

function header(){
    return(
        <div className="header">
            <div className="header__nav">
                <MenuIcon className="header__nav__menu icons" />
                <img src={Logo} alt="Logo" className="header__nav__img" />
                <div className="header__nav__icons">
                    <SearchIcon className="header__nav__search icons" />
                    <ShoppingBasketIcon className="header__nav__basket icons"/>
                </div>
            </div>
            <div className="header__content">
                <h5 className="header__content__subtitle"> WHOLESALE MADE EASY</h5>
                <h1 className="header__content__title">We have over 20 years experience creating bespoke products for museums, galleries, zoos, visitor sites and many more</h1>
                {/* <input type="button" className="header__content__btn" value="SIGN UP" /> */}
                <Button className="header__content__btn" variant="outlined">SIGN UP</Button>
            </div>
        </div>
    )
}
export default header