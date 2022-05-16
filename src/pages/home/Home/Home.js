import React from 'react';
import Contact from '../Contact/Contact';
import Appointment from '../Appointment/Appointment';
import Benner from '../Benner/Benner';
import Exceptional from '../Exceptional/Exceptional';
import Landing from '../Landing/Landing';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import ButtonPrimarySecondary from '../../shared/ButtonPrimarySecondary/ButtonPrimarySecondary';

const bennerChildren = <>
    <h1 className="text-5xl font-bold capitalize">Your new smile starts here</h1>
    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    <ButtonPrimarySecondary>Get Started</ButtonPrimarySecondary>
</>

const Home = () => {
    return (
        <div>
            <Benner>{bennerChildren}</Benner>
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