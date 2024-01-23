import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/navBar';

export const Root: React.FC = () => {
  return (
    <div className="bg-white w-full h-full">
      <div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};


