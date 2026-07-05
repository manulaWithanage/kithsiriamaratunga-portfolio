import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Services from './components/Services';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main style={{ marginTop: '80px' }}>
        <Hero />
        <Profile />
        <Services />
        <Resume />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Kithsiri Amaratunga. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
