import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.config';

const MyAppointment = () => {
    const [bookings, setBookings] = useState([]);

    // react hooks
    const navigate = useNavigate();

    // react firebase hooks
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`https://desolate-cliffs-76740.herokuapp.com/bookings?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        navigate('/login');
                    }
                    return res.json();
                })
                .then(data => setBookings(data))
        }
    }, [user, navigate]);
    return (
        <div>
            <h2 className='text-2xl text-purple-500 text-center font-bold my-4'>My Appointments</h2>
            {
                bookings.length ? <>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Patient</th>
                                    <th>Treatment</th>
                                    <th>Appointment</th>
                                    <th>Schedule</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    bookings?.map((booking, index) => <tr key={booking._id}>
                                        <th>{index + 1}</th>
                                        <td>{booking.patient}</td>
                                        <td>{booking.treatment}</td>
                                        <td>{booking.appointmentDate}</td>
                                        <td>{booking.slot}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </> : <p className='text-center my-5'>You don't have any appointment. Please <Link to='/appointment' className='text-primary'>Make an Appointment</Link></p>
            }

        </div>
    );
};

export default MyAppointment;