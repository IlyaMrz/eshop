import React, { useRef } from 'react';
import CartItem from '../cart-item/cart-item';
import { CartDowndropContainer, CartItemsContainer, 
    EmptyMessageContainer, CartDropdownButton } from './cart-dropdown.styles';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import useOutsideClick from '../custom-hooks/useOutsideClick';

const CartDowndrop = ({cartItems, history, dispatch, hidden}) =>{ 
    const ref = useRef();
    useOutsideClick(ref, () => {
        !hidden && dispatch(toggleCartHidden())
    })
    return (
        <CartDowndropContainer ref={ref}>
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
)}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: ()=>dispatch(toggleCartHidden())
// })

export default withRouter(connect(mapStateToProps)(CartDowndrop));