import React from 'react';
import { useForm } from 'react-hook-form';
import contactBg from '../../../assets/images/appointment.png';

const contactStyle = {
    background: `url('${contactBg}')`,
    backgroundPosition: 'cover',
    backgroundRepeat: 'no-repeat',
}

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        console.log(data);
        event.target.reset();
    };
    return (
        <div style={contactStyle} className='py-16'>
            <div className="mx-auto w-[450px]">
                <h5 className='text-center capitalize text-secondary text-[20px] font-bold mb-2'>Contact Us</h5>
                <h1 className="text-[36px] text-white text-center">Stay connected with us</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type='email' placeholder='Email address' className='block w-full mt-4 py-4 px-5 rounded-lg' {...register("email", { required: true })} />
                    <input type='text' placeholder='Subject' className='block w-full mt-4 py-4 px-5 rounded-lg' {...register("subject")} required />
                    <textarea placeholder='Your message' className='block w-full mt-4 py-4 px-5 rounded-lg' {...register('message')} required />
                    <div className="text-center">
                        <input type="submit" className="btn bg-gradient-to-l hover:bg-gradient-to-r from-secondary to-primary text-white border-0 mt-9 mx-auto" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;