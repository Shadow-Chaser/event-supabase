import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { supabase } from '../../../db/supabaseClient';
import Sidebar from '../Sidebar/Sidebar';
const BASE_URL = "https://onamztluetpchimnfxpe.supabase.co/storage/v1/object/public/"

const AddReview = () => {
    const [reviewData, setReviewData] = useState({})

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
                setReviewData({ "image": BASE_URL + `${data.Key}` })
            }

        }

    }

    const handleBlur = e => {
        const newData = { ...reviewData };
        newData[e.target.name] = e.target.value;
        setReviewData(newData);
    }
    // console.log(reviewData);

    const handleSubmit = async e => {
        e.preventDefault()

        let { data, error } = await supabase
            .from("reviews")
            .insert(reviewData)
            .single();
        if (error) {
            console.log(error);
        }
        else {
            alert("Review Added Successfully!");
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
                        <h1 className='mt-2 mb-3'>Add a Review to Inspire Us</h1>

                        <Form.Group controlId="file">
                            <Form.Label>Image</Form.Label>
                            <Form.Control onChange={handleFileChange} type="file" name='' placeholder="Upload image" />
                        </Form.Group>

                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onBlur={handleBlur} type="text" name='name' placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control onBlur={handleBlur} type="text" name='address' placeholder="Enter address" />
                        </Form.Group>

                        <Form.Group controlId="review">
                            <Form.Label>Review</Form.Label>
                            <Form.Control onBlur={handleBlur} as="textarea" type="text" name='review' placeholder="Enter your message" />
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

export default AddReview;