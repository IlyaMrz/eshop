import React from 'react';
import CollectionPreview from '../Components/collection-preview/collection-preview.jsx';
import SHOP_DATA from './shop-data.js';

class ShopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collection: SHOP_DATA
        }
    }
    render() {
        const {collection} = this.state;
        return (
            <div className="shop-page">
                {
                collection.map(({id, ...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage;