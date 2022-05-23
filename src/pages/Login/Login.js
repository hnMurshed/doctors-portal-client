import React, { useEffect, useState } from 'react';
import auth from '../../firebase.config';
import { useSignInWithGoogle, useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [userEmail, setUserEmail] = useState('');

    // use react hooks
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    // use React firebase hooks
    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        googleError
    ] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);
    const [
        sendPasswordResetEmail,
        updating,
        passResetError
    ] = useSendPasswordResetEmail(auth);

    // use custom hooks
    const [token] = useToken(googleUser || emailUser);
    
    useEffect( () => {
        if (token) {
            navigate(from, {replace: true});
        }
    }, [token, from, navigate]);

    let errorElement;

    if (googleLoading || emailLoading || updating) {
        return <Loading></Loading>
    }
    if (googleError || emailError || passResetError) {
        errorElement = <p className='text-red-400 mb-3'>{googleError?.message || emailError?.message || passResetError.message}</p>;
    }
    

    const onSubmit = async (data, event) => {
        const { email, password } = data;
        setUserEmail(email);
        await signInWithEmailAndPassword(email, password);
        event.target.reset();
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* email input */}
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

                        {/* password input */}
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
                            <span onClick={ async () => {
                                await sendPasswordResetEmail(userEmail);
                                console.log(userEmail);
                                if (passResetError) {

                                }
                                else {
                                    toast.success('Passsword reset email sent!')
                                }
                                
                            }} className='cursor-pointer'>Forgot Password?</span>
                        </div>

                        {errorElement}
                        {/* submit button */}
                        <input type="submit" value='login' className="btn bg-accent w-full text-[#D4D9E3] uppercase" />
                        <p className='mt-3'>New to Doctors Portal? <Link to='/register' className='text-primary'>Create new account</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline font-normal">continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;