import React from 'react';
import './style.css'
import SpotlightCards from './spotlight/spotlightCard'

function spotlight(){

    return(
        <div className="spotlight">
            <p className="spotlight__subtitle">IN THE SPOTLIGHT</p>
            <h4 className="spotlight__title">Explore our popular products</h4>
            <SpotlightCards />
        </div>
    )
}

export default spotlight