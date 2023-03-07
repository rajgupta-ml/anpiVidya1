import axios from 'axios';

const registrationEndpoint = async ({ email, password, userType }) => {
  const API_ENDPOINT = 'http://localhost:8080/api/auth/register';
  await axios.post(API_ENDPOINT, { email, password, userType }, { headers: { 'Content-Type': 'application/json' } });
};

export default registrationEndpoint;
