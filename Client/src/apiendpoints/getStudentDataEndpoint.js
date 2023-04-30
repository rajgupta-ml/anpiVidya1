import axios from 'axios';
import commonApiEndpoint from './commonApiEndpoint';

const getStudentDataEndpoint = async ({ UCID }) => {
  const response = await axios.get(`${commonApiEndpoint}api/classroom/get-student-classrooms-data`, {
    params: {
      UCID,
    },
  });

  return response;
};

export default getStudentDataEndpoint;
