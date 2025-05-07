import React, { useState } from 'react';
import './CtaPopup.css';

const CtaPopup = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="cta-popup-wrapper">
      {open && (
        <div className="cta-popup">
          <h4>Have a Project in Mind?</h4>
          <p>Let’s build something extraordinary together.</p>
          <a href="mailto:info@sourcecode.com">📧 info@sourcecode.com</a>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      )}
      <button className="cta-toggle" onClick={() => setOpen(!open)}>
        {open ? '×' : 'Let’s Talk'}
      </button>
    </div>
  );
};

export default CtaPopup;
