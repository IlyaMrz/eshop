import React from 'react';
import './checkout-item.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, clearItem, decreaseItem, increaseItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
    <div className='checkout-item' >
        <div className="image-container">
            <img src={imageUrl} className="" alt='item' />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <span onClick={()=>decreaseItem(cartItem)} className="arrow">&#10094;</span>
            <span className="value">{quantity}</span>
            <span onClick={()=>increaseItem(cartItem)} className="arrow">&#10095;</span>
        </span>
        <span className="price">$ {price}</span>
        <div onClick={()=>clearItem(cartItem)} className="remove-button">&#10005;</div>
    </div>
)}

const mapDispatchToState = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    decreaseItem: item => dispatch(removeItem(item)),
    increaseItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToState)(CheckoutItem);