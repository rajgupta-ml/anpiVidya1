import axios from 'axios';
import commonApiEndpoint from './commonApiEndpoint';

const validateProtectedPagesEndpoint = async () => {
  const API_ENDPOINT = `${commonApiEndpoint}api/validate/validate-protected-pages`;
  await axios.get(API_ENDPOINT, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}` } });
};

export default validateProtectedPagesEndpoint;
