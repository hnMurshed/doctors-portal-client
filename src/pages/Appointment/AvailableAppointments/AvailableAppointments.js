import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import ServiceAppointment from '../ServiceAppointment/ServiceAppointment';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query'
import Loading from '../../shared/Loading/Loading';

const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);

    const appointmentDate = format(date, 'PP');

    const {data: services, isLoading, refetch} = useQuery(['available', appointmentDate], () => fetch(`http://localhost:5000/available?appointmentDate=${appointmentDate}`).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?appointmentDate=${appointmentDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [appointmentDate]);
    return (
        <section className='px-12 pt-4 pb-36'>
            <h4 className='text-[22px] capitalize text-secondary text-center mb-24'>Available Appointments on {appointmentDate}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <ServiceAppointment
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
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;