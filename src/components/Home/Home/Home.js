import React from 'react';
import Clients from '../Clients/Clients';
import ContactUs from '../ContactUs/ContactUs';
import Events from '../Events/Events';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Header></Header>
            <Services></Services>
            <Events></Events>
            <Testimonials></Testimonials>
            <Clients></Clients>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;