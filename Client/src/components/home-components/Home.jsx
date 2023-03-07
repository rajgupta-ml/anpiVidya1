import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../general-componets/Navbar';
import Hero from './Hero';
import Features from './FeaturesComponet/Features';
import Testimonial from './Testimonial';
import Footer from '../general-componets/Footer';
import PrivacyScreen from '../general-componets/PrivacyScreen';

function Home() {
  return (
    <div>
      <motion.div>
        <Navbar />
        <Hero />
        <Features />
        <Testimonial />
        <Footer />
        <PrivacyScreen />
      </motion.div>

    </div>
  );
}

export default Home;
