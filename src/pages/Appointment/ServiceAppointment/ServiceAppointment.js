import React from 'react';

const ServiceAppointment = ({ service, setSelectedService }) => {
    const { name, slots } = service;
    return (
        <div className='text-center flex flex-col gap-3 shadow-md rounded-xl py-10'>
            <h4 className='text-[20px] font-semibold capitalize text-secondary'>{name}</h4>
            <p>{slots.length ? <span>{slots[0]}</span>: <span className='text-red-300'>No schedule today</span>}</p>
            <p className='uppercase'>{slots.length ? slots.length + ' spaces available' : <span className='text-red-300'>No space available</span>}</p>
            <div>
                <label
                    onClick={ () => setSelectedService(service)}
                    htmlFor="booking-modal"
                    className='modal-button btn bg-gradient-to-l hover:bg-gradient-to-r from-secondary to-primary text-white border-0'
                    disabled={!slots.length}
                >
                    <span className='uppercase'>Book appointment</span>
                </label>
                
            </div>
        </div>
    );
};

export default ServiceAppointment;