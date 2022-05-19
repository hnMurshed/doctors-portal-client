import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ServiceAppointment from '../ServiceAppointment/ServiceAppointment';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <section className='px-12 pt-4 pb-36'>
            <h4 className='text-[22px] capitalize text-secondary text-center mb-24'>Available Appointments on {format(date, 'PP')}: {services.length}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceAppointment
                        key={service._id}
                        service={service}
                        setSelectedService={setSelectedService}
                    ></ServiceAppointment>)
                }
            </div>
            {
                selectedService && <BookingModal
                    selectedService={selectedService}
                    setSelectedService={setSelectedService}
                    date={date}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;