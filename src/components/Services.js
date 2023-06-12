import React from 'react';

const services = [
    'Custom website design and development',
    'Responsive and mobile-friendly websites',
    'E-commerce solutions',
    'Content management systems (CMS)',
    'Website maintenance and support',
    'Website optimization and performance enhancements',
    'User interface (UI) design',
    'User experience (UX) design',
    'Front-end development',
    'Back-end development',
    'Database design and management',
    'API development and integration',
    'Web application development',
    'Mobile application development',
    'Progressive web app (PWA) development',
    'WordPress development',
    'Shopify development',
    'Magento development',
    'WooCommerce development',
    'SEO optimization',
    'Social media integration',
    'Payment gateway integration',
    'SSL certificate setup',
    'Website migration and deployment',
    'Website analytics and tracking',
    'Domain registration and hosting',
    'Technical support and troubleshooting',
    'Consultation and project planning',
    'Custom software development',
    'UI/UX audits and optimizations',
    'Website security and vulnerability assessments',
    'Content creation and copywriting',
    'Website accessibility optimization',
    'Web design mockups and wireframes',
    'Responsive email template design and coding',
    // Add more services as needed
  ];

const Services = () => {
    return (
        <div className="home">
          {/* Rest of the code */}
          <div className="services-box">
            <h2 className="section-heading">Our Services</h2>
            <ul className="services-list">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          {/* Rest of the code */}
        </div>
      );
    };


export default Services;