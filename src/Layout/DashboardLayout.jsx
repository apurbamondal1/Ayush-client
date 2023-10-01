import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Link, Outlet, useLocation } from 'react-router-dom';


const DashboardLayout = () => {
    const location = useLocation();
    return (
       <div >
        <Navbar></Navbar>
         <div className="drawer lg:drawer-open  ">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
         
        </div> 
        <div className="drawer-side pt-[90px]">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-slate-200 text-base-content">
            {/* Sidebar content here */}
            <button style={{ backgroundColor: location.pathname === '/dashboard' ? 'tomato' : 'transparent' }} className="btn btn-ghost">
          <li><Link to="/dashboard">Startups</Link></li>
        </button>
             <button style={{ backgroundColor: location.pathname === '/dashboard/dashboard/investors' ? 'tomato' : 'transparent' }} className="btn btn-ghost"><li><Link to ='dashboard/investors' >Investors</Link></li></button>
             <button className="btn btn-ghost"><li>Incubators</li></button>
             <button className="btn btn-ghost"><li>Accelerators</li></button>
             <button className="btn btn-ghost"><li>Govt Agencies</li></button>
             <button style={{ backgroundColor: location.pathname === '/dashboard/dashboard/publicuser' ? 'tomato' : 'transparent' }} className="btn btn-ghost"><li><Link to="dashboard/publicuser">Public Users</Link></li></button>

            
          </ul>
        </div>
      </div>
       </div>
    );
};

export default DashboardLayout;
