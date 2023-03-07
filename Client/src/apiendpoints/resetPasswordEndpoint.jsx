import axios from 'axios';
import commonApiEndpoint from './commonApiEndpoint';

const resetPasswordEndpoint = async ({ password }, token) => {
  const API_ENDPOINT = `${commonApiEndpoint}api/auth/reset-password`;
  await axios.put(API_ENDPOINT, { password }, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } });
};

export default resetPasswordEndpoint;
