import React from 'react';
import { motion } from 'framer-motion';
import './HowWeHelp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLightbulb, 
  faChartLine, 
  faHandshake, 
  faRocket 
} from '@fortawesome/free-solid-svg-icons';

const HowWeHelp = () => {
  const steps = [
    {
      icon: faLightbulb,
      title: "Strategic Planning",
      description: "We start by understanding your business goals and challenges, crafting tailored digital strategies that align with your vision.",
      color: "#38bdf8"
    },
    {
      icon: faChartLine,
      title: "Growth Solutions",
      description: "Our data-driven approach helps identify opportunities for growth and optimization, ensuring sustainable business success.",
      color: "#818cf8"
    },
    {
      icon: faHandshake,
      title: "Dedicated Support",
      description: "We provide ongoing support and maintenance, treating your business goals as our own with a commitment to long-term partnership.",
      color: "#c084fc"
    },
    {
      icon: faRocket,
      title: "Innovation Focus",
      description: "Stay ahead of the competition with cutting-edge technologies and innovative solutions that drive your business forward.",
      color: "#22d3ee"
    }
  ];

  return (
    <section id="how-we-help" className="how-we-help">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>How We Help You Succeed</h2>
          <p>Transform your business with our comprehensive approach to digital success</p>
        </motion.div>

        <div className="help-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="help-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="icon-wrapper" style={{ backgroundColor: `${step.color}15` }}>
                <FontAwesomeIcon 
                  icon={step.icon} 
                  style={{ color: step.color }}
                  className="icon"
                />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="success-metrics"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="metric">
            <h4>100%</h4>
            <p>Client Satisfaction Rate</p>
          </div>
          <div className="metric">
            <h4>50+</h4>
            <p>Projects Delivered</p>
          </div>
          <div className="metric">
            <h4>6+</h4>
            <p>Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeHelp;
