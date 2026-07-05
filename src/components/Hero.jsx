import React from 'react';
import { Mail, Phone, MapPin, Award, BookOpen, Languages } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import './Hero.css';
import heroImg from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Decorative Background Shapes */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <div className="bg-pattern"></div>

      <div className="container hero-container">
        
        <div className="hero-content">
          <div className="hero-badge-container">
            <span className="hero-badge">
              <Award size={14} className="badge-icon" />
              Former KDU Department Head & Senior Lecturer
            </span>
          </div>
          
          <h1 className="hero-title">
            Kithsiri <br />
            <span className="serif-title">Amaratunga</span>
          </h1>
          
          <p className="hero-subtitle">
            A distinguished academic career spanning over three decades, specializing in 
            scholarly translation, professional editing, and English language training.
          </p>

          {/* Quick Highlight Cards to fill empty space and add value */}
          <div className="hero-highlights">
            <div className="highlight-mini-card">
              <Languages size={20} className="card-icon" />
              <div>
                <h4>Translation Expert</h4>
                <p>English ⟷ Sinhala</p>
              </div>
            </div>
            <div className="highlight-mini-card">
              <BookOpen size={20} className="card-icon" />
              <div>
                <h4>Academic Editor</h4>
                <p>Theses, Journals & Books</p>
              </div>
            </div>
          </div>
          
          <div className="hero-actions">
            <a href="mailto:kithshya@gmail.com" className="btn-primary">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
            
            <div className="contact-info-block">
              <a href="tel:+94718052643" className="contact-link" title="Call Mobile">
                <Phone size={18} />
                <span>+94 71 8052643</span>
              </a>
              <a href="https://www.linkedin.com/in/kithsiri-amaratunga-694525202/" target="_blank" rel="noopener noreferrer" className="contact-link" title="LinkedIn Profile">
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="location-footer">
            <MapPin size={14} />
            <span>Based in Urapola, Sri Lanka • Available for Global Consultancy</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-frame-container">
            {/* Soft backdrop glow behind image */}
            <div className="image-backdrop-glow"></div>
            
            {/* The Image frame */}
            <div className="image-frame">
              <img src={heroImg} alt="Kithsiri Amaratunga" className="hero-image" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
