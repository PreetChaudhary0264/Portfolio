import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dash from './pages/Dash';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Achievements from './pages/Achievements';

function App() {
  return (
      <Routes>
        {/* All routes wrapped in Layout for persistent sidebar */}
        <Route path="/" element={<Dash />}>
          <Route index element={<Home />} />          {/* Home: / */}
          <Route path="projects" element={<Projects />} />  {/* Projects: /projects */}     {/* Skills: /skills */}
          <Route path="contact" element={<Contact />} />    {/* Contact: /contact */}
          <Route path="navbar" element={<Navbar/>} />
          <Route path="achievements" element={<Achievements/>} />
          {/* Add more routes here, e.g., <Route path="blog" element={<Blog />} /> */}
        </Route>
        {/* 404 fallback */}
        <Route path="*" element={<div className="flex items-center justify-center min-h-screen text-white">404 - Page Not Found</div>} />
      </Routes>
  );
}

export default App;




