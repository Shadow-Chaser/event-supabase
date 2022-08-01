import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ServiceCard.css'



const ServiceCard = (props) => {
    const { id, title, description, image, price } = props.service;

    const history = useHistory();
    const handleBooking = (serviceId) => {
        const url = `/service/${serviceId}`;
        history.push(url)
    }

    return (
        <Card className='m-3 service-card'>
            {/* <Card.Img variant="top" src={`data:image/png;base64,${props.service.image.img}`} style={{ height: '160px' }} /> */}
            <Card.Img variant="top" src={image} style={{ height: '160px' }} />

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {/* <Card.Text>
                    {description}
                </Card.Text> */}
                {/* <h6>Only in ${price}</h6> */}
                <Button className='card-booking-btn' variant="primary" onClick={() => handleBooking(id)} >Get Details</Button>
            </Card.Body>
        </Card>
    );
};

export default ServiceCard;