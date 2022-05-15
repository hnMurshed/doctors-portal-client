import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
// images
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';

const testimonialsData = [
    {
        _id: 1,
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: 'Winson Herry',
        address: 'New York',
        img: people1
    },
    {
        _id: 3,
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: 'Jefrin Maria',
        address: 'California',
        img: people2
    },
    {
        _id: 3,
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: 'Leo Zoe',
        address: 'Washington',
        img: people3
    },
]

const Testimonials = () => {
    return (
        <div className='custom-container pt-20 pb-32'>
            <div className='flex items-center justify-between'>
                <div>
                    <h5 className='text-start capitalize text-secondary text-[20px] font-bold mb-2'>Appoinment</h5>
                    <h1 className="text-[36px] capitalize">Exceptional Dental Care, on Your Terms</h1>
                </div>
                <img src={quote} alt="Quote" className='w-[192px]' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-20'>
                {
                    testimonialsData.map(testimonial => <Testimonial
                        key={testimonial._id}
                        testimonial={testimonial}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;