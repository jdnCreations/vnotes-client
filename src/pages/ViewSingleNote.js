import React from 'react';
import raze from '../assets/images/raze.png';
import bind from '../assets/images/bind.png';

export default function ViewSingleNote() {
  return (
    <div className='main flex items-center justify-center'>
      <div className='flex flex-col justify-center items-center px-12 py-10 w-[70%] h-[70%] bg-primary rounded-xl shadow-xl overflow-hidden text-white text-left'>
        <div className='flex flex-row'>
          <div className='flex flex-col w-[40%] px-4 h-[100%]'>
            <div className='flex items-center'>
              <img className='w-[112px]' src={raze} alt='' />
              <h1 className='text-secondary font-bold text-5xl'>RAZE</h1>
            </div>
            <img src={bind} alt='' />
          </div>
          <div className='flex flex-col w-[60%] px-4 h-[100%] justify-between'>
            <div className='text font-medium text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore.
            </div>
            <div className='flex flex-end place-self-end gap-6'>
              <button className='bg-white text-black font-medium text-xl px-14 py-3 rounded-lg'>
                EDIT
              </button>
              <button className='bg-secondary font-medium text-xl px-14 py-3 rounded-lg'>
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
