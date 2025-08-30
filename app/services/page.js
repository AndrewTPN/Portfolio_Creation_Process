import Header from '../components/Header';
import { ChevronRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Web Development',
      description: 'I create functional and user-friendly websites using HTML, CSS, JavaScript, React Native, and Node.js. My experience includes developing industry-specific sites for construction and healthcare clients, ensuring quality and responsiveness.'
    },
    {
      number: '02',
      title: 'UI/UX Design',
      description: 'Using Figma, I design intuitive and visually appealing interfaces that enhance user experience. My focus is on creating designs that are both practical and engaging, informed by my freelance web development projects.'
    },
    {
      number: '03',
      title: 'Software Development',
      description: 'I develop software solutions with a focus on Object-Oriented Programming in Python and Java. My Capstone Project experience involved leading a team to build a working prototype, emphasizing clean code and problem-solving.'
    },
    {
      number: '04',
      title: 'Database Management',
      description: 'I offer database design and management using SQL and APEX, drawing from my Capstone Project where I implemented data solutions. I ensure efficient, scalable, and reliable database systems.'
    }
  ];

  return (
    <>
      <Header />
      
      <main>
        <div className="container">
          <h1 className="page-title">Services</h1>
          
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.number} className="service-item">
                <div className="service-number">{service.number}</div>
                <div className="service-content">
                  <div className="service-header">
                    <h3>{service.title}</h3>
                    <div className="service-icon">
                      <ChevronRight size={24} />
                    </div>
                  </div>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
