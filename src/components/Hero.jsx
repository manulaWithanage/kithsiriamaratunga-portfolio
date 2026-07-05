import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import './Hero.css';
import heroImg from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        <div className="hero-image-wrapper">
          <img src={heroImg} alt="Kithsiri Amaratunga" className="hero-image" />
        </div>
        
        <h1 className="hero-title">Kithsiri Amaratunga</h1>
        
        <p className="hero-subtitle">
          Academic Editor | English–Sinhala Translator | Biography Writer <br/>
          Former Senior Lecturer, General Sir John Kotelawala Defence University
        </p>

        <div className="hero-contact">
          <a href="https://www.linkedin.com/in/kithsiri-amaratunga-694525202/" target="_blank" rel="noopener noreferrer" className="contact-btn">
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:kithshya@gmail.com" className="contact-btn">
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a href="tel:+94718052643" className="contact-btn">
            <Phone size={20} />
            <span>+94 71 8052643</span>
          </a>
          <div className="contact-btn" style={{cursor: 'default', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', borderColor: 'rgba(0,0,0,0.1)'}}>
            <MapPin size={20} />
            <span>Urapola, Sri Lanka</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
