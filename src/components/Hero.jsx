import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import './Hero.css';
import heroImg from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        
        <div className="hero-content">
          <span className="hero-badge">Professional Portfolio</span>
          <h1 className="hero-title">Kithsiri Amaratunga</h1>
          <p className="hero-subtitle">
            Academic Editor, English–Sinhala Translator & Biography Writer.<br/>
            Former Senior Lecturer at General Sir John Kotelawala Defence University.
          </p>
          
          <div className="hero-actions">
            <a href="mailto:kithshya@gmail.com" className="btn-primary">
              <Mail size={18} />
              Get in Touch
            </a>
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/kithsiri-amaratunga-694525202/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                <FaLinkedin size={20} />
              </a>
              <a href="tel:+94718052643" aria-label="Phone" className="social-icon">
                <Phone size={20} />
              </a>
              <div className="location-badge" title="Urapola, Sri Lanka">
                <MapPin size={16} />
                <span>Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-frame">
            <div className="frame-decoration"></div>
            <img src={heroImg} alt="Kithsiri Amaratunga" className="hero-image" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
