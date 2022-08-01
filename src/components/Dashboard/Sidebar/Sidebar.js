import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCommentDots, faUserPlus, faHome, faCog, faCartArrowDown, faListAlt, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import firebaseConfig from '../../Login/Login/firebase.config';
import firebase from "firebase/app";
import "firebase/auth"
import { supabase } from '../../../db/supabaseClient';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const [isAdmin, setIsAdmin] = useState(false);
    // console.log(isAdmin);
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



    // // google sign-out;
    const handleSignOut = () => {

        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().signOut()
            .then(res => {
                // const signOutUser = {
                //     isSignedIn: false,
                //     name: '',
                //     email: '',
                //     photo: ''
                // }
                // setUser(signOutUser);
                setLoggedInUser({});
                // console.log(res);
            })

            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh", width: '100vw' }}>
            <ul className="list-unstyled">
                <img src={loggedInUser.image} style={{ width: '60px', height: '60px' }} className='rounded-circle m-3' alt="" srcset="" />
                <li>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>

                <div style={{ display: isAdmin ? 'block' : 'none' }}>
                    <li>
                        <Link to="/manageBookings" className="text-white">
                            <FontAwesomeIcon icon={faCartArrowDown} /> <span>Manage Bookings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageServices" className="text-white">
                            <FontAwesomeIcon icon={faCog} /> <span>Manage Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                        </Link>
                    </li>
                </div>

                <div style={{ display: isAdmin ? 'none' : 'block' }}>
                    <li>
                        <Link to="/userBookings" className="text-white">
                            <FontAwesomeIcon icon={faListAlt} /> <span>Your Bookings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addReview" className="text-white">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Add Review</span>
                        </Link>
                    </li>
                </div>

                <Link to="/" onClick={handleSignOut} className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </ul>

        </div>


    );
};

export default Sidebar;