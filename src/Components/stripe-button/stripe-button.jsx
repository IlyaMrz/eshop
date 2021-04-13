import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_e8TShNv4bqnar9lokQETbn8T';
    // const onToken = token => {
    //     axios({
    //         url: 'payment',
    //         method: 'post',
    //         data: {
    //             amount: priceForStripe,
    //             token
    //         }
    //     }).then(response => {
    //         alert('Payment succesful')
    //     }).catch(error => {
    //         console.log("Payment error:", JSON.parse(error));
    //         alert('There was an issue with your payment. Please sure you use the provided credit.')
    //     })
    // }
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