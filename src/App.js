import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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
  const [user, setUser] = useState('jordan');

  function handleLogout() {
    setUser(null);
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
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
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
