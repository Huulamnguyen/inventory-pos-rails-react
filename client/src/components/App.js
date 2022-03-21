import React, { useEffect, useState } from "react";
import Login from '../pages/Login';
import StoreList from '../pages/StoreList';
import User from '../pages/User';
import ProductPage from '../features/products/ProductPage';
import ProductDetail from '../features/products/ProductDetail';
import NewProductForm from '../features/products/NewProductForm';
import NavBar from './NavBar';
import { Routes, Route, useNavigate } from "react-router-dom";
import {Alert, Container} from 'react-bootstrap';

function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate()

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
    // Navigate to home page after logout and clear history
    navigate("/");
}

  if (!user) return (
    <>
    <Container>
      <Alert className="mt-3" variant="primary" >Please Login OR Signup To Create A New Account</Alert>
    </Container>
    <Login onLogin={setUser}/>
    </>
  )

  return (
    <div>
      <NavBar user={user} handleLogOutClick={handleLogOutClick} />
      <Routes>
        <Route path="/products/new" element={<NewProductForm />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="/stores/:id" element={<ProductPage user={user} />} />
        <Route path="/users" element={<User user={user} setUser={setUser} />} />
        <Route path="/" element={<StoreList user={user} setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
