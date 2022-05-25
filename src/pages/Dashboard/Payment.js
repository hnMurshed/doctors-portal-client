import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';

const Payment = () => {
    const { appointmentId } = useParams();
    const { data: appointment, isLoading } = useQuery('booking', () => fetch(`http://localhost:5000/booking/${appointmentId}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    }).then(res => res.json()));
    const {patient, treatment, appointmentDate, slot } = appointment;

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h4 className='text-2xl'>Hello, <span>{patient}</span></h4>
                    <h2 class="card-title text-secondary">Please pay for {treatment}</h2>
                    <p>Your appointment is on <span className='text-purple-500 font-bold'>{appointmentDate}</span> at <span>{slot}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Payment;