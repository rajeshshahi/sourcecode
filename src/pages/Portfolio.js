import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1>Our Portfolio & Technologies</h1>

      {/* ✅ Projects Section */}
      <section className="projects-section">
        <h2>Featured Projects</h2>

        <div className="project-card">
          <h3>Project 1: Online Travel Agent Platform</h3>
          <p>
            A fully customized travel booking web platform integrated with multiple third-party APIs for flights, hotels, and destination management. Designed for seamless user experience, real-time data sync, and scalability for international users.
          </p>
        </div>

        <div className="project-card">
          <h3>Project 2: Top Doctor Online Mobile App</h3>
          <p>
            A robust mobile application built for Android and iOS, connecting patients with top doctors through real-time video consultations, e-prescriptions, and smart appointment scheduling — all in a secure and responsive design.
          </p>
        </div>
      </section>

      {/* ✅ Tech Stack Section */}
      <section className="tech-stack">
        <h2>Modern Technologies & Frameworks</h2>
        <p>
          At Source Code, we work with the latest technologies and frameworks to deliver high-performance, scalable, and secure digital solutions. We specialize in various tech stacks, including:
        </p>

        <div className="tech-category">
          <h3>MERN Stack (MongoDB, Express, React, Node.js)</h3>
          <p>We build modern, full-stack applications using the MERN stack — ideal for dynamic web apps and enterprise systems.</p>
        </div>

        <div className="tech-category">
          <h3>Python & Django</h3>
          <p>We leverage Python for AI, machine learning, and backend APIs using Django — fast, secure, and scalable.</p>
        </div>

        <div className="tech-category">
          <h3>Java & Android Development</h3>
          <p>Our native Android apps, built using Java/Kotlin, provide rich functionality and smooth user experiences.</p>
        </div>

        <div className="tech-category">
          <h3>Desktop Application Development</h3>
          <p>Cross-platform and native desktop apps using Electron and Java for high-performance offline tools.</p>
        </div>

        <div className="tech-category">
          <h3>PHP & Laravel</h3>
          <p>Powerful Laravel-based web solutions with clean architecture and secure codebases.</p>
        </div>

        <div className="tech-category">
          <h3>Ethical Hacking & Cybersecurity</h3>
          <p>We provide vulnerability assessments, ethical hacking, and end-to-end app security solutions.</p>
        </div>

        <div className="tech-category">
          <h3>SEO & High-Quality Backlinks</h3>
          <p>Boost your visibility with white-hat SEO, strong backlinks, and top SERP results.</p>
        </div>

        <div className="tech-category">
          <h3>Responsive & Robust Design</h3>
          <p>Every project is responsive, mobile-first, and crafted with precision for cross-device performance.</p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
