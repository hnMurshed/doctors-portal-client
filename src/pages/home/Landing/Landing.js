import React from 'react';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import { ClockIcon } from '@heroicons/react/outline';
import LandingCard from '../LandingCard/LandingCard';
import { } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { } from 'react-icons/fa';
import { } from 'react-icons/hi';
// icons
import clock from '../../../assets/icons/clock.svg';
import pinLocation from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const shadow = {
    boxShadow: '0 -25px 50px 0px white'
}

const Landing = () => {
    return (
        <div style={shadow} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5'>
            <LandingCard img={clock} bgStyle='bg-gradient-to-l from-primary to-secondary'>
                <div>
                    <h5 className='text-[20px] font-bold'>Opening Hours</h5>
                    <p>We are available from 6:00 am to 10:00 pm</p>
                </div>
            </LandingCard>
            <LandingCard img={pinLocation} bgStyle='bg-accent'>
                <div>
                    <h5 className='text-[20px] font-bold'>Visit our location</h5>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </LandingCard>
            <LandingCard img={phone} bgStyle='bg-gradient-to-l from-primary to-secondary'>
                <div>
                    <h5 className='text-[20px] font-bold'>Contact us now</h5>
                    <p>+000 123 456789</p>
                </div>
            </LandingCard>
        </div>
    );
};

export default Landing;