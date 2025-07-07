import {Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import Profile from './components/Profile';
import NotFound from './pages/NotFound';
import './styles/App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
