import React from 'react';
import './style.css'
import ProductCards from './prods/prodCards'

function products(){
    return(
        <div className="product">
            <h2 className="product__title">A CURATION BY US</h2>
            <h1 className="product__subtitle">Explore our products</h1>
            <ProductCards />
            <div className="product__large">
                <span className="product__large__line" />
                <p>NEW TO CUSTOM WORKS</p>
                <h4>Discover our new products</h4>
            </div>
        </div>
    )
}

export default products