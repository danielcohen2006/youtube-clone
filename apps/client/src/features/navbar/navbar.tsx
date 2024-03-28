import { SignedIn, UserButton, SignedOut } from '@clerk/clerk-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { FiUpload } from 'react-icons/fi';

export const Navbar: React.FC = () => {
  return (
    <div className="flex h-fit w-full items-center justify-between gap-4 border-b border-gray-300 p-4">
      <div className=" flex items-center justify-between gap-1 text-2xl sm:text-3xl lg:text-4xl">
        <Link to="/" className="flex items-center justify-center gap-2">
          <FaYoutube />
          <div>
            You<span className="font-bold">tube</span>
          </div>
        </Link>
      </div>
      <div className="ml-auto flex gap-4">
        <Link to="/upload">
          <div className=" flex items-center justify-between gap-2  text-2xl sm:text-3xl lg:text-4xl">
            <FiUpload />
          </div>
        </Link>
        {/* <Link to="/videos">Videos</Link> */}
      </div>
      <SignedIn>
        <UserButton afterSignOutUrl="/sign-in" />
      </SignedIn>
      <SignedOut>
        <Link
          to={'/sign-in'}
          className=" flex items-center justify-between gap-2 rounded-lg px-4 py-2 hover:bg-gray-200 "
        >
          <FaUser />
          Sign In
        </Link>
      </SignedOut>
    </div>
  );
};
