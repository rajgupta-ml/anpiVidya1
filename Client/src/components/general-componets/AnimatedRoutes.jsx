import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../home-components/Home'
import About from '../about-components/About'
import Login from '../login-componets/Login'
import Signup from '../signup-componets/Signup'
import { AnimatePresence } from 'framer-motion'


function AnimatedRoutes() {
    const location = useLocation();
    return (
        <div>
            <AnimatePresence mode="wait" initial={false}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutus" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes
