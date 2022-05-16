import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NewNote({ user }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [agent, setAgent] = useState('breach');
  const [map, setMap] = useState('breeze');
  const [noteText, setNoteText] = useState();
  const [note, setnote] = useState({});

  async function createNewNote() {
    const response = await fetch('http://localhost:5000/create-note', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
        agent,
        map,
        text: noteText,
      }),
    }).then((response) => response.json());

    navigate('/notes');
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-bold text-2xl lg:text-5xl text-primary my-14'>
        CREATE NEW NOTE
      </h1>
      <div className='bg-primary w-[95%] py-10 rounded-lg'>
        <div className='flex flex-col items-center w-[100%]'>
          <select
            className='w-[80%] rounded-lg text-2xl py-4 px-8 mb-4'
            type='text'
            placeholder='MAP'
            onChange={(e) => setMap(e.target.value)}
          >
            <option value='breeze'>Breeze</option>
            <option value='bind'>Bind</option>
            <option value='ascent'>Ascent</option>
            <option value='icebox'>Icebox</option>
            <option value='fracture'>Fracture</option>
            <option value='haven'>Haven</option>
            <option value='split'>Split</option>
          </select>
          <select
            className='w-[80%] rounded-lg text-2xl py-4 px-8 mb-4'
            type='text'
            placeholder='AGENT'
            onChange={(e) => setAgent(e.target.value)}
          >
            <option value='breach'>Breach</option>
            <option value='brimstone'>Brimstone</option>
            <option value='phoenix'>Phoenix</option>
            <option value='sage'>Sage</option>
            <option value='sova'>Sova</option>
            <option value='viper'>Viper</option>
            <option value='cypher'>Cypher</option>
            <option value='reyna'>Reyna</option>
            <option value='killjoy'>Killjoy</option>
            <option value='omen'>Omen</option>
            <option value='jett'>Jett</option>
            <option value='raze'>Raze</option>
            <option value='skye'>Skye</option>
            <option value='yoru'>Yoru</option>
            <option value='astra'>Astra</option>
            <option value='kayo'>Kay/o</option>
            <option value='chamber'>Chamber</option>
            <option value='neon'>Neon</option>
          </select>
          <textarea
            className='w-[80%] note rounded-lg text-2xl py-4 px-8 mb-4'
            type='text'
            placeholder='NOTE'
            onChange={(e) => setNoteText(e.target.value)}
          />
          <button
            onClick={() => createNewNote()}
            className='bg-secondary text-white text-3xl w-[80%]  rounded-lg py-4 hover:bg-green-500 transition-all ease-in-out duration-100'
          >
            ADD NOTE
          </button>
        </div>
      </div>
    </div>
  );
}
