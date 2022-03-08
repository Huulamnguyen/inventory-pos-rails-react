import React, { useEffect, useState } from "react";
import Login from '../pages/Login';
import StoreList from '../pages/StoreList';
import User from '../pages/User';
import NavBar from './NavBar';
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogOutClick(){
    fetch("/logout",{
        method: "DELETE"
    }).then((r) => {
        if(r.ok){
            setUser(null);
        }
    });
}

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <NavBar user={user} handleLogOutClick={handleLogOutClick} />
      <Routes>
        <Route path="/users" element={<User user={user} setUser={setUser} />} />
        <Route path="/" element={<StoreList user={user} setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
