'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Image from 'next/image';

export default function Resume() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About me' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' }
  ];

  const skills = [
    { name: 'HTML', icon: '/html.png' },
    { name: 'CSS', icon: '/css3.png' },
    { name: 'JavaScript', icon: '/jvs.png' },
    { name: 'React', icon: '/react.js.png' },
    { name: 'Java', icon: '/java_language.webp' },
    { name: 'Python', icon: '/python.png' },
    { name: 'Figma', icon: '/figma2.png' },
    { name: 'Node.js', icon: '/nodejs.png' },
    { name: 'SQL', icon: '/sql.png' }
  ];

  return (
    <>
      <Header />
      
      <main>
        <div className="container">
          <div className="resume-grid">
            {/* Left Column */}
            <div className="left-column">
              <h1 className="main-title">Why hire me?</h1>
              <p className="subtitle">
                I am a dedicated software development student with a passion for programming and teamwork, eager to apply my skills to innovative solutions.
              </p>

              <div className="tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="right-column">
              {/* About Section */}
              <div className={`tab-content ${activeTab === 'about' ? 'active' : ''}`}>
                <h2 className="section-title">About me</h2>
                <p className="section-subtitle">
                  I am a software development student at SAIT with a strong focus on Object-Oriented Programming in Python, SQL, and APEX databases. I thrive in team settings and bring problem-solving and leadership skills from both technical and customer service experiences.
                </p>

                <div className="about-grid">
                  <div className="about-item">
                    <div className="about-label">Name</div>
                    <div className="about-value">Tan Phu Nguyen (Andrew)</div>
                  </div>
                  <div className="about-item">
                    <div className="about-label">Phone</div>
                    <div className="about-value">587-500-3839</div>
                  </div>
                  <div className="about-item">
                    <div className="about-label">Experience</div>
                    <div className="about-value">2 Years</div>
                  </div>
                  <div className="about-item">
                    <div className="about-label">Email</div>
                    <div className="about-value">Andrewng142@gmail.com</div>
                  </div>
                  <div className="about-item">
                    <div className="about-label">Freelance</div>
                    <div className="about-value">Available</div>
                  </div>
                  <div className="about-item">
                    <div className="about-label">Languages</div>
                    <div className="about-value">English, Vietnamese</div>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className={`tab-content ${activeTab === 'experience' ? 'active' : ''}`}>
                <h2 className="section-title">My experience</h2>
                <p className="section-subtitle">
                  Hands-on experience in software development and project leadership, with a focus on delivering quality IT solutions and managing technical teams.
                </p>

                <div className="scrollable-container">
                  <div className="sub-box">
                    <div className="card-period">2023 - 2024</div>
                    <h3 className="card-title">Capstone Project Leader</h3>
                    <div className="card-detail">
                      <span className="dot"></span>
                      <span>Southern Alberta Institute of Technology</span>
                    </div>
                    <p className="card-description">
                      Led an 8-month project to design and implement a software prototype. Applied OOP concepts in Python, utilized SQL and APEX databases, and managed team collaboration, deadlines, and technical problem-solving.
                    </p>
                  </div>
                  
                  <div className="sub-box">
                    <div className="card-period">2023 - Present</div>
                    <h3 className="card-title">Freelance Web Developer</h3>
                    <div className="card-detail">
                      <span className="dot"></span>
                      <span>Construction & Healthcare Companies</span>
                    </div>
                    <p className="card-description">
                      Collaborated with two companies to develop industry-specific websites. Designed user-friendly interfaces and managed project requirements to ensure quality and functionality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className={`tab-content ${activeTab === 'education' ? 'active' : ''}`}>
                <h2 className="section-title">My education</h2>
                <p className="section-subtitle">
                  Currently pursuing a Diploma in Software Development at SAIT, with a focus on programming and database management, complemented by academic recognition.
                </p>

                <div className="scrollable-container">
                  <div className="sub-box">
                    <div className="card-period">2023 - Present</div>
                    <h3 className="card-title">Diploma in Software Development</h3>
                    <div className="card-detail">
                      <span className="dot"></span>
                      <span>Southern Alberta Institute of Technology (SAIT)</span>
                    </div>
                    <p className="card-description">
                      Ongoing program focusing on Object-Oriented Programming (Python), SQL, APEX databases, and software development practices. Received the Jason Lang Scholarship for academic excellence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className={`tab-content ${activeTab === 'skills' ? 'active' : ''}`}>
                <h2 className="section-title">My skills</h2>
                <p className="section-subtitle">
                  A growing skill set in programming, database management, and UI/UX design, enhanced by strong leadership and collaboration abilities.
                </p>

                <div className="skills-grid">
                  {skills.map((skill) => (
                    <div key={skill.name} className="skill-card">
                      <Image src={skill.icon} alt={skill.name} width={48} height={48} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
