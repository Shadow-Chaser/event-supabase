import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { supabase } from '../../../db/supabaseClient';
import Sidebar from '../Sidebar/Sidebar';
import './AddAdmin.css'


const AddAdmin = () => {
    const [admin, setAdmin] = useState({})
    const [isEmailValid, setIsEmailValid] = useState(true)

    const handleChange = e => {
        let checkValidity = true;

        if (e.target.name === 'email') {
            checkValidity = /(.+)@(.+){2,}\.(.+){2,}/.test(e.target.value)
        }

        if (checkValidity) {
            const newAdmin = { ...admin };
            newAdmin[e.target.name] = e.target.value;
            setIsEmailValid(true);
            setAdmin(newAdmin);
        }
        else {
            setIsEmailValid(false)
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let { data, error } = await supabase
            .from("admins")
            .insert(admin)
            .single();
        if (error) {
            console.log(error);
        }
        else {
            alert("Admin Added Successfully!");
        }

    }


    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 ">
                <div className='form-container'>
                    <h1 className='mb-5 text-info'>Add an Admin</h1>
                    <Form onSubmit={handleSubmit} className='mb-2' inline>
                        <InputGroup className="mb-2 mr-sm-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl onChange={handleChange} type="text" name="email" id="email" placeholder="Email Address" />
                        </InputGroup>

                        <Button type="submit" variant='info' className="mb-2" disabled={!isEmailValid} >Make Admin</Button>
                    </Form>
                    {
                        <p style={{ color: 'red', display: isEmailValid ? 'none' : 'block' }}>🚫 This Email Address is not a valid Email Address</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;