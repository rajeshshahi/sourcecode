import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
  return (
    <div className="team-container">
      <h1>Meet Our Senior Team</h1>
      <p>Our team is composed of highly skilled professionals with vast experience in IT, project management, and development. We are committed to delivering the best solutions for your business needs.</p>

      <div className="team-member">
        <div className="team-member-img">
          {/* You can add team member images here */}
          <img src="https://scontent.fktm1-1.fna.fbcdn.net/v/t1.6435-9/79415128_2900582173340377_6605679428032790528_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4ET9J90li4gQ7kNvwFAO-8g&_nc_oc=AdlUkNrkm1UJrkT-PmiiaMj09GUjH4BUR6f2ruRWkZ0olb4Sz9RDOAH9ARDbxjSRqXM&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=lYP_xShC8HW9uunWK6jGZQ&oh=00_AfE1bj6vomDJMybmTQdpPtNnSgN5IgYTMJsh0veP1kC6Zg&oe=6840205F" alt="Bikash Khanal" />
        </div>
        <div className="team-member-info">
          <h2>Bikash Khanal</h2>
          <p><strong>Senior Team Lead</strong></p>
          <p>Bikash is our Senior Full Stack Developer with over 8 years of experience in building robust and scalable applications. He leads our development team and ensures every project meets the highest standards of quality and performance.</p>
        </div>
      </div>

      <div className="team-member">
        <div className="team-member-img">
          {/* You can add team member images here */}
          <img src="https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/465729172_8762837320442031_465396636575909559_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ZUExTxIRD3IQ7kNvwEBSCfs&_nc_oc=Adkkhb0Ke_LWOhryljLqExrzBnba2TdGK0aXgPZ0GUl2J3Lb8mLWMfCUMzH7_P_j8R4&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=Sh8f6ZsdxyrluqzolN6uiA&oh=00_AfEqfSZucYRcK_Pov-b8eWzOAybCzAcLbnr04qL1DnTucw&oe=681E61A7" alt="Rajesh Shahi" />
        </div>
        <div className="team-member-info">
          <h2>Rajesh Shahi</h2>
          <p><strong>Senior Project Lead</strong></p>
          <p>Rajesh is an expert in UI development and leads our frontend team. With his deep understanding of modern web technologies, he ensures that our applications are not only functional but also visually appealing and user-friendly.</p>
        </div>
      </div>

      <div className="team-member">
        <div className="team-member-img">
          {/* You can add team member images here */}
          <img src="https://scontent.fktm1-1.fna.fbcdn.net/v/t1.6435-9/79415128_2900582173340377_6605679428032790528_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4ET9J90li4gQ7kNvwFAO-8g&_nc_oc=AdlUkNrkm1UJrkT-PmiiaMj09GUjH4BUR6f2ruRWkZ0olb4Sz9RDOAH9ARDbxjSRqXM&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=lYP_xShC8HW9uunWK6jGZQ&oh=00_AfE1bj6vomDJMybmTQdpPtNnSgN5IgYTMJsh0veP1kC6Zg&oe=6840205F" alt="Senior IT Project Lead" />
        </div>
        <div className="team-member-info">
          <h2>Senior IT Project Lead</h2>
          <p><strong>Project Management Expert</strong></p>
          <p>Our Senior IT Project Lead has extensive experience in managing large-scale IT projects. He is responsible for overseeing project timelines, resources, and ensuring smooth communication between teams and clients. His leadership ensures that we deliver high-quality projects on time.</p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
