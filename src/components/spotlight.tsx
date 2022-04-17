import React from 'react';
import './style.css'
import SpotlightCards from './spotlight/spotlightCard'

function spotlight(){
    let width = {windowWidth: window.innerWidth}
    const handleWidth =()=>{
        width = {windowWidth: window.innerWidth}
    }
    
    return(
        <div className="spotlight">
            <div className="spotlight__text">
                <p className="spotlight__text__subtitle">IN THE SPOTLIGHT</p>
                <h4 className="spotlight__text__title">Explore our popular products</h4>
            </div>
            <SpotlightCards />
        </div>
    )
}

export default spotlight