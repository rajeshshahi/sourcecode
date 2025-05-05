import React from 'react';
import './Testimonials.css'; // Optional: You can add styles here if needed

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1>What Our Clients Say</h1>
      <p>We are proud to collaborate with leading businesses in Nepal and beyond.</p>

      <div className="testimonial-list">

        <div className="testimonial-item">
          <h2>Hotel Seven Heaven</h2>
          <p>"Source Code provided us with a responsive hotel booking system and seamless backend integration. Highly reliable and supportive team."</p>
        </div>

        <div className="testimonial-item">
          <h2>Mokshya Travel, Jhamsikhel</h2>
          <p>"Their travel website solution is user-friendly and robust. API integration with US-based services was smooth and professional."</p>
        </div>

        <div className="testimonial-item">
          <h2>Rara Treks, Darbar Marg</h2>
          <p>"From SEO optimization to a dynamic travel portal, Source Code delivered a high-performing website that helped boost our bookings."</p>
        </div>

        <div className="testimonial-item">
          <h2>Chaitanya Design, Kupondole</h2>
          <p>"We were impressed with the UI/UX redesign of our branding site. Their design thinking and frontend development skills are top-notch."</p>
        </div>

        <div className="testimonial-item">
          <h2>NiEC Heaven Himalaya</h2>
          <p>"Source Code has been our technology partner for years. Their expertise in AI and modern CMS helped us scale faster and safer."</p>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
