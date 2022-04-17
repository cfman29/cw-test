import React, { useState, useEffect } from 'react'
import Carousel from "react-multi-carousel";
import cards from './spotlight.json'
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';

export const spotlightCards =()=>{

    const [screenSize, getDimension] = useState({
        width: window.innerWidth
    });
    const setDimension = () => {
        getDimension({
            width: window.innerWidth
        })
    }
    
    useEffect(() => {
        window.addEventListener('resize', setDimension);
        return(() => {
            window.removeEventListener('resize', setDimension);
            console.log(screenSize)
        })
    }, [screenSize])

    return(
        <div className="spotlight__card">
            {cards.map(card =>{
                return(
                    <div className="spotlight__card__single" key={card.name}>
                        <img src="http://placekitten.com/300" alt={card.name} />
                        <p className="spotlight__card__single__category">{card.category}</p>
                        <h3 className="spotlight__card__single__title">{card.name}</h3>
                        <p className="spotlight__card__single__package">Pack of {card.size}</p>
                        <p className="spotlight__card__single__price">Suggested retail £{card.price} each</p>
                        <a className="spotlight__card__single__url" href={card.url}>SEE THE TRADE PRICE</a>
                        <FavoriteIcon className="spotlight__card__single__fav" />
                    </div>
                )
            })}
        </div>
    )
}

export default spotlightCards