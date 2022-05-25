import { tr } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../shared/Loading/Loading';

const AllUsers = () => {
    /*********************
    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://desolate-cliffs-76740.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);
    **********************/

    // use react query to fetch data instead of fetching inside useEffect and using useState
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('https://desolate-cliffs-76740.herokuapp.com/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    };

    const makeAdmin = (user, isAdmin) => {
        fetch('https://desolate-cliffs-76740.herokuapp.com/control-role', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            },
            body: JSON.stringify({user: user, isAdmin: isAdmin})
        })
        .then(res => {
            if (res.status === 403) {
                toast.error("You don't have right to make or remove admin")
            }
            return res.json();
        })
        .then(data => {
            refetch();
            console.log(data);
        })
    }
    return (
        <div>
            <h2 className='text-2xl text-purple-500 text-center font-bold my-4'>All Users</h2>
            <div>
                <table className="table w-full">
                    <thead>
                        <th></th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Role Control</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.user}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? <span className='text-[18px] font-bold text-pink-500'>Admin</span> :
                                        <span className='text-[18px] font-bold text-accent'>User</span>
                                    }
                                </td>
                                <td>
                                    {
                                        user.role === 'admin' ? <button onClick={() => makeAdmin(user.user, false)} className="btn btn-xs">Remove Admin</button> : <button onClick={() => makeAdmin(user.user, true)} className="btn btn-info btn-xs">Make Admin</button>
                                    }
                                </td>
                                <td><button className="btn btn-xs">Remove</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;