import React from 'react';
import {  Outlet } from 'react-router-dom';
import { Navbar } from '../features/navbar';

export const Root: React.FC = () => {
  return (
    <div className="bg-white w-full h-full flex flex-col">
      <Navbar />
      <div className="w-full bg-blue-200 flex flex-col h-full items-center justify-start pt-4">
        <Outlet />
      </div>
    </div>
  );
};
