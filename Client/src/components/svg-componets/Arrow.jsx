import React from 'react';
import { motion } from 'framer-motion';

function Arrow() {
  return (
    <div>
      <svg width="177" height="126" viewBox="0 0 177 126" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
            transition: {
              duration: 4,
              ease: 'easeInOut',
              repeat: Infinity,
            },
          }}
          d="M79.5002 99.9996C64.5002 105.833 29.2002 111 8.00017 84.9996C5.00017 79.9996 -5.49983 68.9996 15.0002 46.9996C18.5 43.9996 24.5 38.9996 42.5 35.9996C50.5 34.9996 83.5 31.9996 100 51.9996C101.5 53.4999 114.5 73.9999 83.5 82.9999C78 83.9999 62 90.4999 39.5 73.4999C36.3333 71 30.8 63.0001 34 50.9999C36 45.4999 39 35.9999 56.5 28.9999C61 27.4999 85 16.4999 137.5 21.4999C140.167 21.9999 145.9 23.4 147.5 25M147.5 25C142.167 27.6667 131.2 33 130 33M147.5 25L126 2.5"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default Arrow;
