import React from 'react';

const Home = () => {
    return (
        <div className="home">
          <h1 className="home-heading">Welcome to ChimpTech</h1>
          <p className="home-description">
            At ChimpTech, we are passionate about creating exceptional web experiences that help businesses thrive online. We specialize in designing and developing cutting-edge websites that engage users and drive results.
          </p>
          <div className="why-choose-us-box">
            <h2 className="section-heading">Why Choose Us</h2>
            <ul className="why-choose-us-list">
              <li>Exceptional Design: We create unique and captivating designs that align with your brand and leave a lasting impression on your visitors.</li>
              <li>User-Centric Approach: Our focus is on delivering user-centric designs and seamless user experiences to engage and convert your target audience.</li>
              <li>Advanced Technologies: We stay up-to-date with the latest web technologies to provide you with cutting-edge solutions that are scalable and future-proof.</li>
              <li>Collaborative Process: We believe in open communication and collaboration with our clients to ensure that your vision is realized.</li>
              <li>Timely Delivery: We understand the importance of deadlines and strive to deliver projects on time without compromising quality.</li>
            </ul>
          </div>
          <button className="cta-button">Get a Free Consultation</button>
        </div>
      );
            
};

export default Home;