import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.body.classList.toggle('dark-mode', newMode);
  };

  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="main-content">
        <section id="about"><h2>About Me</h2><p>I’m Nidhi, a tech enthusiast...</p></section>
        <section id="projects"><h2>Projects</h2><p>Coming soon...</p></section>
        <section id="contact"><h2>Contact</h2><p>Email: nsinha7295@gmail.com</p></section>
      </main>
    </div>
  );
}

export default App;
