import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScheduleMeeting from '../ScheduleMeeting/ScheduleMeeting';
import './Hero.scss';

const Hero = () => {
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const companyName = 'Shelby Solutions';

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let timeout;

    const typeText = () => {
      if (currentIndex <= companyName.length) {
        setDisplayText(companyName.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeText, 100);
      } else {
        setIsTyping(false);
      }
    };

    typeText();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <section className="hero" id="home">
        <div className="gradient-sphere"></div>
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to <br />
              <span className="highlight typewriter-text">
                {displayText}
                {isTyping && <span className="cursor">|</span>}
              </span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your digital presence with our cutting-edge solutions.
              We blend creativity with technology to deliver exceptional results.
            </motion.p>

            <motion.div 
              className="hero-cta"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="primary-button" onClick={() => setIsMeetingModalOpen(true)}>
                <span className="button-text">Schedule a Meeting</span>
                <span className="button-icon">📅</span>
              </button>
              
              <button className="secondary-button" onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                <span className="button-text">View Our Work</span>
              </button>
            </motion.div>

            <motion.div 
              className="hero-stats"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="floating-elements"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            }}
          >
            <motion.div 
              className="element code"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {'</>'}
            </motion.div>
            <motion.div 
              className="element design"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {'⟁'}
            </motion.div>
            <motion.div 
              className="element mobile"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {'📱'}
            </motion.div>
            <motion.div 
              className="element web"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {'🌐'}
            </motion.div>
            <motion.div 
              className="element database"
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            >
              {'🗄️'}
            </motion.div>
            <motion.div 
              className="element cloud"
              animate={{ rotate: -360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            >
              {'☁️'}
            </motion.div>
            <motion.div 
              className="element security"
              animate={{ rotate: 360 }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "linear" }}
            >
              {'🔒'}
            </motion.div>
            <motion.div 
              className="element analytics"
              animate={{ rotate: -360 }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "linear" }}
            >
              {'📊'}
            </motion.div>
            <motion.div 
              className="element ai"
              animate={{ rotate: 360 }}
              transition={{ duration: 8.2, repeat: Infinity, ease: "linear" }}
            >
              {'🤖'}
            </motion.div>
            <motion.div 
              className="element innovation"
              animate={{ rotate: -360 }}
              transition={{ duration: 8.8, repeat: Infinity, ease: "linear" }}
            >
              {'💡'}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ScheduleMeeting isOpen={isMeetingModalOpen} onClose={() => setIsMeetingModalOpen(false)} />
    </>
  );
};

export default Hero;
