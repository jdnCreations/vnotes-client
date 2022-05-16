import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getNoteAgent } from '../util/imageFinder.js';

export default function Note({ note }) {
  const navigate = useNavigate();

  return (
    <div
      className='hover:cursor-pointer group hover:bg-secondary flex flex-col md:flex-row justify-between bg-primary text-white w-[95%] md:w-[85%] max-w-[800px] rounded-lg my-1 py-4 px-6 items-center overflow-hidden gap-4'
      onClick={() => navigate(`/note/${note._id}`)}
    >
      <div className='flex flex-row items-center gap-4'>
        <img
          className='w-[64px]'
          src={getNoteAgent(note)}
          alt='a character from valorant'
        />
        <p className='font-bold text-xl md:text-4xl text-secondary group-hover:text-primary'>
          {note.map.toUpperCase()}
        </p>
      </div>
      <p className='font-bold text-lg md:text-3xl text-left md:w-[60%]'>
        {note.text}
      </p>
    </div>
  );
}
