import React from 'react';
import './style.css';
import CollectionItems from './collection/collectionItems';

function collection(){

    return (
        <div className="featured">
            <h2 className="featured__title">EXCLUSIVELY FROM CUSTOMWORKS</h2>
            <h2 className="featured__subtitle">Featured Collections</h2>
            <div className="featured__collection">
                <CollectionItems />
            </div>
        </div>
    )
}

export default collection