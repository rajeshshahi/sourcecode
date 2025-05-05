import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Source Code</h1>
      <p>
        At Source Code, we are renowned for delivering innovative technology solutions that drive your business forward. We don't just build products—we sell knowledge and expertise that empower businesses to grow exponentially. Whether it's web development, mobile apps, or IT consultancy, we are your trusted partner in digital transformation.
      </p>

      <div className="company-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to help businesses accelerate their growth by providing cutting-edge technology solutions. We strive to empower companies with the tools and expertise they need to succeed in a rapidly changing digital landscape.
        </p>
      </div>

      <div className="company-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Innovation:</strong> Constantly exploring new technologies to provide forward-thinking solutions.</li>
          <li><strong>Customer-centricity:</strong> Putting our clients' needs at the center of everything we do.</li>
          <li><strong>Leadership:</strong> As a strong tech leader, we are committed to shaping the future of technology in our nation.</li>
          <li><strong>Excellence:</strong> We aim for perfection and deliver only the highest quality of work.</li>
        </ul>
      </div>

      <div className="company-vision">
        <h2>Our Vision</h2>
        <p>
          As a leading provider of SaaS, PaaS, and AaaS solutions, we aim to be at the forefront of the IT industry. We believe in shaping the future of business by providing scalable and flexible software solutions that meet the ever-evolving needs of our clients. Our vision is to be the go-to tech partner for businesses across industries, ensuring their success through technological innovation.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
