import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/navBar';

export const Root: React.FC = () => {
  return (
    <div className="bg-white w-full h-full">
      <div className="w-full h-fit bg-blue-200 flex justify-evenly items-center gap-4">
        <Link to="videos">videos</Link>
        <Link to="movies">movies</Link>
      </div>
      <Outlet />

      <div>
        <Navbar />
      </div>
    </div>
  );
};


