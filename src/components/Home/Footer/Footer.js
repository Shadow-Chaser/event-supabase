import { faFacebook, faGooglePlus, faGooglePlusG, faInstagram, faLinkedin, faLinkedinIn, faPinterest, faTwitter, faTwitterSquare, faWhatsapp, faYoutube, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEnvelope, faMapMarked, faMapMarkedAlt, faMapMarkerAlt, faMarker, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <section className="footer-container mt-5">
                <div className="subscribe d-flex justify-content-center">
                    <div>
                        <h2 className="mt-4 mr-5 text-center">Subscribe to Our Newsletter</h2>
                        <p className="text-center mr-2"><small>No spam message from us, only give you latest offer which is best for you and your business</small></p>
                        <Form className='mt-2 ml-5' inline>

                            <InputGroup className="mb-2 mr-sm-2">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl type="text" name="email" id="email" placeholder="Email Address" />
                            </InputGroup>
                            <Button type="submit" variant='info' className="mb-2" >Subscribe</Button>
                        </Form>
                    </div>
                </div>

                <div className="row mt-4 mb-4 d-flex justify-content-around">
                    <div className="col-md-2 ml-1">
                        <h3 className=""> Contact US</h3>
                        <p> <small> <FontAwesomeIcon icon={faMapMarkerAlt} /> 134/4 NY, USA </small> </p>
                        <p> <small> <FontAwesomeIcon icon={faEnvelope} /> info@event-fairy.com </small> </p>
                        <p> <small> <FontAwesomeIcon icon={faPhoneAlt} /> (+01) 123 456 7890 </small> </p>

                    </div>

                    <div className="col-md-2 ml-1">
                        <h3 className="">Our Services</h3>
                        <p> <small>Corporate Event</small> </p>
                        <p> <small>Wedding Management</small> </p>
                        <p> <small>Birthday Party</small> </p>
                        <p> <small>Family Event</small> </p>


                    </div>

                    <div className="col-md-2 ml-1">
                        <h3 className="">Recent Events</h3>
                        <p><small>WORLDWIDE CHANNEL EVENT</small></p>
                        <p><small>Los Angeles Times Festival of Books</small></p>
                        <p><small>Washington International Strategic Leadership Conference</small></p>

                    </div>

                    <div className="col-md-2 ml-1">
                        <h3 className="">FAQ</h3>
                        <p> <small>How Can I Set An Event?</small> </p>
                        <p> <small>What Venues Do You Use?</small> </p>
                        <p> <small>Event Catalogue</small> </p>
                        <p> <small>Shipping & Delivery</small> </p>
                        
                    </div>

                </div>
                <div className="social-links text-center">
                    <a target="_blank" rel="noopener noreferrer" href="//www.facebook.com" > <FontAwesomeIcon className='text-white social-icon' icon={faFacebook} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="//www.twitter.com" > <FontAwesomeIcon className='text-white social-icon' icon={faTwitter} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="//www.instragram.com" > <FontAwesomeIcon className='text-white social-icon' icon={faInstagram} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="//www.youtube.com" > <FontAwesomeIcon className='text-white social-icon' icon={faYoutube} /></a>
                    <a target="_blank" rel="noopener noreferrer" href="//www.linkedin.com" > <FontAwesomeIcon className='text-white social-icon' icon={faLinkedin} /></a>
                </div>
                <p className="text-center text-white mt-2 ">Copyright © {new Date().getFullYear()} Event Fairy. All rights reserved. </p>
            </section>
        </>
    );
};

export default Footer;