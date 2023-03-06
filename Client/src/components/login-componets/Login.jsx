import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../general-componets/Navbar';
import LoginContainer from './LoginContainer';
import PrivacyScreen from '../general-componets/PrivacyScreen';

function Login() {
  return (
    <motion.div>
      <Navbar />
      <LoginContainer />
      <PrivacyScreen />
    </motion.div>
  );
}

export default Login;
