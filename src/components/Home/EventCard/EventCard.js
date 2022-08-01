import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = (props) => {
    const { title, description, img, date } = props.event;
    return (
        <Card className="bg-dark text-white m-3">
            <Card.Img src={img} alt="Card image" style={{ height: '350px' }} />
            <Card.ImgOverlay>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>{date}</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};

export default EventCard;