import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import { supabase } from '../../../db/supabaseClient';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
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


    const handleDelete = async (id) => {
        // console.log(id);

        try {
            await supabase
                .from("services")
                .delete()
                .eq("id", id);

            setServicesData(servicesData.filter((x) => x.id !== id));
        } catch (error) {
            console.log("error", error);
        }

    }

    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-10'>
                <h2 className="text-info mt-3 mb-3" style={{ marginLeft: '105px' }}>Manage Services</h2>

                <Table striped bordered hover style={{ width: "80%", margin: '0 auto' }}>
                    <thead>
                        <tr>
                            <th>Service</th>
                            {/* <th>Author Name</th> */}
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            servicesData.map(service =>
                                <tr>
                                    <td>{service.title}</td>
                                    {/* <td>{service.description}</td> */}
                                    <td>$ {service.price}</td>
                                    <td> <FontAwesomeIcon icon={faEdit} style={{ color: "rgb(70, 221, 70)", fontSize: "25px" }} /> <FontAwesomeIcon onClick={() => handleDelete(service.id)} icon={faTrashAlt} style={{ color: "red", fontSize: "25px", cursor: "pointer" }} /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>


            </div>
        </div>
    );
};

export default ManageServices;