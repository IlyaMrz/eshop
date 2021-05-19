import React from 'react';
import { CartItemContainer, ImageContainer, 
    ItemDetails } from './cart-item.styles';

export const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <ImageContainer src={imageUrl} alt='item' />
        <ItemDetails>
            <span>{name}</span>
            <span>{quantity} x ${price}</span>
        </ItemDetails>   
    </CartItemContainer>
)

export default CartItem;