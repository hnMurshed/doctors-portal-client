import React from 'react';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { FaTimes } from 'react-icons/fa';

const BookingModal = ({ selectedService, setSelectedService, date }) => {
    const {_id, name, slots} = selectedService;
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        setSelectedService(null);
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
                        <input className='w-full bg-[#CFCFCF] border my-2 p-3 rounded-md' type='text' value={format(date, 'PP')} placeholder='Appointment Date' {...register("date")} readOnly/>
                        <select className='select w-full bg-[#CFCFCF] border my-2 p-3 rounded-md' {...register("schedule")}>
                            {
                                slots.map(slot => <option value={slot} selected>{slot}</option>)
                            }
                        </select>
                        <input className='w-full border my-2 p-3 rounded-md' type='text' placeholder='Full Name' {...register("name")} required/>
                        <input className='w-full border my-2 p-3 rounded-md' type='text' placeholder='Phone Number' {...register("phone")} required/>
                        <input className='w-full border my-2 p-3 rounded-md' type='email' placeholder='Email' {...register("email")} required/>
                        <input className='w-full bg-accent text-white my-2 p-3 rounded-md cursor-pointer' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;