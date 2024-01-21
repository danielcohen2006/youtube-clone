import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { MdSubscriptions } from 'react-icons/md';
import { RiUpload2Fill } from 'react-icons/ri';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { BiSolidHelpCircle } from 'react-icons/bi';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { icon: <FaHome size={25} className="mr-4" />, text: 'Home' },
    { icon: <MdSubscriptions size={25} className="mr-4" />, text: 'Subs' },
    { icon: <RiUpload2Fill size={25} className="mr-4" />, text: 'Post' },
    { icon: <BiSolidHelpCircle size={25} className="mr-4" />, text: 'Help' },
  ];

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          You<span className="font-bold">tube</span>
        </h1>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      {/* Cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full border border-black px-5 ">
        <FaRegUserCircle size={20} className="mr-2" /> Sign in
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ''
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />

        <nav>
          <div className="pt-14">
            <ul className="flex flex-col p-4 text-gray-800">
              {menuItems.map(({ icon, text }, index) => {
                return (
                  <div key={index} className=" py-4">
                    <li className="text-xl flex cursor-pointer  w-[50%] rounded-full mx-auto p-2 hover:text-white hover:bg-black">
                      {icon} {text}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
