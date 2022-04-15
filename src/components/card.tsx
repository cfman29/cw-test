import React from 'react';
import './style.css';
import CardBg from './img/CardBg.png';
import LogoSmall from './img/CW-Logo-small.png';
import { Button } from '@mui/material';

function card(){
    return(
        <div className="card">
            <div className="card__text">
                <div className="card__text__left">
                    <span className="card__text__left__line"></span>
                    <div className="card__text__left__title">
                        <img src={LogoSmall} className="card__text__left__title__logo" alt="Small Logo" />
                        <h3 className="card__text__left__title__text">Our Bespoke Service</h3>
                    </div>
                </div>
                <div className="card__text__right">
                    <p className="card__text__right__text">For over 20 years we have been at the forefront of creating bespoke products for museums, galleries, zoos, visitor sites and many more. Find out more about our experience, process and the possibilities.</p>
                    <Button className="card__text__right__btn" variant="outlined">VIEW BESPOKE SERVICE</Button>
                </div>
            </div>
            <div className="card__img"><img src="http://placekitten.com/g/600" className="card__img__img" alt="Notebook" /></div>
            {/* <div className="card__img"><img src={CardBg} className="card__img__img" alt="Notebook" /></div> */}
        </div>
    )
}

export default card