import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../general-componets/Navbar';
import AboutHero from './AboutHero';
import Development from './Development';
import PrivacyScreen from '../general-componets/PrivacyScreen';
import Footer from '../general-componets/Footer';
import Teams from './Team';
import Vision from './vision';

function About() {
  return (
    <motion.div>
      <Navbar />
      <div className="relative z-0">
        <AboutHero />
        <Development />
        <Teams />
        <Vision />
        <Footer />
      </div>

      <PrivacyScreen />

    </motion.div>
  );
}

export default About;
