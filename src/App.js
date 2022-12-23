import "./style.css";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Career from "./components/pages/Career";
import Home from "./components/Home";


function App() {
  return (
    <>
    
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/career" element={<Career/>}/>
      </Routes>

      </Router>

    </>
  );
}

export default App;
