import React, { useState, useEffect } from 'react';
import "./style.css";
import API from "./utils/API";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Policies from './components/pages/Policies';
import Home from "./components/Home";
import Contact from "./components/pages/Contact";
import Login from './components/pages/Login';


function App() {

  const [isValidLogin, setIsValidLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(0)
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [token, setToken] = useState('');
  const [userNotes, setUserNotes] = useState([]);


  useEffect(() => {
   
    async function fetchNotes() {
      const data = await API.getSingleUser(userId);
      setUserNotes(data.Notes)
    }

    fetchNotes();

  }, [isLoggedIn])


  const handleLogin = (userObj) => {

    
    API.login(userObj).then((data) => {

      if (data.msg === 'invalid login credentials') {
        setIsValidLogin(false);
      }

      else if (data.token) {
        setIsValidLogin(true);
        setUserId(data.user.id);
        setToken(data.token);
        setIsLoggedIn(true);
        setUserName(data.user.name)
        setUserEmail(data.user.email);
        localStorage.setItem('token', data.token);
      }
      
    });
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // setUserId(0);
    // setToken('');
    setUserName('');
    setUserEmail('');
  }

  return (
    <>
    
    <Router>
      <Nav handleLogout={handleLogout} isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login handleLogin={handleLogin} isValidLogin={isValidLogin} isLoggedIn={isLoggedIn} userNotes={userNotes}/>}/>
        <Route path="/policies" element={<Policies/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      </Router>

    </>
  );
}

export default App;
