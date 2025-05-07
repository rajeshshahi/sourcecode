import React, { useState } from 'react';
import './Home.css';
import Slider from '../components/Slider';
import { useNavigate } from 'react-router-dom';
import './TechGrid.css';
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/contact');
  };

  return (
    <div className="container">

      {/* Hero / Intro Section */}
      <section className="hero">
  <h1>Empowering the Future with <span className="highlight">Source Code.</span></h1>
  <p>
    Crafting fast, scalable, and secure digital solutions — from pixel to production.
  </p>
  <Slider />
</section>

      {/* Portfolio Section */}
      <section className="section">
        <h2>Portfolio / Projects</h2>
        <div className="card-grid">
          <div className="card">
            <img src="https://media.istockphoto.com/id/1416163256/photo/woman-search-ticket-reservation-for-holiday-girl-using-travel-application-for-flight-tickets.jpg?s=612x612&w=0&k=20&c=0oLt24C_5dtvBsasJjiOtZVps8FJ1DoeaRO9Z1gtstE=" alt="Online travel agent" width="250" height="200"/>
            <h3>Online Travel agent </h3>
            <p><strong>Smart Travel Booking with APIs.</strong></p>
          </div>
          <div className="card">
            <img src="https://media.istockphoto.com/id/1316971085/photo/what-tourist-destination-do-you-want-to-go-to.jpg?s=612x612&w=0&k=20&c=ioBWrV58N7TL2kplVVT_oVgAReM3vyiWFUykPGWm6yc=" alt="Project 2" width="250" height="200" />
            <h3>Top Doctor Online Mobile App</h3>
            <p>Instant Doctor Access Anywhere Anytime</p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section blog-section">
  <h2 className="blog-title">Blog / Resources</h2>
  <div className="blog-grid">
    <a href="/blog/choose-tech-stack" className="blog-card">
      <h3>How to Choose the Right Tech Stack for Your Business</h3>
      <p>Find out which tools fit your product vision best.</p>
    </a>
    <a href="/blog/it-trends-2025" className="blog-card">
      <h3>5 IT Trends to Watch in 2025</h3>
      <p>Stay ahead with predictions on AI, cloud, and security.</p>
    </a>
    <a href="/blog/react-vs-angular" className="blog-card">
      <h3>React vs Angular: What Should You Use?</h3>
      <p>A side-by-side comparison to help you decide.</p>
    </a>
  </div>
</section>



      {/* Contact Section */}
      <section className="cta-section">
  <div className="cta-grid">
    <div className="cta-content">
      <h2>Have a Project in Mind?</h2>
      <p>Let’s build something extraordinary together. Reach out to our expert team today.</p>
      <button onClick={handleRedirect}>Let’s Talk</button>
    </div>

    <div className="cta-info">
      <p><strong>Email:</strong> <a href="mailto:info@sourcecode.com">info@sourcecode.com</a></p>
      <p><strong>Follow us:</strong></p>
      <div className="social-links">
        <a href="#">Facebook</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>
      </div>
    </div>
  </div>
</section>


<section className="tech-section">
  <h2>What We Work With</h2>
  <p>We use modern frameworks and tools to build fast, secure, and scalable digital solutions.</p>

  <div className="accordion-grid">
    {[
      {
        title: 'Frontend Technologies',
        items: ['React (Vite / CRA)', 'Tailwind CSS', 'Material UI']
      },
      {
        title: 'Backend & CMS',
        items: ['Node.js + Express', 'Strapi (Headless CMS)']
      },
      {
        title: 'Hosting & Deployment',
        items: ['Vercel', 'Netlify', 'AWS Amplify']
      },
      {
        title: 'Forms & Integration',
        items: ['Formspree', 'EmailJS', 'Custom APIs']
      },
      {
        title: 'DevOps & CI/CD',
        items: ['GitHub Actions', 'Docker', 'Jenkins']
      },
      {
        title: 'Analytics & Monitoring',
        items: ['Google Analytics', 'Sentry', 'LogRocket']
      }
      
    ].map((tech, index) => (
      <div key={index} className="accordion-item">
        <div
          className="accordion-header"
          onClick={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        >
          <h3>{tech.title}</h3>
          <span>{activeIndex === index ? '-' : '+'}</span>
        </div>
        {activeIndex === index && (
          <ul className="accordion-content">
            {tech.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
</section>


    </div>
  );
};

export default Home;
