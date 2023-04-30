/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validateProtectedPagesEndpoint from '../../apiendpoints/validateProtectedPagesEndpoint';
import checkExistingUser from '../../apiendpoints/checkExistingUser';

function ProtectedSwitchRoutes(props) {
  const { Component1, Component2 } = props;

  const navigate = useNavigate();
  const [route, setRoute] = useState(false);
  useEffect(() => {
    const asynFunction = async () => {
      validateProtectedPagesEndpoint().catch(() => {
        navigate('/signup');
      });
      const response = await checkExistingUser({ UCID: localStorage.getItem('UCID_TOKEN') });
      if (response.data.success) setRoute(response.data.success);
    };

    asynFunction();
  }, []);

  return (
    <div>
      {route ? <Component2 /> : <Component1 />}
    </div>
  );
}

export default ProtectedSwitchRoutes;
