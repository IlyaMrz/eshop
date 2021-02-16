import React from 'react';
import { ShoppingIconContainer, CartIconContainer, ItemCountContainer }
 from './cart-icon.styles.jsx';
import { connect } from 'react-redux';
import  { toggleCartHidden }  from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
    })

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);