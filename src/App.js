import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import DeleteNote from './pages/DeleteNote';
import Details from './pages/Details';
import EditNote from './pages/EditNote';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Main from './pages/Main';
import NewNote from './pages/NewNote';
import ReviewNotes from './pages/ReviewNotes';
import Signup from './pages/Signup';
import ViewSingleNote from './pages/ViewSingleNote';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkSession() {
      axios
        .get('http://localhost:5000/', {
          withCredentials: true,
        })
        .then((response) =>
          response.data.user
            ? setUser(response.data.user)
            : console.log('no user is set')
        );
    }
    checkSession();
  }, []);

  function handleLogin(username) {
    setUser(username);
  }

  function handleLogout() {
    console.log('attempting to log you out..');
    setUser(null);
    axios.post('http://localhost:5000/logout');
  }

  return (
    <div className='App'>
      {user !== null ? (
        <NavBar user={user} handleLogout={handleLogout} />
      ) : (
        <></>
      )}

      <Routes>
        {user == null ? (
          <Route path='/' element={<Landing />} />
        ) : (
          <Route path='/' element={<Main user={user} />} />
        )}
        <Route path='/signup' element={<Signup handleLogin={handleLogin} />} />
        <Route path='/login' element={<Login handleLogin={handleLogin} />} />
        <Route path='/new-note' element={<NewNote user={user} />} />
        <Route path='/notes' element={<ReviewNotes user={user} />} />
        <Route path='/note' element={<ViewSingleNote />} />
        <Route path='/note/:id' element={<Details />} />
        <Route path='/note/:id/edit' element={<EditNote user={user} />} />
        <Route path='/note/:id/delete' element={<DeleteNote user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
