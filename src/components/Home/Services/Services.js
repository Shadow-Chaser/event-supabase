import React, { useEffect, useState } from 'react';
import { supabase } from '../../../db/supabaseClient';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [servicesData, setServicesData] = useState([]);

    const fetchServices = async () => {
        let { data: services, error } = await supabase
            .from("services")
            .select("*")
            .order("id", { ascending: false });
        if (error) {
            console.log("error", error);
        }
        else {
            console.log("data from supabase", services);
            setServicesData(services);
        }
    };

    useEffect(() => {

        fetchServices().catch(console.error);

    }, [])
    // console.log(servicesData);
    return (
        <div className=''>
            <h2 className="text-center mt-5 mb-5">Services We <span className="text-info">Provide</span> </h2>
            <div className="row d-flex justify-content-center">
                {
                    servicesData.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;