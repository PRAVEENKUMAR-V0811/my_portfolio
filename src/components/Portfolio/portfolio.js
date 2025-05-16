import React, { useState } from 'react';
import { FaTimes, FaGithub } from 'react-icons/fa';
import './portfolio.css';
import elearn1 from '../../assets/homepage-elearn.png';
import savaNote from '../../assets/savanote.png';
import tickpress from '../../assets/tickpress.png';
import datanest from '../../assets/DataNest.png';

const projects = [
  {
    id: 1,
    title: 'Online E-Learning Platform',
    category: 'Web',
    image: elearn1,
    description: 'Developed a full-stack E-Learning platform using React.js, Node.js, and MySQL with features like user authentication, course enrollment, video streaming, quizzes, payments, and certificate generation.',
    techStack: 'React.js, Node.js, MySQL, JWT, Axios',
    github: 'https://github.com/PRAVEENKUMAR-V0811/Student_E-Learning_Portal'
  },
  {
    id: 2,
    title: 'DataNest - Online CSV Editor',
    category: 'Web',
    image: datanest,
    description: 'DataNest is a fast, user-friendly online CSV editor that enables uploading, editing, and exporting CSV files directly in the browser. It features drag-and-drop support, real-time table editing, and a responsive design—no sign-up needed. Ideal for quick CSV modifications on any device.',
    techStack: 'Vite + React, Tailwind CSS, EmailJs',
    github: 'https://github.com/PRAVEENKUMAR-V0811/DataNest-Online-CSV-Editor.git'
  },
  {
    id: 3,
    title: 'Real Time Chat Application',
    category: 'App',
    image: '',
    description: 'Under Working on a real-time chat application using React.js, Express.js, Socket.io, and MongoDB. The application allows users to send and receive messages in real-time, share images and manage user profiles.',
    techStack: 'React.js, Express.js, Socket.io, MongoDB',
    github: 'https://github.com/yourusername/task-tracker'
  },
  {
    id: 4,
    title: 'SavaNote - Note Taking Chrome Extension',
    category: 'Extension',
    image: savaNote,
    description: 'SavaNote is a user-friendly Chrome extension designed to help you quickly capture, edit, and manage your notes directly in your browser. Whether you\'re brainstorming ideas, saving important reminders, or organizing key information, SavaNote offers a seamless and efficient solution for note-taking right at your fingertips.',
    techStack: 'HTML, CSS, JavaScript, Chrome Extension API , Quill.js',
    github: 'https://github.com/PRAVEENKUMAR-V0811/SavaNote-Chrome-Extension'
  },
  {
    id: 5,
    title: 'TickPress - Time Tracker for Focused Work',
    category: 'Extension',
    image: tickpress,
    description: 'TickPress is a lightweight and efficient Chrome extension designed to help users track the time they spend on solving questions, studying, or performing deep, focused tasks.Whether you\'re a student, coder, or competitive exam aspirant, TickPress helps you manage your time effectively.',
    techStack: 'HTML, CSS, JavaScript, Chrome Extension API',
    github: 'https://github.com/PRAVEENKUMAR-V0811/TickPress_Timer_Extension.git'
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const handleOpenModal = (project) => {
    setActiveProject(project);
  };

  const handleCloseModal = () => {
    setActiveProject(null);
  };

  return (
    <div className="portfolio-container" id='portfolio'>
      <h2>My Portfolio</h2>
      <div className="portfolio-filters">
        {['All', 'Web', 'App' , 'Extension'].map(cat => (
          <button
            key={cat}
            className={filter === cat ? 'active' : ''}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="portfolio-card">
            <div className="portfolio-image-container">
              <img src={project.image} alt={project.title} className="portfolio-image" />
            </div>
            <h3 className="portfolio-project-title">{project.title}</h3>
            <button
              className="portfolio-demo-icon"
              onClick={() => handleOpenModal(project)}
            >
              <a href={project.demoLink} className="portfolio-demo-link">More →</a>
            </button>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="portfolio-modal-overlay">
          <div className="portfolio-modal">
            <button className="close-button" onClick={handleCloseModal}>
              <FaTimes />
            </button>
            <h3 className="modal-title">{activeProject.title}</h3>
            <p className="modal-text"><strong>Tech Stack Used:</strong> {activeProject.techStack}</p>
            <p className="modal-text"><strong>Description:</strong> {activeProject.description}</p>
            <div className="github-icon-container">
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-icon-link"
              >
                <FaGithub size={32} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
