import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.scss';
import mujbitesImg from '../../images/mujbites.png';
import budgetBrillianceImg from '../../images/budgetbrilliance.png';
import nsHostelImg from '../../images/nshostel.png';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "MujBites",
      description: "A modern food delivery platform with seamless ordering experience and real-time tracking. Features include restaurant listings, menu management, and secure payment processing.",
      image: mujbitesImg,
      link: "https://mujbites.com/",
      category: "Food Delivery Platform"
    },
    {
      title: "Budget Brilliance",
      description: "Smart financial management platform helping users track expenses, set budgets, and achieve financial goals. Includes expense tracking, budget planning, and financial insights.",
      image: budgetBrillianceImg,
      link: "https://www.budgetbrilliance.in/",
      category: "FinTech"
    },
    {
      title: "NS Hostel",
      description: "Modern hostel booking and management system with real-time availability, online payments, and comprehensive property management features.",
      image: nsHostelImg,
      link: "https://nshostel.com/",
      category: "Property Management"
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Portfolio</h2>
          <p>Explore our latest projects and success stories</p>
        </motion.div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="portfolio-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="portfolio-link"
              >
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="overlay">
                    <span>View Project</span>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
