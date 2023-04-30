import axios from 'axios';
import commonApiEndpoint from './commonApiEndpoint';

const getClassroomsDataendpoint = async ({ UCID }) => {
  const response = await axios.get(`${commonApiEndpoint}api/classroom/get-classrooms-data`, {
    params: {
      UCID,
    },
  });

  return response;
};

export default getClassroomsDataendpoint;
