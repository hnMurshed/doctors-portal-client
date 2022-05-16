import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ServiceAppointment from '../ServiceAppointment/ServiceAppointment';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <section className='px-12 pt-4 pb-36'>
            <h4 className='text-[22px] capitalize text-secondary text-center mb-24'>Available Appointments on {format(date, 'PP')}: {services.length}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceAppointment
                        key={service._id}
                        service={service}
                    ></ServiceAppointment>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;