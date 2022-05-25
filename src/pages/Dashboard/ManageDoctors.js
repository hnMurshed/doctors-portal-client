import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.config';
import DeleteConfirmModal from '../shared/DeleteConfirmModal/DeleteConfirmModal';
import Loading from '../shared/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState('');
    const [sureToDelete, setSureToDelete] = useState(false);

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://desolate-cliffs-76740.herokuapp.com/doctors', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            toast.error('You are not allowed to access this page');
            signOut(auth);
            <Navigate to='/login'></Navigate>
            return;
        };
        return res.json();
    }));

    useEffect(() => {
        if (sureToDelete) {
            fetch(`https://desolate-cliffs-76740.herokuapp.com/doctor/${deletingDoctor.email}`, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        toast.success(`${deletingDoctor.name} removed successfully`);
                        refetch();
                        setSureToDelete(false);
                    }
                })
        };
    }, [sureToDelete, deletingDoctor, refetch])

    if (isLoading) {
        return <Loading />
    };

    return (
        <div>
            <h2 className='text-2xl text-purple-500 text-center font-bold my-4'>Manage Doctors: {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* <!-- table head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Speciality</th>
                            <th></th>
                        </tr>
                    </thead>
                    {/* <!-- table body --> */}
                    <tbody>
                        {
                            doctors.map((doctor, index) => <tr key={doctor._id}>
                                <th>{index + 1}</th>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.speciality}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="cofirmation-modal-to-delete-doctor" className="btn btn-error btn-xs modal-button">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* modal confirmation to delete doctor */}
            {
                deletingDoctor && <DeleteConfirmModal
                    setSureToDelete={setSureToDelete}
                />
            }
        </div>
    );
};

export default ManageDoctors;