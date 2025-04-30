import React from "react";
import ProfileCard from "./DashboardMenu/ProfileCard";
import ProductCard from "./DashboardMenu/ProductCard";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import ApiData from "./DashboardMenu/ApiData";

const UserDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 w-64 bg-white p-6 shadow-lg h-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to={"/dashboard/Profile"}>Profile</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to={"/dashboard/Products"}>Product</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to={"/dashboard/Apidata"}>Api Data</Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-6 ml-64 overflow-y-auto">
        <Routes>
          <Route index element={<Navigate to="Profile" replace />} />
          <Route
            path="Profile"
            element={
              <>
                <ProfileCard name={"Muhammad Ali"} bio={""} isOnline={true} />
                <ProfileCard name={"Taha"} bio={""} isOnline={false} />
              </>
            }
          />

          <Route
            path="Apidata"
            element={
              <>
                <ApiData />
              </>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default UserDashboard;
