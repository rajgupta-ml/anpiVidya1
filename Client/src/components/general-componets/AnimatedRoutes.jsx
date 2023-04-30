/* eslint-disable react/no-unstable-nested-components */
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
import InsideClassroom from '../dashboard-components/classroom-components/InsideClassroom';
import InsideChat from '../dashboard-components/chat-component/InsideChat';
import Aitools from '../dashboard-components/ai-tools-components/Aitools';
import Classifier from '../dashboard-components/ai-tools-components/Classifier';
import Sentiment from '../dashboard-components/ai-tools-components/Sentiment';
import Qna from '../dashboard-components/ai-tools-components/Qna';
import Translator from '../dashboard-components/ai-tools-components/Translator';
import Grammer from '../dashboard-components/ai-tools-components/Grammer';
import ExistingTeacherDashboard from '../dashboard-components/teacher-dashboard-components/ExistingTeacherDashboard';
import ProtectedSwitchRoutes from '../protect-components/ProtectedSwitchRoutes';
import JoinClassroom from '../dashboard-components/classroom-components/JoinClassroom';

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

          <Route path="/dashboard" element={<ProtectedSwitchRoutes Component1={NewTeacherDashboard} Component2={ExistingTeacherDashboard} />} />
          <Route path="/classrooms" element={<Protected Components={Classroom} />} />
          <Route path="/create-classroom" element={<Protected Components={CreateNewClassroom} />} />
          <Route path="/chats" element={<Protected Components={Chat} />} />
          <Route path="/report" element={<Report />} />
          <Route path="/ai-notes" element={<Notes />} />
          <Route path="/classroom/:id" element={<Protected Components={InsideClassroom} />} />
          <Route path="/chats/:id" element={<Protected Components={InsideChat} />} />
          <Route path="/aitools" element={<Protected Components={Aitools} />} />
          <Route path="/aitools/classifier" element={<Protected Components={Classifier} />} />
          <Route path="/aitools/sentiment-analyzer" element={<Protected Components={Sentiment} />} />
          <Route path="/aitools/qna" element={<Protected Components={Qna} />} />
          <Route path="/aitools/translator" element={<Protected Components={Translator} />} />
          <Route path="/aitools/grammer-corrector" element={<Protected Components={Grammer} />} />
          <Route path="/join-classroom" element={<Protected Components={JoinClassroom} />} />

        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedRoutes;
