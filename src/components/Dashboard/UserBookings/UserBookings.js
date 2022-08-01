import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { supabase } from '../../../db/supabaseClient';
import Sidebar from '../Sidebar/Sidebar';
import UserBookingCard from '../UserBookingCard/UserBookingCard';

const UserBooking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userBookings, setUserBookings] = useState([]);

    const fetchBooking = async () => {
        let { data: userBookings, error } = await supabase
            .from("bookings")
            .select("*")
            .eq('email', loggedInUser?.email)
        if (error) {
            console.log("error", error);
        }
        else {
            console.log("data from supabase", userBookings);
            setUserBookings(userBookings);
        }
    };

    useEffect(() => {

        fetchBooking().catch(console.error);

    }, []);
    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h4 className='mt-3 ml-3'>User Email: {loggedInUser.email}</h4>
                <div className="ml-2 row">
                    {
                        userBookings.map(booking => <UserBookingCard booking={booking}></UserBookingCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default UserBooking;