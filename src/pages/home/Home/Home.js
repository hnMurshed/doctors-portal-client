import React from 'react';
import Benner from '../Benner/Benner';
import Landing from '../Landing/Landing';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
            <Landing></Landing>
            <Services></Services>
        </div>
    );
};

export default Home;