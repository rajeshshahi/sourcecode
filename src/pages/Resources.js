import React from 'react';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources-container">
      <h1>Trusted IT Resources & Knowledge</h1>
      <p>We believe in sharing knowledge and insights to help businesses grow. Our resources include industry-leading tools, trusted IT partners, and educational content to help you stay ahead of the curve.</p>

      <div className="resource-item">
        <h2>Trusted IT Companies & Partners</h2>
        <p>We collaborate with some of the most renowned IT firms and organizations worldwide to bring cutting-edge solutions to your business. Our partners include:</p>
        <ul>
          <li><strong>Amazon Web Services (AWS)</strong> – Leading cloud computing services</li>
          <li><strong>Google Cloud</strong> – Innovative cloud solutions</li>
          <li><strong>Microsoft Azure</strong> – Enterprise-grade cloud computing platform</li>
          <li><strong>IBM</strong> – Leading AI and cloud-based enterprise solutions</li>
          <li><strong>Salesforce</strong> – CRM platform for customer success</li>
          <li><strong>Strapi</strong> – Headless CMS and API-driven development</li>
          <li><strong>Red Hat</strong> – Open-source software solutions and Linux</li>
          <li><strong>DigitalOcean</strong> – Cloud infrastructure and hosting services</li>
          <li><strong>GoDaddy</strong> – Reliable domain registration and hosting provider</li>
          <li><strong>Cloudflare</strong> – High-performance content delivery network (CDN) and security services</li>
        </ul>
      </div>

      <div className="resource-item">
        <h2>Our High-Impact Case Studies</h2>
        <p>Explore our successful collaborations and how we’ve helped businesses grow through innovative technology solutions. Here are some of our high-impact case studies:</p>
        <ul>
          <li><strong>Case Study 1:</strong> Scalable SaaS Platform for a Global E-commerce Brand</li>
          <li><strong>Case Study 2:</strong> AI-Powered Business Intelligence for a Leading Finance Firm</li>
          <li><strong>Case Study 3:</strong> Mobile App Development for a Successful Startup in Healthcare</li>
          <li><strong>Case Study 4:</strong> API Integrations for a Major US-Based Travel Agency</li>
        </ul>
      </div>

      <div className="resource-item">
        <h2>Educational Resources & Insights</h2>
        <p>Stay updated on the latest trends in technology, software development, AI, and more through our blog articles, whitepapers, and webinars:</p>
        <ul>
          <li><a href="/blog/ai-integration">AI Integration: Future-Proofing Your Business</a></li>
          <li><a href="/blog/react-vs-vue-for-web-development">React vs. Vue: Choosing the Right Framework</a></li>
          <li><a href="/blog/optimizing-cloud-infrastructure">Optimizing Your Cloud Infrastructure</a></li>
          <li><a href="/blog/building-secure-web-apps">Building Secure Web Apps: Best Practices</a></li>
          <li><a href="/blog/the-rise-of-headless-cms">The Rise of Headless CMS: A Revolution in Content Management</a></li>
        </ul>
      </div>

      <div className="resource-item">
        <h2>Tools & Platforms We Recommend</h2>
        <p>We use the most trusted tools and platforms to build high-quality solutions. Here are some of our recommended tools for modern IT development:</p>
        <ul>
          <li><strong>GitHub</strong> – Version control and code collaboration</li>
          <li><strong>Docker</strong> – Containerization and application deployment</li>
          <li><strong>Jira</strong> – Project management for agile teams</li>
          <li><strong>Figma</strong> – UI/UX design and prototyping</li>
          <li><strong>Postman</strong> – API testing and documentation</li>
          <li><strong>CircleCI</strong> – Continuous integration and deployment</li>
        </ul>
      </div>

      <div className="resource-item">
        <h2>Join Our Webinars and Events</h2>
        <p>Stay updated and learn from industry experts through our upcoming webinars and events:</p>
        <ul>
          <li><strong>Webinar 1:</strong> Leveraging AI to Scale Your Business – June 2025</li>
          <li><strong>Webinar 2:</strong> Future of Web Development – July 2025</li>
          <li><strong>Event 1:</strong> Global Tech Summit – October 2025</li>
          <li><strong>Event 2:</strong> SaaS Innovations Expo – November 2025</li>
        </ul>
      </div>

      <div className="resource-item">
        <h2>Cybersecurity & Firewall Protection</h2>
        <p>We provide comprehensive cybersecurity services and firewall protection for corporate clients to ensure the safety of their digital infrastructure. Our offerings include:</p>
        <ul>
          <li>Advanced Firewall Setup</li>
          <li>Penetration Testing & Vulnerability Assessments</li>
          <li>Malware Protection and Removal</li>
          <li>Data Encryption and Secure Storage</li>
          <li>Continuous Monitoring and Threat Detection</li>
          <li>Compliance with Industry Standards (e.g., GDPR, PCI-DSS)</li>
        </ul>
        <p>We help protect many of the largest corporations by securing their digital assets and ensuring they are resilient against evolving cyber threats.</p>
      </div>
    </div>
  );
};

export default Resources;
