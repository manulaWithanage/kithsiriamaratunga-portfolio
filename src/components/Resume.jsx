import React from 'react';
import { Briefcase, GraduationCap, Award, BookOpen } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="section" id="resume">
      <div className="container">
        <h2 className="section-title">Academic & Professional Background</h2>
        
        <div className="resume-grid">
          
          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="resume-block-title">
              <Briefcase size={24} /> Academic & Administrative Appointments
            </h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="timeline-date">2016 – 2025</span>
                <h4 className="timeline-title">Senior Lecturer in English (Grade I)</h4>
                <p className="timeline-subtitle">General Sir John Kotelawala Defence University (KDU)</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="timeline-date">2010 – 2016</span>
                <h4 className="timeline-title">Senior Lecturer in English (Grade II)</h4>
                <p className="timeline-subtitle">General Sir John Kotelawala Defence University</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="timeline-date">2003 – 2025</span>
                <h4 className="timeline-title">Head, Department of Languages</h4>
                <p className="timeline-subtitle">General Sir John Kotelawala Defence University</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="timeline-date">Past Appointment</span>
                <h4 className="timeline-title">Dean, Faculty of Management, Social Sciences and Humanities</h4>
                <p className="timeline-subtitle">General Sir John Kotelawala Defence University</p>
              </div>
            </div>
          </div>

          {/* Qualifications Section */}
          <div className="resume-block">
            <h3 className="resume-block-title">
              <GraduationCap size={24} /> Qualifications
            </h3>
            <ul className="qualification-list">
              <li>
                <span className="pub-title">MPhil in English</span>
                <span className="pub-meta">University of Kelaniya, Sri Lanka</span>
              </li>
              <li>
                <span className="pub-title">MA in Linguistics</span>
                <span className="pub-meta">University of Kelaniya, Sri Lanka</span>
              </li>
              <li>
                <span className="pub-title">BA (Special) in English (Second Class Honours)</span>
                <span className="pub-meta">University of Peradeniya, Sri Lanka</span>
              </li>
            </ul>
          </div>

          {/* Certifications Section */}
          <div className="resume-block">
            <h3 className="resume-block-title">
              <Award size={24} /> Professional Certifications
            </h3>
            <div className="glass-card">
              <div className="cert-list">
                <div className="cert-item">
                  <Award className="cert-icon" size={18} />
                  <span><strong>Certificate in Advanced English Language Instructor Course (AELIC)</strong> – Defence Language Institute, Texas, USA</span>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" size={18} />
                  <span><strong>Certificate in Managing English Language Training (MELT)</strong> – Defence Language Institute, Texas, USA</span>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" size={18} />
                  <span><strong>Certificate in Teaching in Higher Education (CTHE)</strong> – University of Kelaniya</span>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" size={18} />
                  <span><strong>Teaching Knowledge Test (TKT) Band 4</strong> – University of Cambridge ESOL</span>
                </div>
                <div className="cert-item">
                  <Award className="cert-icon" size={18} />
                  <span><strong>Specialist English Language Teacher Training</strong> – English Specialist Teachers’ College, Peradeniya</span>
                </div>
              </div>
            </div>
          </div>

          {/* Publications Section */}
          <div className="resume-block">
            <h3 className="resume-block-title">
              <BookOpen size={24} /> Selected Publications
            </h3>
            <ul className="publication-list">
              <li className="publication-item">
                <div className="pub-header">
                  <span className="pub-category">Book</span>
                  <span className="pub-date">2016</span>
                </div>
                <h4 className="pub-title">Words Epitomizing Leadership: Voice of Major General Milinda Peiris as Vice Chancellor of General Sir John Kotelawala Defence University</h4>
                <p className="pub-meta">Amaratunga, Kithsiri. Colombo, 2016.</p>
              </li>
              <li className="publication-item">
                <div className="pub-header">
                  <span className="pub-category">Book Translation</span>
                  <span className="pub-date">Published</span>
                </div>
                <h4 className="pub-title">Rasakevili Velenda</h4>
                <p className="pub-meta">Sinhala translation of R. K. Narayan’s novel 'The Vendor of Sweets'.</p>
              </li>
              <li className="publication-item">
                <div className="pub-header">
                  <span className="pub-category">Journal Article</span>
                  <span className="pub-date">2019</span>
                </div>
                <h4 className="pub-title">The Buddhist Perspective of Interpretivism as a Philosophical Base for Social Science Research</h4>
                <p className="pub-meta">Published in the <em>International Journal of Science and Research</em>.</p>
              </li>
              <li className="publication-item">
                <div className="pub-header">
                  <span className="pub-category">Journal Article</span>
                  <span className="pub-date">2018</span>
                </div>
                <h4 className="pub-title">Pluralism: Research Methodology for Social Sciences</h4>
                <p className="pub-meta">Published in the <em>International Journal of Science and Research</em>.</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
