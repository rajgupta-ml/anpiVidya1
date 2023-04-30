/* eslint-disable import/extensions */
import axios from 'axios';
import commanApiEndpoint from './commonApiEndpoint.js';

const createMeetingEndpoint = async (value) => {
  const { CLID, meetingDets } = value;
  const { meetingName, meetingDate } = meetingDets;

  const response = await axios.post(`${commanApiEndpoint}api/classroom/create-meeting`, { CLID, meetingName, meetingDate }, { headers: { 'Content-Type': 'Application/json' } });
  return response;
};

export default createMeetingEndpoint;
