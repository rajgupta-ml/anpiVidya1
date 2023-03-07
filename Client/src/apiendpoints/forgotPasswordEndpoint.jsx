import axios from 'axios';
import commonApiEndpoint from './commonApiEndpoint';

const forgotPasswordEndpoint = async ({ email }) => {
  const API_ENDPOINT = `${commonApiEndpoint}api/auth/send-email-to-change-password`;
  await axios.post(API_ENDPOINT, { email }, { headers: { 'Content-Type': 'application/json' } });
};

export default forgotPasswordEndpoint;
