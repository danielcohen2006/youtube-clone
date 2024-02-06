import { SignedIn, UserButton, SignedOut } from '@clerk/clerk-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <div className="w-full h-fit p-4 border-b border-gray-300 flex gap-4 justify-between items-center">
      <Link to={'/'}>youtube</Link>
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <SignedOut>
      <Link to={'/sign-in'} className="hover:bg-gray-200 rounded-lg px-4 py-2">
          Sign In
      </Link>
          </SignedOut>
    </div>
  );
};
