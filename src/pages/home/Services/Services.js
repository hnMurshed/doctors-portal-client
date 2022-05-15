import React from 'react';
import Service from '../Service/Service';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            img: fluoride,
            name: 'Fluoride Treatment',
            description: 'Fluoride Treatment is effective to improve teeth health and reduce the risk of cavities'
        },
        {
            _id: 2,
            img: cavity,
            name: 'Cavity Filling',
            description: 'A cavity filling treats tooth decay. Having a filling can prevent further damage, reduce the risks of pain and infection'
        },
        {
            _id: 3,
            img: whitening,
            name: 'Teeth Whitening',
            description: 'Teeth Whitening can effectively make teeth white and bright, give you glowing smile.'
        },
    ]
    return (
        <div className='py-20 lg:py-[120px] px-5'>
            <h5 className='text-center uppercase text-secondary text-[20px] font-bold'>Our Services</h5>
            <h3 className='text-center capitalize text-accent text-[36px] mb-16'>Services we provide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;