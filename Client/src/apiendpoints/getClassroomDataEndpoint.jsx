import axios from 'axios';
import commonApiEndpoint from './commonApiEndpoint';

const getClassroomDataEndpoint = async ({ CLID }) => {
  const response = await axios.get(`${commonApiEndpoint}api/classroom/get-classroom-data`, {
    params: {
      CLID,
    },
  });

  return response;
};

export default getClassroomDataEndpoint;
