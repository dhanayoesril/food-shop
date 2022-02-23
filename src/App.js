import { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Dashboard from './pages/Dashboard/Dashboard'; 
import Profile from './pages/Profile/Profile';

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(()=> {
    const u = localStorage.getItem("user");
    u && JSON.parse(u) ? setUser(true) : setUser(false)
  }, [])

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  useEffect(() => {
    console.log('locaclStorage: ', localStorage)
  }, [user])

  return(
    <Routes>
      {!user && (
        <Route path="/auth" element={<Auth authenticate={()=> setUser(true)}/>}/>
      )}
      {user && (
        <>
          <Route path="/profile" element={<Profile logout={()=> setUser(false)}/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </>
      )}

      <Route path="*" element={<Navigate to={user ? "/profile" : "/auth"}/>}/>
    </Routes>
  )
}

export default App;
