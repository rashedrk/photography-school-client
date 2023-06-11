import { Link, Outlet } from "react-router-dom";
import {  FaBookReader, FaHistory } from "react-icons/fa";
import { IoWalletSharp } from "react-icons/io5";
import { MdOutlineClass } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                {/* Page content here */}
                <Outlet/>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to="/dashboard/myclasses"><MdOutlineClass className="text-lg"/>My Selected Classes</Link></li>
                    <li><Link to="/dashboard/enrolled">< FaBookReader className="text-base"/> My Enrolled Classes</Link></li>
                    <li><Link to="/dashboard/payment"><IoWalletSharp className="text-base"/> Make Payment</Link></li>
                    <li><Link to="/dashboard/payhistory"><FaHistory className="text-base"/> Payment History</Link></li>
                    
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;