import React from 'react';

// import { ReactComponent as Logo } from '../../assets/crown.svg';
import StripeCheckout from 'react-stripe-checkout';

const StripeBtn = ({ price }) => {
  const priceForStripe = price * 100;
  const pubKey =
    'pk_test_51J08iVFMl2Z2BhW7bB6QI62Gd9AidWI6GCWJ2ZpdoKDHuDgQubnqIlnFiAOAmyI5xlKBazsrzjDAMEStegVbCEbe00FTPejNMl';

  const onToken = (token) => {
    console.log(token);
    alert('Payment success');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='PREMIUM Clothes'
      billingAddress
      shippingAddress
      image='./crown.svg'
      description={`Total price is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={pubKey}
    />
  );
};

export default StripeBtn;
