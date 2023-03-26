import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../home-components/Home';
import About from '../about-components/About';
import Login from '../login-componets/Login';
import Signup from '../signup-componets/Signup';
import ForgotPassword from '../login-componets/ForgotPassword';
import SuccessfullyEmailSent from '../login-componets/successfullyEmailSent';
import NewPassword from '../login-componets/NewPassword';
import NewTeacherDashboard from '../dashboard-components/teacher-dashboard-components/NewTeacherDashboard';
import Classroom from '../dashboard-components/classroom-components/Classroom';
import CreateNewClassroom from '../dashboard-components/classroom-components/CreateNewClassroom';
import Protected from '../protect-components/Protected';
import Chat from '../dashboard-components/chat-component/Chat';
import Report from '../dashboard-components/general-components/Report';
import Notes from '../dashboard-components/notes-components/Notes';

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
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/successfully-email-sent" element={<SuccessfullyEmailSent />} />
          <Route path="/change-password/:id" element={<NewPassword />} />
          <Route path="/dashboard" element={<Protected Components={NewTeacherDashboard} />} />
          <Route path="/classrooms" element={<Protected Components={Classroom} />} />
          <Route path="/create-classroom" element={<Protected Components={CreateNewClassroom} />} />
          <Route path="/chats" element={<Protected Components={Chat} />} />
          <Route path="/report" element={<Report />} />
          <Route path="/ai-notes" element={<Notes />} />

        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedRoutes;
