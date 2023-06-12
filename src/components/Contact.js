import React from 'react';

const contactInfo = {
    phoneNumber: '+1234567890',
    emailAddress: 'info@example.com',
    socialMedia: [
      {
        platform: 'Facebook',
        link: 'https://www.facebook.com/example',
      },
      {
        platform: 'Twitter',
        link: 'https://www.twitter.com/example',
      },
      {
        platform: 'Instagram',
        link: 'https://www.instagram.com/example',
      },
      // Add more social media platforms and links as needed
    ],
  };

const Contact = () => {
    return (
        <div className="home">
          {/* Rest of the code */}
          <div className="contact-box">
            <h2 className="section-heading">Contact Us</h2>
            <div className="contact-info">
              <p>Phone: {contactInfo.phoneNumber}</p>
              <p>Email: {contactInfo.emailAddress}</p>
            </div>
            <div className="social-media-links">
              <h3>Follow us on:</h3>
              <ul className="social-media-list">
                {contactInfo.socialMedia.map((platform, index) => (
                  <li key={index}>
                    <a href={platform.link} target="_blank" rel="noopener noreferrer">
                      {platform.platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Rest of the code */}
        </div>
      );

};

export default Contact;