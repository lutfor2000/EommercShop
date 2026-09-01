import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => {
    return (
         <div className='flex min-h-screen w-full'>

            {/* ----admin sidebar--- */}
            <AdminSidebar/>

            <div className="flex flex-1 flex-col">

                {/* ----Admin Header---- */}
                <AdminHeader/>
                <main className="flex flex-1 bg-slate-50 md:p-6">
                    <Outlet/>
                </main>

            </div>
            
        </div>
    );
};

export default AdminLayout;