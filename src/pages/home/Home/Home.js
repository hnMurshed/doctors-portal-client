import React from 'react';
import Appointment from '../Appointment/Appointment';
import Benner from '../Benner/Benner';
import Exceptional from '../Exceptional/Exceptional';
import Landing from '../Landing/Landing';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <Landing></Landing>
            <Services></Services>
            <Exceptional></Exceptional>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;