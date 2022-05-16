import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Note from '../components/Note';

export default function ReviewNotes({ user }) {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState({});
  const [agent, setAgent] = useState('breach');
  const [map, setMap] = useState('ascent');
  const [filter, setFilter] = useState('all');

  const allFilter = document.getElementById('allFilter');
  const agentFilter = document.getElementById('agentFilter');
  const mapFilter = document.getElementById('mapFilter');
  const agentAndMapFilter = document.getElementById('agentAndMapFilter');

  const navigate = useNavigate();

  const filters = [allFilter, agentFilter, mapFilter];

  useEffect(() => {
    async function getNotes() {
      const response = await fetch('http://localhost:5000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user }),
      });

      const body = await response.json();
      setNotes(body);
      setLoading(false);
    }

    getNotes();
  }, [user]);

  async function filterByAgent(agent) {
    setLoading(true);
    setFilter('agent');
    const response = await fetch(`http://localhost:5000/notes/agent/${agent}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, agent }),
    });

    const body = await response.json();
    setNotes(body);
    setLoading(false);
    setAgent(agent);
  }

  async function filterByMap(map) {
    setLoading(true);
    setFilter('map');
    console.log(map);
    const response = await fetch(`http://localhost:5000/notes/map/${map}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, map }),
    });

    const body = await response.json();
    setNotes(body);
    setLoading(false);
    setMap(map);
  }

  async function getNotes() {
    const response = await fetch('http://localhost:5000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    });

    const body = await response.json();
    setNotes(body);
    setLoading(false);
  }

  function handleFilterClick(filter) {
    let currFilter = document.getElementById(filter);

    for (let i = 0; i < filters.length; i++) {
      if (currFilter === filters[i]) {
        currFilter.classList.add('active');
      } else {
        filters[i].classList.remove('active');
      }
    }
  }

  return (
    <div className='flex items-center'>
      <div className='w-screen flex flex-col items-center'>
        <h1 className='font-bold text-2xl lg:text-5xl my-14'>ALL NOTES</h1>
        <button
          onClick={(e) => {
            navigate('/new-note');
          }}
          className='bg-green-500 w-[95%] md:w-[85%] max-w-[800px] mb-2 text-white font-medium text-lg md:text-2xl rounded-lg px-4 py-4'
        >
          New Note
        </button>
        <div className='w-[95%] md:w-[85%] max-w-[800px] flex gap-2'>
          <button
            id='allFilter'
            onClick={(e) => {
              handleFilterClick(e.target.id);
              getNotes();
            }}
            name='allFilter'
            className='bg-primary text-white font-medium text-lg md:text-2xl rounded-lg px-4 py-4'
          >
            All Notes
          </button>
          <div className='flex flex-col'>
            <button
              id='agentFilter'
              onClick={(e) => {
                handleFilterClick(e.target.name);
                filterByAgent(agent);
              }}
              name='agentFilter'
              className='bg-primary text-white font-medium text-lg md:text-2xl rounded-lg px-4 py-4'
            >
              Filter by Agent
            </button>
            <select onChange={(e) => filterByAgent(e.target.value)}>
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
          </div>
          <div className='flex flex-col'>
            <button
              id='mapFilter'
              onClick={(e) => {
                handleFilterClick(e.target.name);
                filterByMap(map);
              }}
              name='mapFilter'
              className='bg-primary text-white font-medium text-lg md:text-2xl rounded-lg px-4 py-4'
            >
              Filter by Map
            </button>
            <select onChange={(e) => filterByMap(e.target.value)}>
              <option value='ascent'>Ascent</option>
              <option value='breeze'>Breeze</option>
              <option value='bind'>Bind</option>
              <option value='icebox'>Icebox</option>
              <option value='haven'>Haven</option>
              <option value='fracture'>Fracture</option>
              <option value='split'>Split</option>
            </select>
          </div>
          {/* <button className='bg-primary text-white font-medium  text-lg md:text-2xl rounded-lg px-4 py-4'>
            Filter by Agent & Map
          </button> */}
        </div>
        {loading ? (
          <p>loading....</p>
        ) : (
          <div className='flex flex-col w-screen items-center pb-8'>
            {notes.map((note) => (
              <Note key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
