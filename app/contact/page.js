'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Phone, Mail, MapPin } from 'lucide-react';
import { sendContactEmails } from '../utils/emailService';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Initialize EmailJS
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Map form field names to state properties
    const fieldMap = {
      'from_name': 'name',
      'from_email': 'email', 
      'from_phone': 'phone',
      'service': 'service',
      'message': 'message'
    };
    
    const stateKey = fieldMap[name] || name;
    
    setFormData(prev => ({
      ...prev,
      [stateKey]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Debug: Check what environment variables are loaded
    console.log('Environment check:');
    console.log('SERVICE_ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log('TEMPLATE_ID:', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log('PUBLIC_KEY:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    console.log('AUTO_REPLY_TEMPLATE_ID:', process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID);
    
    // Check if EmailJS is properly configured
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      alert('Email service is not configured. Please contact me directly at andrewng142@gmail.com');
      return;
    }
    
    // Send both emails using the email service
    const result = await sendContactEmails(formData, e.target);
    
    if (result.success) {
      alert('Message sent successfully! You will receive a confirmation email shortly.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } else {
      console.error('Email sending failed:', result.error);
      alert('Failed to send message. Please try again or contact me directly at andrewng142@gmail.com');
    }
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
                  name="from_name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <input
                  type="tel"
                  name="from_phone"
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
