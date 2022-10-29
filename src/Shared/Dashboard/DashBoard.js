import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../Hooks/UseAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = UseAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashbord-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-3xl font-bold text-red-500'>WEL TO YOUR Dash-Board</h2>
                <Outlet></Outlet>
                

            </div>
            <div className="drawer-side">
                <label for="dashbord-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

                    <li><Link to="/dashboard">Dash Board</Link></li>
                    <li><Link to="/dashboard/myreview">Review</Link></li>
                    <li><Link to="/dashboard/myhistory">HIstory</Link></li>
                    {admin && <>
                        <li><Link to="/dashboard/alluser">ALL USER</Link></li>
                        <li><Link to="/dashboard/addDoctor">ADD A DOCTOR</Link></li>
                    </>}
                    
                    
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;