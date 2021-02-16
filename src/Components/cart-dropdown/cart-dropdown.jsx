import React from 'react';
import CartItem from '../cart-item/cart-item';
import { CartDowndropContainer, CartItemsContainer, 
    EmptyMessageContainer, CartDropdownButton } from './cart-dropdown.styles';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDowndrop = ({cartItems, history, dispatch}) => (
    <CartDowndropContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={()=>{
            history.push('/checkout'); 
            dispatch(toggleCartHidden())
            }}>
                GO TO CHECKOUT</CartDropdownButton>
    </CartDowndropContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: ()=>dispatch(toggleCartHidden())
// })

export default withRouter(connect(mapStateToProps)(CartDowndrop));