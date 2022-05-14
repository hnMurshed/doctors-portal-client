import React from 'react';

const Service = ({service}) => {
    const { img, name, description } = service;
    return (
        <div className='text-center p-11 shadow-xl rounded-xl'>
            <img src={img} alt={name} className='mb-8 mx-auto' />
            <h4 className='capitalize text-[20px] text-accent'>{name}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Service;