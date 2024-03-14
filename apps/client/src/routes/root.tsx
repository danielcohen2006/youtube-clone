import React from 'react';
import { Outlet, redirect } from 'react-router-dom';
import { Navbar } from '../features/navbar';

export const Root: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col bg-white">
      <Navbar />
      <div className="flex h-full w-full flex-col items-center justify-start bg-blue-200 pt-4">
        <Outlet />
      </div>
    </div>
  );
};
