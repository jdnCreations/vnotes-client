import React, { useEffect, useState } from 'react';
import Note from '../components/Note';

export default function ReviewNotes({ user }) {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState({});

  useEffect(() => {
    async function getNotes() {
      const response = await fetch('http://localhost:5000/notes');
      const body = await response.json();
      setNotes(body);
      setLoading(false);
    }

    getNotes();
  }, []);

  return (
    <div className='main flex items-center'>
      {loading ? (
        <p>loading....</p>
      ) : (
        <div className='w-screen flex flex-col items-center'>
          <h1 className='font-bold text-5xl my-14'>ALL NOTES</h1>
          <div className='w-[80%] flex gap-2'>
            <button className='bg-primary text-white font-medium text-2xl rounded-lg px-4 py-4'>
              Filter by Agent
            </button>
            <button className='bg-primary text-white font-medium text-2xl rounded-lg px-4 py-4'>
              Filter by Map
            </button>
            <button className='bg-primary text-white font-medium text-2xl rounded-lg px-4 py-4'>
              Filter by Agent & Map
            </button>
          </div>
          <div className='flex flex-col w-screen items-center'>
            {notes.map((note) => (
              <Note key={note._id} note={note} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
