import React from 'react';
import './style.css'
import ProductCards from './prods/prodCards'

function products(){
    return(
        <div className="product">
            <div className="product__text">
                <h2 className="product__text__subtitle subtitle">A CURATION BY US</h2>
                <h1 className="product__text__title title">Explore our products</h1>
            </div>
            <ProductCards />
        </div>
    )
}

export default products