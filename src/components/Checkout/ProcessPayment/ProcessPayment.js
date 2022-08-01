import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentSplitCard from './PaymentSplitForm';

const stripePromise = loadStripe('pk_test_51IhBXpFUbUyb7QjKZ5VdrQboOvyINjKAblIMIbIzpNKcWjDztaOpuYGHUiawzQpebuNlEtDVzKF1BOCw9pecMIzi00vTGboIyl');

const ProcessPayment = ({ handlePayment, price }) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentSplitCard handlePayment={handlePayment} price={price} ></PaymentSplitCard>
        </Elements>
    );
};
export default ProcessPayment;