import React, { useEffect, useState } from "react";
import Login from '../features/users/Login';
import StoreList from '../features/stores/StoreList';
import User from '../features/users/User';
import ProductPage from '../features/products/ProductPage';
import ProductDetail from '../features/products/ProductDetail';
import BrandDetail from '../features/brands/BrandDetail';
import SupplierDetail from '../features/suppliers/SupplierDetail';
import NewProductForm from '../features/products/NewProductForm';
import Sale from '../features/sales/Sale';
import SaleDetail from '../features/sales/SaleDetail';
import NavBar from './NavBar';
import Footer from './Footer';
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
        <Route path="/sale/:id" element={<SaleDetail />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/supplier/:id" element={<SupplierDetail />} />
        <Route path="/brand/:id" element={<BrandDetail />} />
        <Route path="/products/new" element={<NewProductForm />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/store/:id" element={<ProductPage user={user} />} />
        <Route path="/users" element={<User user={user} setUser={setUser} />} />
        <Route path="/" element={<StoreList user={user} setUser={setUser} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
