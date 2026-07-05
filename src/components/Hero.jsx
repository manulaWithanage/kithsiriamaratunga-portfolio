import { ArrowRight, Award } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import './Hero.css';
import heroImg from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        
        {/* Left Side: Content */}
        <div className="hero-content">
          <h1 className="hero-headline">
            Translating <span className="serif-highlight">Ideas</span> <br />
            & Perfecting Academic Writing.
          </h1>
          
          <p className="hero-description">
            Kithsiri Amaratunga edits, translates, and crafts <strong>scholarly biographies and translations</strong> that clarify academic research, refine texts, and connect English and Sinhala languages.
          </p>

          <div className="hero-sub-badge">
            <Award size={16} className="badge-icon" />
            <span>FORMER SENIOR LECTURER • LANGUAGES & LINGUISTICS LEADER</span>
          </div>

          <div className="hero-action-buttons">
            <a href="mailto:kithshya@gmail.com" className="btn-dark">
              <span>CONTACT ME</span>
              <ArrowRight size={16} />
            </a>
            <a href="https://www.linkedin.com/in/kithsiri-amaratunga-694525202/" target="_blank" rel="noopener noreferrer" className="btn-light">
              <FaLinkedin size={18} />
              <span>LINKEDIN</span>
            </a>
            <a href="#services" className="link-text-btn">
              <span>Explore Services</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Core Competencies Cards */}
          <div className="hero-competencies">
            <span className="competencies-label">CORE FOCUS COMPETENCIES</span>
            <div className="competencies-grid">
              <div className="competency-card">
                <h4>Translation</h4>
                <p>Expert English-Sinhala translations of books and academic texts.</p>
              </div>
              <div className="competency-card">
                <h4>Academic Editing</h4>
                <p>Linguistic refinement for journal articles, theses, and dissertations.</p>
              </div>
              <div className="competency-card">
                <h4>Language Training</h4>
                <p>Specialized communication and literature training for professionals.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Portrait Visual */}
        <div className="hero-visual">
          <div className="portrait-wrapper">
            <div className="portrait-offset-card"></div>
            <img src={heroImg} alt="Kithsiri Amaratunga" className="portrait-image" />
            <div className="portrait-badge">
              <span className="badge-dot"></span>
              <span>🎓 MPhil • MA • BA (Hons)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
