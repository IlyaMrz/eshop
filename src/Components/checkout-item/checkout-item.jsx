import React from 'react';
import { CheckoutItemContainer, ImageContContainer,
    TextContainer, QuantityContainer, RemoveButtonContainer } from './checkout-item.styles';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, clearItem, decreaseItem, increaseItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
    <CheckoutItemContainer>
        <ImageContContainer>
            <img src={imageUrl} className="" alt='item' />
        </ImageContContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
            <div onClick={()=>decreaseItem(cartItem)}>&#10094;</div>
            <span>{quantity}</span>
            <div onClick={()=>increaseItem(cartItem)}>&#10095;</div>
        </QuantityContainer>
        <TextContainer>$ {price} </TextContainer>
        <RemoveButtonContainer onClick={()=>clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
)}

const mapDispatchToState = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    decreaseItem: item => dispatch(removeItem(item)),
    increaseItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToState)(CheckoutItem);