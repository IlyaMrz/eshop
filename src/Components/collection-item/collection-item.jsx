import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { ItemContainer, CustomButtonContainer, 
    ImageContainer, CollectionFooterContainer,
    NameContainer, PriceContainer } from './collection-item.styles'; 

export const CollectionItem = ({ item, addItem}) => {
    const { name, price, imageUrl } = item;
    return (
    <ItemContainer>
        <ImageContainer imageUrl={imageUrl}/>
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <CustomButtonContainer onClick={() => addItem(item)} inverted>
            Add to cart
        </CustomButtonContainer>
    </ItemContainer>
)}

const mapToDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)) 
})

export default connect(null, mapToDispatchToProps)(CollectionItem);