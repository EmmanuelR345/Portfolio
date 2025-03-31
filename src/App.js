import React from 'react';
import './assets/dist/css/bootstrap.min.css'; 
import './cover.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Home'; 
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
