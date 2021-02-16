import React from 'react';

import { CheckoutPageContainer, CheackoutHeaderContainer,
    HeaderBlockContainer, TotalContainer, TestWarningContainer } from './checkout.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../redux/cart/cart.selectors';
import CheckoutItem from '../Components/checkout-item/checkout-item';
import StripeCheckoutButton from '../Components/stripe-button/stripe-button';


const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheackoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheackoutHeaderContainer>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/> )
        }
        <TotalContainer>
            <span>TOTAL: ${total}</span>
        </TotalContainer>
        <TestWarningContainer>
            Please use the following test card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
        </TestWarningContainer>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps,null)(CheckoutPage);