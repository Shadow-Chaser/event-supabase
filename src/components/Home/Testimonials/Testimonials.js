import React, { useEffect, useState } from 'react';
import { supabase } from '../../../db/supabaseClient';
import Review from '../Review/Review';


const Testimonials = () => {
    const [testimonialsData, setTestimonialsData] = useState([]);

    const fetchReviews = async () => {
        let { data: testimonialsData, error } = await supabase
            .from("reviews")
            .select("*")
            .order("id", { ascending: false });
        if (error) {
            console.log("error", error);
        }
        else {
            console.log("data from supabase", testimonialsData);
            setTestimonialsData(testimonialsData);
        }
    };

    useEffect(() => {

        fetchReviews().catch(console.error);

    }, [])

    return (
        <div>
            <h2 className="text-center mt-5 mb-5 text-info">Testimonials</h2>
            <div className="row d-flex justify-content-center">
                {
                    testimonialsData.map(review => <Review review={review} ></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonials;