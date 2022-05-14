import React from 'react';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import { ClockIcon } from '@heroicons/react/outline';
import LandingCard from '../LandingCard/LandingCard';
import { } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { } from 'react-icons/fa';
import { HiOutlinePhone } from 'react-icons/hi';

const shadow = {
    boxShadow: '0 -25px 50px 0px white'
}

const Landing = () => {
    return (
        <div style={shadow} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5'>
            <LandingCard>
                <div className='mr-5'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='87.645' height='87.645' viewBox='0 0 87.645 87.645'>
                        <g id='clock-outline' transform='translate(6 -9)'>
                            <g id='Layer_2' dataName='Layer 2' transform='translate(-6 9)'>
                                <g id='clock'>
                                    <path id='Path_7197' dataName='Path 7197'
                                        d='M45.822,2A43.822,43.822,0,1,0,89.645,45.822,43.822,43.822,0,0,0,45.822,2Zm0,78.88A35.058,35.058,0,1,1,80.88,45.822,35.058,35.058,0,0,1,45.822,80.88Z'
                                        transform='translate(-2 -2)' fill='#fff' />
                                    <path id='Path_7198' dataName='Path 7198'
                                        d='M32.911,24.529H19.764V11.382a4.382,4.382,0,0,0-8.764,0V28.911a4.382,4.382,0,0,0,4.382,4.382H32.911a4.382,4.382,0,0,0,0-8.764Z'
                                        transform='translate(28.44 14.911)' fill='#fff' />
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div>
                    <h5 className='text-[20px] font-bold'>Opening Hours</h5>
                    <p>We are available from 6:00 am to 10:00 pm</p>
                </div>
            </LandingCard>
            <LandingCard>
                <div className='mr-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="80" viewBox="0 0 56 80">
                        <g id="ic_location_on_48px" transform="translate(-10 -4)">
                            <path id="Path_7199" dataName="Path 7199"
                                d="M38,4A28.005,28.005,0,0,0,10,32c0,21,28,52,28,52S66,53,66,32A28.005,28.005,0,0,0,38,4Zm0,38A10,10,0,1,1,48,32,10,10,0,0,1,38,42Z"
                                transform="translate(0)" fill="#fff" />
                        </g>
                    </svg>
                </div>
                <div>
                    <h5 className='text-[20px] font-bold'>Visit our location</h5>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </LandingCard>
            <LandingCard>
                <div className='mr-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="74.949" height="75.083" viewBox="0 0 74.949 75.083">
                        <g id="phone-call" transform="translate(0.391 1.761)">
                            <path id="Path_7196" dataName="Path 7196"
                                d="M45.274,14.344A16.68,16.68,0,0,1,58.451,27.521M45.274,1A30.024,30.024,0,0,1,71.795,27.488M68.459,54.109V64.117a6.672,6.672,0,0,1-7.273,6.672A66.02,66.02,0,0,1,32.4,60.548,65.052,65.052,0,0,1,12.381,40.532,66.02,66.02,0,0,1,2.139,11.609,6.672,6.672,0,0,1,8.778,4.336H18.786a6.672,6.672,0,0,1,6.672,5.738,42.834,42.834,0,0,0,2.335,9.374,6.672,6.672,0,0,1-1.5,7.039l-4.237,4.237A53.376,53.376,0,0,0,42.071,50.74L46.308,46.5A6.672,6.672,0,0,1,53.347,45a42.834,42.834,0,0,0,9.374,2.335,6.672,6.672,0,0,1,5.738,6.772Z"
                                transform="translate(0 0)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="5" />
                        </g>
                    </svg>
                </div>
                <div>
                    <h5 className='text-[20px] font-bold'>Contact us now</h5>
                    <p>+000 123 456789</p>
                </div>
            </LandingCard>
        </div>
    );
};

export default Landing;