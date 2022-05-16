import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login({ handleLogin }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  async function login() {
    axios({
      method: 'POST',
      data: {
        username,
        password,
      },
      withCredentials: true,
      url: 'http://localhost:5000/login',
    })
      .then((res) => handleLogin(res.data.username))
      .then(navigate('/'));
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <h1 className='text-6xl font-bold title text-primary mb-16'>LOGIN</h1>

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
        <button
          className='bg-secondary text-white rounded-xl px-6 py-4 font-medium text-3xl'
          onClick={() => login()}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}
