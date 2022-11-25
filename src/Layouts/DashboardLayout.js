import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { AuthContext } from '../Contexts/AuthProvider';
import useRole from '../Hook/useRole';
import AdminOption from '../Pages/Dashboard/Admin/AdminOption';
import BuyerOption from '../Pages/Dashboard/Buyers/BuyerOption';
import SellerOption from '../Pages/Dashboard/Sellers/SellerOption';
import Navbar from '../Shared/Navbar';

const DashboardLayout = () => {
    const {user,logOut,loading} = useContext(AuthContext)
    const [role,isRoleLoading] = useRole(user?.email)
    
    if(isRoleLoading){
        return <Spinner></Spinner>
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start bg-accent">
                    <div className='w-full mt-16'>
                    <Outlet></Outlet>
                    </div>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content text-lg font-semibold pl-14">
                    {
                        role==='buyer' &&  <BuyerOption></BuyerOption>
                    }
                    {
                        role==='seller' && <SellerOption></SellerOption>
                    }
                    {
                        role==='admin' && <AdminOption></AdminOption>
                    }
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;