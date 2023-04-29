import axios from 'axios';
import commonApiEndpoint from './commonApiEndpoint';

const handleClassroomCreationEndpoint = async (value) => {
  const JWT_TOKEN = localStorage.getItem('JWT_TOKEN');
  const UCID_TOKEN = localStorage.getItem('UCID_TOKEN');
  const details = await axios.post(`${commonApiEndpoint}api/classroom/create-classroom`, { classroomName: value, JWT_TOKEN, UCID_TOKEN }, { headers: { 'Content-Type': 'application/json' } });
  return details;
};

export default handleClassroomCreationEndpoint;
