import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import validateProtectedPagesEndpoint from '../../apiendpoints/validateProtectedPagesEndpoint';

function Protected(props) {
  // eslint-disable-next-line react/prop-types
  const { Components } = props;
  const navaigate = useNavigate();
  useEffect(() => {
    validateProtectedPagesEndpoint().catch(() => {
      navaigate('/signup');
    });
  }, []);

  return (
    <div>
      <Components />
    </div>
  );
}

export default Protected;
