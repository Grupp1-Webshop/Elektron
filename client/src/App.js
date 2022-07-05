import logo from './logo.svg';
import './App.css';
import { AccountDetails, Category, ChangePassword, Checkout, Index, Login, Order, OrderHistory, Product, Profile, Register, RegisterComplete } from './pages/Pages';
import { Header } from './containers/Header'
import { Footer } from './containers/Footer'
import { Main } from './containers/Main'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/checkout" element={<Checkout/>} />
        </Routes>

      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
