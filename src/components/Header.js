import React from 'react';
import './Header.css';
import profilePic from '../assets/nk.jpg';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="navbar">
      <div className="profile-info">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div>
          <h1>Nidhi Kumari</h1>
          <p>Full Stack Developer | Passionate about Tech</p>
        </div>
      </div>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? '🌞' : '🌙'}
      </button>
    </header>
  );
}

export default Header;
