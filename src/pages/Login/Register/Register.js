import React, { useEffect } from 'react';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.config';
import Loading from '../../shared/Loading/Loading';
import useToken from '../../../hooks/useToken';

const Register = () => {

    // use react hooks
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    // use React firebase hooks
    const [
        sendEmailVerification,
        sending,
        error
    ] = useSendEmailVerification(auth);
    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        googleError
    ] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification });
    const [
        updateProfile, 
        updating, 
        updateError
    ] = useUpdateProfile(auth);

    // use custom hooks
    const [token] = useToken(emailUser || googleUser);

    let errorElement;

    if (googleError || emailError) {
        errorElement = <p className='text-red-400 mb-3'>{googleError?.message || emailError?.message}</p>;
    }
    useEffect( () => {
        if (token) {
            navigate('/home');
        }
    }, [token, navigate]);
    
    if (googleLoading || emailLoading) {
        return <Loading></Loading>
    }

    const onSubmit = async (data, event) => {
        console.log(data);
        const { name, email, password } = data;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        event.target.reset();
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-3'>
                            <label htmlFor="name">Name</label>
                            <input type='text' id='name' name='name' placeholder='Your Name' className='block w-full py-2 px-2 rounded-lg border border-[#cfcfcf]' {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })} />
                            {errors.name?.type === 'required' && <p className='text-red-400'>{errors.name.message}</p>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email">Email</label>
                            <input type='email' id='email' name='email' placeholder='Email address' className='block w-full py-2 px-2 rounded-lg border border-[#cfcfcf]' {...register("email", {
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
                        <div className='mb-3'>
                            <label htmlFor="password">Password</label>
                            <input type='password' id='password' name='password' placeholder='Password' className='block w-full py-2 px-2 rounded-lg border border-[#cfcfcf]' {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password should have at least 6 characters'
                                  }
                            })} />
                            {errors.password?.type === 'required' && <p className='text-red-400'>{errors.password.message}</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-400'>{errors.password.message}</p>}
                        </div>
                        {errorElement}
                        <input type="submit" value='Sign Up' className="btn bg-accent w-full text-[#D4D9E3] uppercase" />
                        <p className='mt-3'>Already have an account? <Link to='/login' className='text-primary'>Login please</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline font-normal">continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;