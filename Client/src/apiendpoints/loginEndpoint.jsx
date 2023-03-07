import axios from 'axios';

const loginEndpoint = async ({ email, password }) => {
  const API_ENDPOINT = 'http://localhost:8080/api/auth/login';
  await axios.post(API_ENDPOINT, { email, password }, { headers: { 'Content-Type': 'application/json' } });
};
export default loginEndpoint;
