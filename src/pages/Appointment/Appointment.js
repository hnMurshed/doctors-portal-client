import React, { useState } from 'react';
import Benner from '../home/Benner/Benner';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Appointment.css';

const Appointment = () => {
    const [date, setDate] = useState(new Date())

    const bennerChildren = <>
        <DayPicker
            mode='single'
            selected={date}
            onSelect={setDate}
            className='day-picker flex justify-center'
        />
    </>
    return (
        <div>
            <Benner>{bennerChildren}</Benner>
            <AvailableAppointments date={date}></AvailableAppointments>
        </div>
    );
};

export default Appointment;