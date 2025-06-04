import React from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import AdminMain from "./AdminMain";

const AdminDashboardPage = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <SideBar active={1} />
          </div>
          <AdminMain />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
