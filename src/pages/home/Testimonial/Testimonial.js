import React from 'react';

const Testimonial = ({ review }) => {
    const { name, location, img, comment } = review;
    return (
        <div className='p-8 rounded-lg shadow-xl'>
            <p>{comment}</p>
            <div className='flex items-center mt-9'>
                <div class="avatar">
                    <div class="w-[75px] rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={img} alt={name} />
                    </div>
                </div>
                <div className='ml-2 text-accent'>
                    <h5 className='text-[20px font-b] font-semibold'>{name}</h5>
                    <span>{location}</span>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;