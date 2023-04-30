import axios from 'axios';
import commonApiEndpoint from './commonApiEndpoint';

const checkExistingUser = async ({ UCID }) => {
  const response = await axios.get(`${commonApiEndpoint}api/classroom/check-if-user-has-classrooms`, {
    params: {
      UCID,
    },
  });

  return response;
};

export default checkExistingUser;
