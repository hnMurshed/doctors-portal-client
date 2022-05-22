import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidemenu" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <Outlet />
                

            </div>
            <div className="drawer-side">
                <label for="dashboard-sidemenu" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to=''>My Appoinment</Link></li>
                    <li><Link to='myreview'>My Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;