import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.config';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

    // react firebase hooks
    const [user] = useAuthState(auth);

    // use custom hooks
    const [admin] = useAdmin(user);
    return (
        <div>
            <h1 className='text-3xl text-secondary text-center font-bold my-4'>Welcome to the Dashboard</h1>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidemenu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet />


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidemenu" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to=''>My Appoinment</Link></li>
                        <li><Link to='myreview'>My Review</Link></li>
                        {
                            admin && <>
                                <li><Link to='users'>All Users</Link></li>
                                <li><Link to='addDoctor'>Add Doctor</Link></li>
                                <li><Link to='manageDoctors'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;