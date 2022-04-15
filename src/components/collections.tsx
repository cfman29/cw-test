import React from 'react';
import './style.css';
import CollectionItems from './collection/collectionItems';

function collection(){

    return (
        <div className="featured">
            <div className="featured__text">
                <h2 className="featured__text__subtitle subtitle">EXCLUSIVELY FROM CUSTOMWORKS</h2>
                <h2 className="featured__text__title title">Featured Collections</h2>
                <p className="featured__text__view">VIEW ALL</p>
            </div>
            <CollectionItems />
        </div>
    )
}

export default collection