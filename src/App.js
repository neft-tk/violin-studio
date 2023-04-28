import React from 'react';
import "./style.css";
// import API from "./utils/API";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Career from "./components/pages/Career";
import Home from "./components/Home";
import Contact from "./components/pages/Contact";
import Login from './components/pages/Login';


function App() {
  return (
    <>
    
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      </Router>

    </>
  );
}

export default App;
