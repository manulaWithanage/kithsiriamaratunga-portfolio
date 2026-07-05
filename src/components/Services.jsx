import React from 'react';
import { Languages, BookOpen, PenTool, GraduationCap, ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    title: "Translation Services",
    category: "BILINGUAL SOLUTIONS",
    badges: ["English ⟷ Sinhala", "Books & Research"],
    icon: <Languages size={28} />,
    items: [
      {
        label: "Scholarly Translation",
        desc: "Translating complex academic books, journals, and thesis papers preserving precise contextual meaning."
      },
      {
        label: "Linguistic Polish",
        desc: "Refining translated texts to match native phrasing, flow, and tone for international audiences."
      }
    ]
  },
  {
    title: "Academic Editing",
    category: "SCHOLARLY PUBLISHING",
    badges: ["Journals & Theses", "Manuscripts"],
    icon: <BookOpen size={28} />,
    items: [
      {
        label: "Peer-Review Ready",
        desc: "Formating and proofreading journal articles for publication in high-impact international journals."
      },
      {
        label: "Thesis & Dissertation",
        desc: "Comprehensive structure, logic, and reference checking for MPhil and PhD dissertations."
      }
    ]
  },
  {
    title: "Biography & Editorial",
    category: "CREATIVE & HISTORICAL",
    badges: ["Life Stories", "Institutional Books"],
    icon: <PenTool size={28} />,
    items: [
      {
        label: "Memoirs & Histories",
        desc: "Conducting interviews and drafting comprehensive biography records and corporate milestones."
      },
      {
        label: "Editorial Advisory",
        desc: "Guiding authors through draft organization, chapter structural design, and publisher formatting."
      }
    ]
  },
  {
    title: "Language Coaching",
    category: "PROFESSIONAL TRAINING",
    badges: ["1-on-1 Lessons", "Advanced Literature"],
    icon: <GraduationCap size={28} />,
    items: [
      {
        label: "Academic Writing",
        desc: "Coaching scholars and postgraduate students on structuring arguments and technical vocabulary."
      },
      {
        label: "Professional English",
        desc: "Tailored communication and public speaking training for executives and corporate leaders."
      }
    ]
  }
];

const Services = () => {
  return (
    <section className="section" id="services" style={{backgroundColor: 'var(--bg-secondary)'}}>
      <div className="container">
        <h2 className="section-title">Professional Services</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="glass-card service-card" key={index} style={{backgroundColor: 'var(--bg-primary)'}}>
              
              <div className="service-header">
                <div className="service-icon">
                  {service.icon}
                </div>
                <div className="service-meta">
                  <span className="service-category">{service.category}</span>
                  <h3 className="service-title">{service.title}</h3>
                </div>
              </div>

              <div className="service-badges">
                {service.badges.map((badge, idx) => (
                  <span className="service-badge" key={idx}>{badge}</span>
                ))}
              </div>

              <div className="service-content">
                <ul className="service-list">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="service-list-item">
                      <div className="service-list-dot"></div>
                      <div>
                        <strong>{item.label}</strong>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
