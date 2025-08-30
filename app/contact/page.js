'use client';

import { useState } from 'react';
import Header from '../components/Header';
import { Phone, Mail, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        alert('Message sent!');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      }, (error) => {
        alert('Failed to send message.');
      });
  };

  return (
    <>
      <Header />
      
      <main>
        <div className="container contact-container">
          <div className="contact-left">
            <h1 className="contact-title">Let's work together</h1>
            
            <p className="contact-description">
            Thank you for visiting my portfolio. If you have a project in mind or would like to connect, I'd be delighted to hear from you.
            </p>
            
            <form
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="logo-design">Logo Design</option>
                </select>
              </div>
              
              <textarea
                name="message"
                placeholder="Type your message here."
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              
              <button type="submit" className="submit-button">Send message</button>
            </form>
          </div>
          
          <div className="contact-right">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>(587)-500-3839 </p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>andrewng142@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-details">
                  <h3>Located</h3>
                  <p>Calgary, Alberta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
