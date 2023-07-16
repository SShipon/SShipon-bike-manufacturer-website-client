import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init.jsx';
import useAdmin from '../hooks/useAdmin.js';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
      <div className="drawer drawer-mobile   p-20">
        <input id="dashboard-side" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-side" className="drawer-overlay"></label>
          <ul className="menu overflow-y-auto w-64  text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
           
              <li>
                <Link to="/dashboard/order">My Orders</Link>
              </li>
           
              <li>
                <Link to="/dashboard/review">Add a Review</Link>
              </li>
           
            
                <li>
                  <Link to="/dashboard/manageorder">Manage All Order</Link>
                </li>
                <li>
                  <Link to="/dashboard/makeadmin">Make Admin</Link>
                </li>
                <li>
                  <Link to="/dashboard/addproduct">Add A Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageorder">Manage Products</Link>
                </li>
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;