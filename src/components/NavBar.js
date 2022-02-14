import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ user, handleLogout }) {
  return (
    <header className='navbar px-16 flex justify-between items-center bg-primary h-[114px] text-white'>
      <Link to='/' className='font-bold'>
        VALLY<span className='text-secondary'>NOTES</span>
      </Link>
      <ul className='flex w-[112px] justify-around'>
        <Link className='hover:text-secondary' to='/profile'>
          profile
        </Link>
        <Link className='hover:text-secondary' onClick={handleLogout} to='/'>
          logout
        </Link>
      </ul>
    </header>
  );
}
