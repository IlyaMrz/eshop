import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_e8TShNv4bqnar9lokQETbn8T';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name='eshop Ltd.'
            shippingAdress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;