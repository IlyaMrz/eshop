import React from 'react';
import CollectionItem from '../Components/collection-item/collection-item';
import { CollectionPageContainer, TitleContainer, ItemsContainer } from './collection.styles';
import { connect } from 'react-redux';
import { selectCollection } from '../redux/shop/shop.selectors';

export const CollectionPage = ({collection}) => {
    const { title, items } = collection;
    return(
    <CollectionPageContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <ItemsContainer>
            {items.map(item => <CollectionItem key={item.id} item={item} />)}
        </ItemsContainer>
    </CollectionPageContainer>
)};

const mapStateToProps = (state, ownPropsFromRoute) => ({
    collection: selectCollection(ownPropsFromRoute.match.params.collectionID)(state)
});

export default connect(mapStateToProps)(CollectionPage);