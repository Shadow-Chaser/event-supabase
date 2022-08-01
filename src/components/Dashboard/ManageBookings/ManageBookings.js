import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ManageBookingCard from '../ManageBookingCard/ManageBookingCard';
import './ManageBookings.css'
import { supabase } from '../../../db/supabaseClient';

const ManageBookings = () => {
    const [bookingsData, setBookingsData] = useState([]);

    const fetchBookings = async () => {
        let { data: bookings, error } = await supabase
            .from("bookings")
            .select("*")
            .order("id", { ascending: false });
        if (error) {
            console.log("error", error);
        }
        else {
            console.log("data from supabase", bookings);
            setBookingsData(bookings);
        }
    };

    useEffect(() => {

        fetchBookings().catch(console.error);

    }, [])

    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 mb-3">
                <h1 className='text-info mt-3 mb-3' style={{ marginLeft: '10px' }}>Manage Bookings</h1>

                <div className="booking-caption row ml-2">
                    <h3 className='cell col-md-2'>Name</h3>
                    <h3 className='cell col-md-4'>Email</h3>
                    <h3 className='cell col-md-3'>Service</h3>
                    <h3 className='cell col-md-1'>Status</h3>
                    <h3 className='cell col-md-1 ml-2'>Action</h3>
                </div>

                {
                    bookingsData.map(booking => <ManageBookingCard booking={booking} ></ManageBookingCard>)
                }


            </div >
        </div>
    );
};

export default ManageBookings;