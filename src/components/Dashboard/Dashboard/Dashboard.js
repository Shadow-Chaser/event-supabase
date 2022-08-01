import React, { useContext, useEffect, useState } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Router } from 'react-router';
import { UserContext } from '../../../App';
import { supabase } from '../../../db/supabaseClient';
import ManageBookings from '../ManageBookings/ManageBookings';
import UserBookings from '../UserBookings/UserBookings';


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [isAdmin, setIsAdmin] = useState(false);

    const fetchAdmin = async () => {
        let { data: admin, error } = await supabase
            .from("admins")
            .select("*")
            .eq("email", loggedInUser.email)
        if (error) {
            console.log("error", error);
        }
        else {
            console.log("data from supabase", admin);
            if (admin.length >= 1) {
                console.log("true");
                setIsAdmin(true);
            }

        }
    };

    useEffect(() => {

        fetchAdmin().catch(console.error);

    }, [])
    return (
        <div className="container-fluid ">

            {
                isAdmin ? <ManageBookings></ManageBookings> : <UserBookings></UserBookings>
            }

        </div>
    );
};

export default Dashboard;