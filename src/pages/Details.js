import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getNoteAgent, getNoteMap } from '../util/imageFinder.js';

export default function Details() {
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState();

  const navigate = useNavigate();

  const location = useLocation();
  const id = location.pathname.split('/')[2];

  useEffect(() => {
    async function getNoteDetails() {
      const response = await fetch(`http://localhost:5000/note/${id}`);
      const incNote = await response.json();
      setNote(incNote);
      setLoading(false);
    }

    getNoteDetails();
  });

  return (
    <div className='main flex flex-col items-center justify-center'>
      <Link to='/notes'>Back to all notes</Link>
      {!loading ? (
        <div className='flex flex-col justify-center items-center px-12 py-10 w-[95%] bg-primary rounded-xl shadow-xl overflow-hidden text-white text-left'>
          <div className='flex flex-col items-center'>
            <div className='flex flex-row items-center justify-center gap-4 mb-4 w-[100%]'>
              <img
                className='w-[64px] m:w-[112px]'
                src={getNoteAgent(note)}
                alt=''
              />
              <h1 className='text-secondary font-bold text-2xl md:text-5xl'>
                {note.agent.toUpperCase()}
              </h1>
              {/* <img src={getNoteMap(note)} alt='' /> */}
            </div>
            <div className='flex flex-col px-4 h-[100%] justify-between'>
              <p className='text font-medium text-xl mb-4'>{note.text}</p>
              <div className='flex gap-6'>
                <button
                  onClick={() => navigate(`/note/${note._id}/edit`)}
                  className='bg-white text-black font-medium text-xl px-8 md:px-14 py-3 rounded-lg'
                >
                  EDIT
                </button>
                <button
                  onClick={() => navigate(`/note/${note._id}/delete`)}
                  className='bg-secondary font-medium text-xl px-8 md:px-14 py-3 rounded-lg'
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
