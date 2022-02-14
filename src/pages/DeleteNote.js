import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export default function DeleteNote({ user }) {
  const [id, setId] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const id = location.pathname.split('/')[2];
    setId(id);
  }, [location.pathname]);

  async function deleteNote() {
    const response = await fetch(`http://localhost:5000/note/${id}/delete`, {
      method: 'DELETE',
    });

    navigate('/notes');
  }

  return (
    <div className='main flex items-center justify-center'>
      <div className='bg-primary w-[666px] h-[200px] rounded-xl flex flex-col justify-around'>
        <h1 className='text-white font-bold text-3xl'>
          Are you sure you want to delete this note?
        </h1>
        <div className='w-full flex flex-row items-end justify-center gap-4'>
          <button
            onClick={() => deleteNote()}
            className='bg-secondary text-white font-medium text-xl px-14 py-3 rounded-lg'
          >
            Yes, Delete
          </button>
          <button className='bg-white text-black font-medium text-xl px-14 py-3 rounded-lg'>
            No, go back
          </button>
        </div>
      </div>
    </div>
  );
}
