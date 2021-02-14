import React from 'react';
import CollectionItem from '../Components/collection-item/collection-item';
import './collection.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../redux/shop/shop.selectors';

const CollectionPage = ({collection}) => {
    const { title, items } = collection;
    return(
    <div className='collection-page'>
        <h2 className='titile'>{title.toUpperCase()}</h2>
        <div className='items'>
            {items.map(item => <CollectionItem key={item.id} item={item} />)}
        </div>
    </div>
)};

const mapStateToProps = (state, ownPropsFromRoute) => ({
    collection: selectCollection(ownPropsFromRoute.match.params.collectionID)(state)
});

export default connect(mapStateToProps)(CollectionPage);