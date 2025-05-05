import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-info">
        <h1>Contact Us</h1>
        <p>We are located near Chhaya Center, Kathmandu, Nepal.</p>
        
        <div className="contact-details">
          <h2>Our Contact Numbers</h2>
          <p>Phone: +977 9709914688</p>
          <p>Phone: +977 9851177054 (WhatsApp available)</p>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
