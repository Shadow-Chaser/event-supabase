import { Button } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Navigation from '../../Home/Navigation/Navigation';
import './Checkout.css'
import { supabase } from '../../../db/supabaseClient';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookingData, setBookingData] = useState(null);
    const [isBookingConfirm, setIsBookingConfirm] = useState(false)
    // console.log(bookingData);

    const { serviceId } = useParams();
    const [service, setService] = useState();
    const { title, price, description } = service || {};


    const fetchService = async () => {
        let { data: service, error } = await supabase
            .from("services")
            .select("*")
            .eq('id', serviceId)
        if (error) {
            console.log("error", error);
        }
        else {
            console.log("data from supabase", service);
            setService(service[0]);
        }
    };

    useEffect(() => {

        fetchService().catch(console.error);

    }, [serviceId]);

    const handleSubmit = () => {
        const newBookingData = {
            ...loggedInUser,
            service: title,
            price: price,
            status: 'Pending',
            bookingDate: new Date().toDateString('dd/mm/yyyy'),
            bookingTime: new Date().toTimeString()
        }
        setBookingData(newBookingData);
    }

    const handlePayment = (paymentId) => {
        console.log(paymentId);
        const newBookingData = {
            ...bookingData,
            stripePaymentId: paymentId
        }
        setBookingData(newBookingData);
        setIsBookingConfirm(true)
    }
    const handleBooking = async (e) => {
        console.log(bookingData);
        e.preventDefault()

        let { data, error } = await supabase
            .from("bookings")
            .insert(bookingData)
            .single();
        if (error) {
            console.log(error);
        }
        else {
            alert("Booking Added Successfully!");
        }

    }

    return (
        <>
            <Navigation></Navigation>
            <div className="d-flex justify-content-center">

                <div >
                    {!bookingData && <div className='service-details'>
                        <h1>Service Details</h1>
                        <h3>Service: {title}</h3>
                        <h5>Details: {description}</h5>
                        <h4>Service Charge: ${price}</h4>
                        <h3>Name: {loggedInUser.name}</h3>
                        <h3>Email: {loggedInUser.email}</h3>
                        <Button variant="info" onClick={() => handleSubmit()}  >Get Booking</Button>
                    </div>
                    }
                    {bookingData && <div>
                        <ProcessPayment handlePayment={handlePayment} price={price} ></ProcessPayment>
                    </div>
                    }
                    {
                        bookingData && <Button onClick={handleBooking} disabled={isBookingConfirm === false}> Confirm Booking </Button>
                    }
                </div>

            </div>
        </>
    );
};

export default Checkout;