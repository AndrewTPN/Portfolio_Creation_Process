import Header from './components/Header';
import { Download, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <div className="container home-container">
          <div className="home-left">
            <p className="subtitle">Soft-Dev</p>
            
            <h1 className="main-heading">
              Hello I'm<br />
              <span className="highlight">Andrew</span>
            </h1>
            
            <p className="description">
              I excel at crafting elegant digital experiences and
              I am proficient in various programming languages and
              technologies.
            </p>
            
            <div className="action-buttons">
              <a href="Resume.pdf" className="download-button">
                <Download size={20} />
                DOWNLOAD RESUME
              </a>
              
              <div className="social-links">
                <a href="https://github.com/AndrewTPN" className="social-link">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/andrew-nguyen-7285972b2/" className="social-link">
                  <Linkedin size={24} />
                </a>
                <a href="/contact" className="social-link">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="home-right">
            <div className="profile-image-container">
              <div className="rotating-border"></div>
              <div className="profile-image">
                <Image src="/profile.jpg" alt="Andrew" width={400} height={400} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container stats-container">
          <div className="stat-item">
            <h3 className="stat-number">1</h3>
            <p className="stat-label">Years of<br />experience</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">5</h3>
            <p className="stat-label">Projects<br />completed</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">70</h3>
            <p className="stat-label">Code<br />commits</p>
          </div>
           <div className="stat-item">
            <h3 className="stat-number">...</h3>
            <p className="stat-label">Leetcode<br />solutions</p>
          </div>
        </div>
      </main>
    </>
  );
}
