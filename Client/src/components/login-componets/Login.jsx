import React from 'react'
import Navbar from '../general-componets/Navbar'
import LoginContainer from './LoginContainer'
import { motion } from "framer-motion"
import PrivacyScreen from '../general-componets/PrivacyScreen'

function Login() {
    return (
        <motion.div>
            <Navbar />
            <LoginContainer />
            <PrivacyScreen />
        </motion.div>
    )
}

export default Login
