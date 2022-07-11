import logo from './logo.svg';
import './App.css';
import { AccountDetails, Category, ChangePassword, Checkout, Index, Login, Logout, Order, OrderHistory, Product, Profile, Register, RegisterComplete } from './pages/Pages';
import { Header } from './containers/Header'
import { Footer } from './containers/Footer'
import { useContext } from "react";
import { CartProvider } from './Context/CartContext';
import { AuthProvider } from './Context/AuthContext';

import { Routes, Route } from 'react-router-dom';
function App() {
  const cart = {};
  return (
    <CartProvider>
      <AuthProvider>
        <Header></Header>
          <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/change" element={<ChangePassword/>} />
            <Route path="category/:id" element={<Category />} />
            <Route path="product/:id" element={<Product />} />
          </Routes>
        <Footer></Footer>
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
