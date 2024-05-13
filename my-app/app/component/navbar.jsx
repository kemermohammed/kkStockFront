
'use client'
import React, { useState } from 'react';
import { HiOutlineClock, HiOutlineDocumentReport, HiOutlineUserGroup, HiOutlineUserCircle } from 'react-icons/hi';

function SideNavBar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="h-screen flex">
      <button className="text-gray-400 focus:outline-none" onClick={toggleNav}>
        {showNav ? <HiOutlineClock size={24} /> : <HiOutlineUserCircle size={24} />}
      </button>
      {showNav && (
        <nav className="bg-gray-800 w-64">
          <div className="p-4">
            <h1 className='text-white flex items-center px-4 py-2'>DASHBOARD</h1>
            <a href="#" className="text-white flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
              <HiOutlineClock size={20} />
              <span className="ml-2">Buy History</span>
            </a>
            <a href="#" className="text-white flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
              <HiOutlineDocumentReport size={20} />
              <span className="ml-2">Sell History</span>
            </a>
            <a href="#" className="text-white flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
              <HiOutlineUserGroup size={20} />
              <span className="ml-2">Client</span>
            </a>
            <a href="#" className="text-white flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
              <HiOutlineUserCircle size={20} />
              <span className="ml-2">Seller</span>
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}

export default SideNavBar;
