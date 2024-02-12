import React from 'react';
import Link from 'next/link';

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800 text-white '>
      {/* Logo Section */}
      <div>
        <Link href = "/">
          <div className='bg-white'>
            <img src = "/logo.svg" alt = "University Logo" className='max-h-10'/>
          </div>
          
        </Link>
      </div>
      {/* Logout Section */}
      <div >
        <button className='bg-transparent border-none text-white cursor-pointer'>
          Logout
        </button>
      </div>
    </nav>
  );
};