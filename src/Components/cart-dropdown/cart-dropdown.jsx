import React from 'react';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';
import { connect } from 'react-redux';

const CartDowndrop = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)
const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps, null)(CartDowndrop);