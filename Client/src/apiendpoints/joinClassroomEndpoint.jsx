import axios from 'axios';
import commonApiEndpoint from './commonApiEndpoint';

const joinClassroomEndpoint = async (values) => {
  const response = await axios.post(`${commonApiEndpoint}api/classroom/join-classrooms`, values, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export default joinClassroomEndpoint;
