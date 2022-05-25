import React from 'react';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.config';
import { toast } from 'react-toastify';

const BookingModal = ({ selectedService, setSelectedService, date, refetch }) => {
    const [user] = useAuthState(auth);

    const {_id, name, slots} = selectedService;
    const { register, handleSubmit } = useForm();

    const appointmentDate = format(date, 'PP');
    const onSubmit = (data, event) => {
        const slot = event.target.schedule.value;
        console.log(data);
        const bookingData = {
            treatmentId: _id,
            treatment: name,
            appointmentDate,
            slot,
            patient: user.displayName,
            patientEmail: user.email,
            phone: event.target.phone.value
        }

        fetch('https://desolate-cliffs-76740.herokuapp.com/bookings', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                toast(`Your appointment is confired on ${appointmentDate} at ${slot}`);
                refetch();
                setSelectedService(null);
            }
            else {
                toast.error(`You have already an appointment for ${name} on ${appointmentDate}`)
            }
        });
    };
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box p-5">
                    <div className='flex items-center justify-between mb-10'>
                        <h4 className='text-[20px] font-semibold'>{name}</h4>
                        <label htmlFor="booking-modal" className="bg-accent text-[#8391AD] p-1 rounded-full cursor-pointer"><FaTimes></FaTimes></label>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='w-full border my-2 p-3 rounded-md' type='text' value={appointmentDate} {...register("date")} />
                        <select className='select w-full bg-[#CFCFCF] border my-2 p-3 rounded-md' {...register("schedule")}>
                            {
                                slots.map((slot, index) => <option key={index} value={slot} defaultValue>{slot}</option>)
                            }
                        </select>
                        <input disabled value={user?.displayName || ''} className='w-full border my-2 p-3 rounded-md' type='text' {...register("name")} required/>
                        <input disabled value={user?.email || ''} className='w-full border my-2 p-3 rounded-md' type='email' {...register("email")} required/>
                        <input className='w-full border my-2 p-3 rounded-md' type='text' placeholder='Phone Number' {...register("phone")} required/>
                        <input className='w-full bg-accent text-white my-2 p-3 rounded-md cursor-pointer' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;