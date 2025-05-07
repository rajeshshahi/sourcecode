import React from 'react';
import './Home.css';
import Slider from '../components/Slider';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/contact');
  };

  return (
    <div className="container">

      {/* Hero / Intro Section */}
      <section className="hero">
        <h1>Welcome to Source Code</h1>
        <p>
          We are a modern IT company focused on delivering scalable, fast, and secure digital solutions.
          From web development to cloud deployment — we build it all with the latest technologies.
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
      <section className="section">
        <h2>Blog / Resources</h2>
        <ul>
          <li><a href="#">How to Choose the Right Tech Stack for Your Business</a></li>
          <li><a href="#">5 IT Trends to Watch in 2025</a></li>
          <li><a href="#">React vs Angular: What Should You Use?</a></li>
        </ul>
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


      {/* What We Work With Section */}
      <section className="section">
        <h2>What We Work With</h2>
        <p>We use modern frameworks and tools to build fast, secure, and scalable digital solutions.</p>

        <div className="tech-category">
          <h3>Frontend Technologies</h3>
          <ul>
            <li>React (Vite / Create React App)</li>
            <li>Tailwind CSS</li>
            <li>Material UI</li>
          </ul>
        </div>

        <div className="tech-category">
          <h3>Backend & CMS</h3>
          <ul>
            <li>Node.js + Express</li>
            <li>Strapi (Headless CMS)</li>
          </ul>
        </div>

        <div className="tech-category">
          <h3>Hosting & Deployment</h3>
          <ul>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>AWS Amplify</li>
          </ul>
        </div>

        <div className="tech-category">
          <h3>Forms & Integration</h3>
          <ul>
            <li>Formspree</li>
            <li>EmailJS</li>
            <li>Custom APIs</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default Home;
