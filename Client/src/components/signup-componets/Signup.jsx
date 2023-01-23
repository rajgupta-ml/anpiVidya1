import React from 'react'
import Navbar from '../general-componets/Navbar'
import SignupContainer from './SignupContainer'
import { motion } from "framer-motion";
import PrivacyScreen from '../general-componets/PrivacyScreen';

function Signup() {
    return (
        <motion.div>
            <Navbar />
            <SignupContainer />
            <PrivacyScreen />
        </motion.div>
    )
}

export default Signup
