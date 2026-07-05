import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="header-logo">
          Kithsiri <span className="logo-accent">Amaratunga</span>
        </div>
        <nav className="header-nav">
          <a href="#profile" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#resume" className="nav-link">Experience</a>
          <a href="mailto:kithshya@gmail.com" className="nav-btn">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
