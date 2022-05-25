import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../shared/Loading/Loading';

const AddDoctor = () => {

    // use react hooks
    const { register, formState: { errors }, handleSubmit } = useForm();

    // load services names using react query
    const { data: serviceNames, isLoading } = useQuery('service-names', () => fetch('http://localhost:5000/service-names').then(res => res.json()));

    const onSubmit = async (data, event) => {
        console.log('data', data);
        const { name, email, speciality } = data;
        const newDoctor = {
            name,
            email,
            speciality
        };

        fetch('http://localhost:5000/doctor', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            body: JSON.stringify(newDoctor)
        })
        .then(res => res.json())
        .then(inserted => {
            if (inserted.insertedId) {
                toast.success('Doctor added successfully')
            }
            else {
                toast.error('Failed to add doctor')
            }
        })
        event.target.reset();
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="text-center text-xl">Add a new doctor</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* name input field */}
                        <div className='mb-3'>
                            <label htmlFor="name">Doctor Name</label>
                            <input type='text' id='name' name='name' placeholder='Doctor Name' className='block w-full py-2 px-2 mt-2 rounded-lg border border-[#cfcfcf]' {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Doctor name is required'
                                }
                            })} />
                            {errors.name?.type === 'required' && <p className='text-red-400'>{errors.name.message}</p>}
                        </div>

                        {/* email input field */}
                        <div className='mb-3'>
                            <label htmlFor="email">Email</label>
                            <input type='email' id='email' name='email' placeholder='Email address' className='block w-full py-2 px-2 mt-2 rounded-lg border border-[#cfcfcf]' {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Enter a valid email' // JS only: <p>error message</p> TS only support string
                                }
                            })} />
                            {errors.email?.type === 'required' && <p className='text-red-400'>{errors.email.message}</p>}
                            {errors.email?.type === 'pattern' && <p className='text-red-400'>{errors.email.message}</p>}
                        </div>

                        {/* select field */}
                        <div className='mb-3'>
                            <label htmlFor="speciality">Speciality</label>
                            <select {...register('speciality')} className="select select-bordered w-full max-w-xs mt-2" id='speciality'>
                                {
                                    serviceNames.map(service => <option
                                        key={service._id}
                                        value={service.name}
                                    >{service.name}</option>)
                                }
                            </select>
                        </div>

                        {/* file input */}
                        {/* <div className='mb-3'>
                            
                            <input onBlur={ (e) => setImg(e.target.value)} type='file' className='block w-full py-2 px-2 mt-2 rounded-lg border border-[#cfcfcf]' name='img' {...register("image")} />
                            
                        </div> */}
                        <div className="mb-3">
                        <label htmlFor='photo'>Photo</label>
                            <input type="file" id='photo' className="select select-bordered w-full max-w-xs mt-2" {...register('photo', {
                                required: {
                                    value: true,
                                    message: 'The Doctor image is required'
                                }
                            })} />
                            {errors.image?.type === 'required' && <p className='text-red-400'>{errors.image.message}</p>}
                        </div>
                        <input type="submit" value='Add Doctor' className="btn bg-accent w-full text-[#D4D9E3] uppercase" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;