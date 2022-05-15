import React from 'react';

const Testimonial = ({testimonial}) => {
    const { name, address, img, description } = testimonial;
    return (
        <div className='p-8 rounded-lg shadow-xl'>
            <p>{description}</p>
            <div className='flex items-center mt-9'>
                <img src={img} alt={name} />
                <div className='ml-2 text-accent'>
                    <h5 className='text-[20px font-b] font-semibold'>{name}</h5>
                    <span>{address}</span>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;