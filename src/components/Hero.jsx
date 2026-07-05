import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import './Hero.css';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* Floating Gradient Blobs */}
      <div className="gradient-blob blob-1"></div>
      <div className="gradient-blob blob-2"></div>
      <div className="gradient-blob blob-3"></div>

      <div className="container hero-container">
        <div className="hero-image-wrapper">
          <img src={heroImg} alt="Kithsiri Amaratunga" className="hero-image" />
        </div>
        
        <h1 className="hero-title">Kithsiri Amaratunga</h1>
        
        <p className="hero-subtitle">
          Academic Editor | English–Sinhala Translator | Biography Writer <br/>
          Former Senior Lecturer, General Sir John Kotelawala Defence University
        </p>

        {/* Dual Primary CTA Buttons */}
        <div className="hero-actions">
          <a href="mailto:kithshya@gmail.com" className="btn-primary-centered">
            <span>Contact Me</span>
            <ArrowRight size={18} />
          </a>
          <a href="#services" className="btn-secondary-centered">
            <span>Explore Services</span>
          </a>
        </div>

        {/* Cleaner Social & Info Links Row */}
        <div className="hero-social-links">
          <a href="https://www.linkedin.com/in/kithsiri-amaratunga-694525202/" target="_blank" rel="noopener noreferrer" className="social-link-item">
            <FaLinkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a href="tel:+94718052643" className="social-link-item">
            <Phone size={18} />
            <span>+94 71 8052643</span>
          </a>
          <div className="social-link-item location-item">
            <MapPin size={18} />
            <span>Urapola, Sri Lanka</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
