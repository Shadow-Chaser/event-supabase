import React, { useMemo, useState } from "react";
import './PaymentSplitForm.css'
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";



const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize: '16px',
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const PaymentSplitCard = ({ handlePayment, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentId, setPaymentId] = useState(null);

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        // console.log("[error,PaymentMethod]", payload);
        setPaymentError()
        handlePayment(payload.paymentMethod.id)
        setPaymentId(payload.paymentMethod.id);
        // console.log(payload.paymentMethod.id);
        console.log(payload);

    };

    // console.log(paymentId);
    return (
        <div>
            <form className='form-container' onSubmit={handleSubmit}>
                <label className='payment-form-label'>
                    Card number
        <CardNumberElement className='payment-form-input'
                        options={options}
                        onReady={() => {
                            // console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            // console.log("CardNumberElement [change]", event);
                            setPaymentError(event.error.message)
                            // console.log(event.error.message);

                        }}
                        onBlur={() => {
                            // console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            // console.log("CardNumberElement [focus]");
                        }}
                    />
                </label>
                <br />
                <label className='payment-form-label'>
                    Expiration date
        <CardExpiryElement className='payment-form-input'
                        options={options}
                        onReady={() => {
                            // console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            // console.log("CardNumberElement [change]", event);
                            setPaymentError(event.error.message)

                        }}
                        onBlur={(event) => {
                            // console.log("CardNumberElement [blur]");
                            // setPaymentError(event.error.message)
                        }}
                        onFocus={() => {
                            // console.log("CardNumberElement [focus]");
                        }}
                    />
                </label >
                <br />
                <label className='payment-form-label'>
                    CVC
        <CardCvcElement className='payment-form-input'
                        options={options}
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            // console.log("CardNumberElement [change]", event);
                            setPaymentError(event.error.message)

                        }}
                    onBlur={() => {
                            // console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            // console.log("CardNumberElement [focus]");
                        }}
                    />
                </label>
                <br />
                <p>Your service will charge ${price}</p>
                <Button className='payment-form-btn' variant='info' type="submit" disabled={!stripe}>Pay</Button>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {
                paymentId && <p style={{ color: 'green' }}>Your payment was successful.</p>
            }
        </div>
    );
};

export default PaymentSplitCard;