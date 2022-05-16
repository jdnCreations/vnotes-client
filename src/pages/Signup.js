import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup({ handleLogin }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  async function signup() {
    const response = await axios({
      method: 'POST',
      data: {
        username,
        password,
        email,
      },
      withCredentials: true,
      url: 'http://localhost:5000/register',
    });

    const data = await response.data;
    console.log(data);

    navigate('/login');
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-6xl font-bold title text-primary mb-16'>
        YOUR JOURNEY TO RANKING UP BEGINS HERE.
      </h1>
      <div className='flex flex-col bg-primary md:w-[538px] px-12 py-12 rounded-2xl gap-4'>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type='text'
          placeholder='USERNAME'
          className='bg-accent rounded-xl px-6 py-4 text-2xl'
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='PASSWORD'
          className='bg-accent rounded-xl px-6 py-4 text-2xl'
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='EMAIL'
          className='bg-accent rounded-xl px-6 py-4 text-2xl'
        />
        <button
          className='bg-secondary text-white rounded-full px-6 py-4 font-medium text-3xl'
          onClick={() => signup()}
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
}
