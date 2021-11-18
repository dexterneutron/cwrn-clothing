import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Jx9vuIGo1sM6nYojO3lIrMecHqS1UjHjxhyt9imvaiVsPDfgqIpUWUG6htA9bwasSvQ0IbOeZoxDB73qtZhJwrX000n3IKUbk'
    const onToken= token =>{

        console.log(token);
        alert('Payment Successful')
    }
    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;