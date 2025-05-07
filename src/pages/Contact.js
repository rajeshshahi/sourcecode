import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Let’s Connect</h2>
        <p className="subtitle">We’re here to help you build smarter, faster, and more secure digital solutions.</p>
        <form className="contact-form">
          <div className="row">
            <input type="text" placeholder="First Name*" required />
            <input type="text" placeholder="Last Name*" required />
          </div>
          <input type="email" placeholder="Business Email*" required />
          <input type="text" placeholder="Job Title*" required />
          <select required>
            <option value="">What best describes your primary goal?*</option>
            <option value="build-website">Build a Website</option>
            <option value="ai-integration">AI Integration</option>
            <option value="cloud-solutions">Cloud Deployment</option>
            <option value="automation">Business Automation</option>
            <option value="other">Other</option>
          </select>
          <p className="privacy">We respect your privacy.</p>
          <button type="submit">Let’s Talk</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
