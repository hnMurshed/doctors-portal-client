import React from 'react';
import Contact from '../Contact/Contact';
import Appointment from '../Appointment/Appointment';
import Benner from '../Benner/Benner';
import Exceptional from '../Exceptional/Exceptional';
import Landing from '../Landing/Landing';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <Landing></Landing>
            <Services></Services>
            <Exceptional></Exceptional>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;