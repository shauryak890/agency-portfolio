import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.scss';

const projects = [
  {
    id: 1,
    title: 'MujBites',
    description: 'A modern food delivery platform with seamless ordering experience and real-time tracking. Features include restaurant listings, menu management, and secure payment processing.',
    image: '/images/mujbites.jpg',
    url: 'https://mujbites.com/',
    tags: ['Web Development', 'UI/UX Design', 'E-commerce', 'Food Delivery'],
  },
  {
    id: 2,
    title: 'Budget Brilliance',
    description: 'Smart financial management platform helping users track expenses, set budgets, and achieve financial goals. Includes expense tracking, budget planning, and financial insights.',
    image: '/images/budgetbrilliance.jpg',
    url: 'https://www.budgetbrilliance.in/',
    tags: ['Web App', 'Financial Tech', 'React', 'Analytics'],
  },
  {
    id: 3,
    title: 'NS Hostel',
    description: 'Modern hostel booking and management system with real-time availability, online payments, and comprehensive property management features.',
    image: '/images/nshostel.jpg',
    url: 'https://nshostel.com/',
    tags: ['Web Development', 'Booking System', 'UI Design', 'Property Management'],
  },
];

const Portfolio = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Portfolio</h2>
          <p>Discover our latest work and success stories</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="view-project">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
