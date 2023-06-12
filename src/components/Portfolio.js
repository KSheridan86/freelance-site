import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Bundoo Cakes',
    business: 'Craft Bakery Business',
    technologies: ['Bootstrap', 'JavaScript', 'EmailJS'],
    image: 'https://raw.githubusercontent.com/KSheridan86/BundooCakes/main/assets/docs/amiresponsive.png',
  },
  {
    id: 2,
    title: 'Forged Nature',
    business: 'Local Blacksmith Business',
    technologies: ['BootStrap', 'JavaScript', 'Python', 'Django'],
    image: 'https://raw.githubusercontent.com/KSheridan86/project-5-RossAnthonyDesigns/main/docs/forged_nature_responsive.png',
  },
  // Add more project objects as needed
];

const Portfolio = () => {
  return (
    <div className="home">
      {/* Rest of the code */}
      <div className="portfolio-box">
        <h2 className="section-heading">Portfolio</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-box">
              <img src={project.image} alt={project.title} className="project-thumbnail" />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.business}</p>
                <ul className="technologies-list">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <hr></hr>
            </div>
            
          ))}
        </div>
      </div>
      {/* Rest of the code */}
    </div>
  );
};

export default Portfolio;