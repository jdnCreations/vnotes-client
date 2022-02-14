import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className='h-screen flex items-center justify-center'>
      <div>
        <h1 className='text-6xl font-bold title text-primary mb-16'>
          YOUR VALORANT SPECIFIC NOTES APP
        </h1>
        <div className='flex justify-center'>
          <button
            onClick={() => navigate('/signup')}
            className='bg-secondary text-white hover:shadow-lg 
          rounded-lg font-bold px-14 py-6 text-4xl border-secondary 
          hover:bg-transparent hover:text-secondary transition-all 
          ease-in-out duration-300 border-2 mr-4'
          >
            SIGN UP
          </button>
          <button
            onClick={() => navigate('/login')}
            className='bg-primary text-white hover:shadow-lg 
          rounded-lg font-bold px-14 py-6 text-4xl border-primary 
          hover:bg-transparent hover:text-primary transition-all 
          ease-in-out duration-300 border-2 ml-4'
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}
