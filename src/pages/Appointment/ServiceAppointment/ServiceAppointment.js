import React from 'react';
import ButtonPrimarySecondary from '../../shared/ButtonPrimarySecondary/ButtonPrimarySecondary';

const ServiceAppointment = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className='text-center flex flex-col gap-3 shadow-md rounded-xl py-10'>
            <h4 className='text-[20px] font-semibold capitalize text-secondary'>{name}</h4>
            <p>{slots[0]}</p>
            <p className='uppercase'>{slots.length} spaces available</p>
            <div>
                <ButtonPrimarySecondary>
                    <span className='uppercase'>Book appointment</span>
                </ButtonPrimarySecondary>
            </div>
        </div>
    );
};

export default ServiceAppointment;