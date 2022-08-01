import { Carousel } from 'react-bootstrap';
import React from 'react';
import event from '../../../images/event.png'
import event2 from '../../../images/event2.jpg'
import event3 from '../../../images/event3.jpg'
import EventCard from '../EventCard/EventCard';
import bookFestival from '../../../images/bookFestival.png'
import conference from '../../../images/conference.png'

import './Events.css'
const eventsData = [
    {
        title: 'WORLDWIDE CHANNEL EVENT',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, similique maiores veniam pariatur tempore.',
        img: event,
        date: '01 March 2021'
    },
    {
        title: 'Corporate Events launches Virtual Svent Studio',
        description: 'Swindon-based event production agency, Corporate Events, has announced the launch of its Virtual Event Studio in August 2020.',
        img: event2,
        date: '02 August 2020'
    },
    {
        title: 'Wedding Event',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam, similique maiores veniam pariatur tempore.',
        img: event3,
        date: '01 April 2011'
    },
    {
        title: 'Los Angeles Times Festival of Books',
        description: 'Los Angeles Times Festival of Books gathers writers, poets, artists, filmmakers, musicians and emerging storytellers. Its features 85,000 book titles, thousands of gift items, an international newsstand, and a coffee shop.',
        img: bookFestival,
        date: '17 April 2021'
    },
    {
        title: 'Washington International Strategic Leadership Conference',
        description: 'GoldenCRI, the center for research and innovation, is located in the United States of America (USA).',
        img: conference,
        date: '16 June 2020'
    }

]

const Events = () => {
    return (
        <div>
            <h2 className="text-center mt-5 mb-5 ">Latest Events We <span className="text-info">Organized</span></h2>
            <div className="d-flex justify-content-center">
                <Carousel style={{ width: "80%" }}>

                    {
                        eventsData.map(event => <Carousel.Item>
                            <img className="d-block w-100 event-image" src={event.img} alt="First slide" />
                            <Carousel.Caption>
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                                <p>{event.date}</p>
                            </Carousel.Caption>
                        </Carousel.Item>)
                    }

                </Carousel>
            </div>

        </div>    

    );
};

export default Events;