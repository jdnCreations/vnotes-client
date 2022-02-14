import React from 'react';
import { Link } from 'react-router-dom';

export default function Main({ user }) {
  return (
    <div className='main flex flex-col items-center justify-center'>
      <div className='title mb-16'>
        <h1 className='font-bold text-5xl text-secondary'>
          WELCOME,{' '}
          {user !== null ? (
            <span>{user.toUpperCase()}</span>
          ) : (
            <span>NO USER</span>
          )}
        </h1>
        <h2 className='font-medium text-3xl text-primary'>
          what's the plan for today?
        </h2>
      </div>
      <div className='buttons'>
        <Link
          to='/new-note'
          className='bg-primary text-white py-6 px-12 mr-4 rounded-lg font-medium text-2xl hover:bg-secondary hover:shadow-xl transition-all ease-in-out duration-200'
        >
          CREATE NEW NOTE
        </Link>
        <Link
          to='/notes'
          className='bg-primary text-white py-6 px-12 ml-4 rounded-lg font-medium text-2xl hover:bg-secondary hover:shadow-xl transition-all ease-in-out duration-200'
        >
          REVIEW NOTES
        </Link>
      </div>
    </div>
  );
}
