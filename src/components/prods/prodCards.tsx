import React from 'react'
import prods from './products.json'

export const productCards =()=>{
    return(
        <div className="product__card">
            { prods.map(prod =>{
                return(
                    // <div className="product__card__single" style={{ backgroundImage: `url(./${prod.image}.png)` }} key={prod.name}>
                    <div className="product__card__single" style={{ background: 'grey'}} key={prod.name}>
                        <p>{prod.name}</p>
                    </div>
            )})}
        </div>
    )
}

export default productCards