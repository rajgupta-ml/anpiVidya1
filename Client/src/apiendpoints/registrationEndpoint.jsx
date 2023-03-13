import axios from 'axios';
import commonApiEndpoint from './commonApiEndpoint';

const registrationEndpoint = async ({
  fullName, email, password, userType,
}) => {
  const API_ENDPOINT = `${commonApiEndpoint}api/auth/register`;
  await axios.post(API_ENDPOINT, {
    fullName, email, password, userType,
  }, { headers: { 'Content-Type': 'application/json' } });
};

export default registrationEndpoint;
