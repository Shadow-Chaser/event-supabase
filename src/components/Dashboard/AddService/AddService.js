import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { supabase } from '../../../db/supabaseClient';
import Sidebar from '../Sidebar/Sidebar';
const BASE_URL = "https://onamztluetpchimnfxpe.supabase.co/storage/v1/object/public/"

const AddService = () => {
    const [serviceData, setServiceData] = useState({})

    const handleFileChange = async e => {
        const newFile = await e.target.files[0];
        console.log(newFile);
        if (newFile) {
            const { data, error } = await supabase
                .storage
                .from('images')
                .upload(`public/${newFile.name}`, newFile)


            if (error) console.log("error", error);
            else {
                setServiceData({ "image": BASE_URL + `${data.Key}` })
            }

        }
    }

    const handleBlur = e => {
        const newData = { ...serviceData };
        newData[e.target.name] = e.target.value;
        setServiceData(newData);
    }

    const handleSubmit = async e => {
        e.preventDefault()
        console.log(serviceData);

        let { data, error } = await supabase
            .from("services")
            .insert(serviceData)
            .single();
        if (error) {
            console.log(error);
        }
        else {
            alert("Service Added Successfully!");
        }

    }


    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-10">
                <div className='d-flex justify-content-center'>
                    <Form className='w-75 mt-5' onSubmit={handleSubmit}>
                        <h1 className="mb-4 text-info">Add a new Service</h1>

                        <Form.Group controlId="file">
                            <Form.Label>Image</Form.Label>
                            <Form.Control onChange={handleFileChange} type="file" name='' placeholder="Upload image" />
                        </Form.Group>

                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control onBlur={handleBlur} type="text" name='title' placeholder="Enter title" />
                        </Form.Group>


                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onBlur={handleBlur} as="textarea" type="text" name='description' placeholder="Enter your message" />
                        </Form.Group>

                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control onBlur={handleBlur} type="number" name='price' placeholder="Enter price in dollar" />
                        </Form.Group>

                        <div className="d-flex justify-content-center">
                            <Button className='' variant="primary" type="submit">Submit</Button>
                        </div>

                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddService;