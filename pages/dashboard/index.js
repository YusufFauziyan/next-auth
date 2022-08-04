import HOC from "@/components/HOC";
import { logout } from "@/redux/features/auth/authSlice";
import React from "react";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <p className="pb-2 font-semibold">Sudah Login</p>
        <button
          onClick={handleLogout}
          className="outline px-8 py-1 rounded-md hover:bg-black hover:text-white ease-in-out duration-300"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default HOC(Dashboard);
