import React from 'react';
import { motion, useIsPresent } from 'framer-motion';
import '../../css/general-css/privacyScreen.css';

function PrivacyScreen() {
  const isPresent = useIsPresent();
  return (
    <div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, delay: 0, easeInOut: 'circIn' } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, delay: 0, easeInOut: 'circOut' } }}
        style={{
          originX: isPresent ? 0 : 1,
          backgroundColor: '#0B0000',
        }}
        className="privacy-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, delay: 0.2, easeInOut: 'circIn' } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, delay: 0.2, easeInOut: 'circOut' } }}
        style={{
          originX: isPresent ? 0 : 1,
          backgroundColor: '#FFCC33',
        }}
        className="privacy-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, delay: 0.4, easeInOut: 'circIn' } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, delay: 0.4, easeInOut: 'circOut' } }}
        style={{
          originX: isPresent ? 0 : 1,
          backgroundColor: '#FF6633',
        }}
        className="privacy-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, delay: 0.6, easeInOut: 'circIn' } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, delay: 0.6, easeInOut: 'circOut' } }}
        style={{
          originX: isPresent ? 0 : 1,
          backgroundColor: '#65179C',
        }}
        className="privacy-screen"
      />
    </div>
  );
}

export default PrivacyScreen;
