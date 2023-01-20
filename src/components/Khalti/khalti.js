import React from 'react';
import KhaltiCheckout from "khalti-checkout-web";
import config from './KhaltiConfig';

export default function Khalti() {
    let checkout = new KhaltiCheckout(config);

  return (
    <div>
      <button onClick={checkout.show({amount: 25000})}>Pay via khalti</button>
    </div>
  )
}
