'use client';

import { useState } from 'react';
import Header from '../components/Header';
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Work() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = [
    "/constr_imgs/1.png",
    "/constr_imgs/2.png",
    "/constr_imgs/3.png"
  ];
  const CapstoneProjectImages = [
    "/constr_imgs/1.png",
    "/constr_imgs/2.png",
    "/constr_imgs/3.png"
  ];
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <>
      <Header />
      
      <main>
        <div className="container work-container">
          <div className="work-left">
            <div className="project-number">01</div>
            
            <h1 className="project-title">Construction Website</h1>
            
            <div className="project-tech">
              Built with HTML, CSS, and JavaScript for a responsive and interactive user experience.
            </div>
            
            <div className="project-links">
              <a href="https://www.w3lsconstruction.site/" className="project-link" target="_blank" rel="noopener noreferrer">
                <ArrowUpRight size={24} />
              </a>
              <a href="https://github.com/AndrewTPN" className="project-link">
                <Github size={24} />
              </a>
            </div>
            
            <p className="project-description">
              A user-friendly website built for a construction company.
            </p>
          </div>
          
          <div className="work-right">
            <div className="project-image-container">
              <Image 
                src={projectImages[currentImageIndex]} 
                alt="Construction Website Screenshot" 
                width={700} 
                height={500}
              />
            </div>
            
            <div className="project-navigation">
              <button onClick={prevImage} className="nav-button">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextImage} className="nav-button">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="container work-container">
          <div className="work-left">
            <div className="project-number">02</div>
            
            <h1 className="project-title">Ecomercial Website (Capstone Project)</h1>
            
            <div className="project-tech">
              Built with HTML, CSS, and JavaScript for a responsive and interactive user experience.
            </div>
            
            <div className="project-links">
              <a href="https://project.krakensec.ca/" className="project-link" target="_blank" rel="noopener noreferrer">
                <ArrowUpRight size={24} />
              </a>
              <a href="https://github.com/AndrewTPN" className="project-link">
                <Github size={24} />
              </a>
            </div>
            
            <p className="project-description">
              jadfghjhafhdasfghsdfdfasdfasdf.
            </p>
          </div>
          
          <div className="work-right">
            <div className="project-iframe-container">
              <iframe
                src="https://project.krakensec.ca/"
                title="Capstone Project Live"
                width="700"
                height="500"
                style={{ border: "1px solid #ccc", borderRadius: "16px" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
