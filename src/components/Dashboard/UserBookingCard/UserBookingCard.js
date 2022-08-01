import React from 'react';
import { Button } from 'react-bootstrap';
import './UserBookingCard.css'

const UserBookingCard = (props) => {
    const { _id, stripePaymentId, email, status, service, bookingDate, bookingTime } = props.booking;
    return (
        <div className='booking-card '>
            <small>Booking Id: {_id}</small> <br />
            <small>Payment Id: {stripePaymentId} </small>
            <h2>{service}</h2>
            <h5>Status: <b>{status}</b> </h5>


        </div>
    );
};

export default UserBookingCard;