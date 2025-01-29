import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faMobileScreen,
  faRocket,
  faChartLine,
  faServer,
  faPalette
} from '@fortawesome/free-solid-svg-icons';
import './Services.scss';

const services = [
  {
    id: 1,
    icon: faCode,
    title: 'Web Development',
    description: 'Building scalable web applications with cutting-edge technologies.',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'API Development'
    ],
    color: '#38bdf8'
  },
  {
    id: 2,
    icon: faMobileScreen,
    title: 'Mobile Development',
    description: 'Creating native and cross-platform mobile experiences.',
    features: [
      'iOS & Android Apps',
      'React Native',
      'Flutter Development',
      'App Store Optimization'
    ],
    color: '#818cf8'
  },
  {
    id: 3,
    icon: faPalette,
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user experiences.',
    features: [
      'User Interface Design',
      'User Experience Design',
      'Prototyping',
      'Design Systems'
    ],
    color: '#c084fc'
  },
  {
    id: 4,
    icon: faServer,
    title: 'Backend Development',
    description: 'Building robust and scalable server solutions.',
    features: [
      'API Development',
      'Database Design',
      'Cloud Solutions',
      'Server Management'
    ],
    color: '#fb7185'
  },
  {
    id: 5,
    icon: faRocket,
    title: 'Digital Marketing',
    description: 'Growing your online presence and reaching new customers.',
    features: [
      'SEO Optimization',
      'Social Media Marketing',
      'Content Strategy',
      'Analytics & Tracking'
    ],
    color: '#34d399'
  },
  {
    id: 6,
    icon: faChartLine,
    title: 'Business Analytics',
    description: 'Data-driven insights to grow your business.',
    features: [
      'Performance Tracking',
      'User Analytics',
      'Conversion Optimization',
      'Growth Strategy'
    ],
    color: '#fbbf24'
  }
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="services" id="services">
      <div className="services-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Services</h2>
          <p>Transforming ideas into digital reality with our comprehensive solutions</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="card-content">
                <motion.div
                  className="service-icon"
                  style={{ color: service.color }}
                  animate={{
                    scale: hoveredCard === service.id ? 1.2 : 1,
                    rotate: hoveredCard === service.id ? 360 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FontAwesomeIcon icon={service.icon} />
                </motion.div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <motion.ul
                  className="features-list"
                  animate={{
                    height: hoveredCard === service.id ? 'auto' : '0'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: hoveredCard === service.id ? 1 : 0,
                        x: hoveredCard === service.id ? 0 : -20
                      }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <div className="card-background" style={{ 
                background: `linear-gradient(135deg, ${service.color}22 0%, ${service.color}11 100%)` 
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
